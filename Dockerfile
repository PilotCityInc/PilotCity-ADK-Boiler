FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn add @vue/cli
RUN yarn install
COPY . .
EXPOSE 8080

CMD [ "yarn", "run", "serve" ]