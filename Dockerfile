FROM node:10.13.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8080

CMD [ "yarn", "run", "serve" ]