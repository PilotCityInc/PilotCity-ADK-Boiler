/* eslint-disable @typescript-eslint/camelcase */
import VueApollo from 'vue-apollo';

//  Allows for using secure endpoint with apollo
import { setContext } from 'apollo-link-context';
import { ApolloClient } from 'apollo-boost';

import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// Realm Setup
import * as RealmWeb from 'realm-web';

// Name of the localStorage item
const AUTH_TOKEN = 'apollo-token';

//  Mongo App Setup
//  ! Replace with you App ID from Mongo Realm
export const APP_ID = 'programdev-aogmg';

const app = new RealmWeb.App({
  id: APP_ID,
  baseUrl: 'https://realm.mongodb.com'
});

const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;
// Http endpoint
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || graphql_url;
const httpLink = createHttpLink({ uri: graphql_url });

const authorizationHeaderLink = setContext(async (_, { headers }) => {
  if (app.currentUser) {
    // Refreshing custom data also refreshes the access token
    await app.currentUser.refreshCustomData();
  } else {
    // If no user is logged in, log in an anonymous user
    await app.logIn(RealmWeb.Credentials.anonymous());
  }
  // Get a valid access token for the current user
  const accessToken = app.currentUser?.accessToken;
  // Set the Authorization header, preserving any other headers
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`
    }
  };
});

const defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  httpEndpoint,
  // You can use `wss` for secure connection (recommended in production)
  // Use `null` to disable subscriptions
  wsEndpoint: null,
  // LocalStorage token
  tokenName: AUTH_TOKEN,
  // Enable Automatic Query persisting with Apollo Engine
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false,

  // Override default apollo link
  // note: don't override httpLink here, specify httpLink options in the
  // httpLinkOptions property of defaultOptions.
  link: authorizationHeaderLink.concat(httpLink),

  // Override default cache
  cache: new InMemoryCache()

  // Override the way the Authorization header is set
  // getAuth: (tokenName) => ...

  // Additional ApolloClient options
  // apollo: { ... }

  // Client local data (see apollo-link-state)
  // clientState: { resolvers: { ... }, defaults: { ... } }
};

const apolloClient = new ApolloClient({
  ...defaultOptions,
  connectToDevTools: process.env.NODE_ENV === 'development'
});
// Manually call this when user log in
export async function onLogin(token: string) {
  if (typeof localStorage !== 'undefined' && token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
  try {
    await apolloClient.resetStore();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (login)', 'color: orange;', e.message);
  }
}

// Manually call this when user log out
export async function onLogout() {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN);
  }
  try {
    await apolloClient.resetStore();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (logout)', 'color: orange;', e.message);
  }
}
const provider = new VueApollo({
  defaultClient: apolloClient
});
export default provider;
