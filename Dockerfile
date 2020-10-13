FROM node:12.19.0
RUN apt-get update -y && apt-get upgrade -y 
RUN apt-get install rsync -y
# Create and define the node_modules's cache directory.
RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache

# Install the application's dependencies into the node_modules's cache directory.
COPY package*.json ./
# RUN yarn global add @vue/cli
RUN yarn 
# Create and define the application's working directory.
WORKDIR /usr/src/app
COPY . .
EXPOSE 8080

CMD [ "yarn", "run", "serve" ]