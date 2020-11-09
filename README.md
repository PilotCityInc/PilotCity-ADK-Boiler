# PilotCity-Boiler
This a template repository that can be used for PilotCity developers to create their own activities for the PilotCity Platform.
Do to the extensive use of docker, it's recommended for you to be familiar with docker and docker-compose before using this repository.

## Using the template
To use this repo, create a template on your own github account. Do this by clicking on the template button on the top right of the
repository page.
Make it public and only pull the master branch. 

## Project setup
This project is built for development through docker and vscode. Everything should work out of the box.

### Add Original Template as upstream for changes
`git remote add upstream https://github.com/PilotCityInc/PilotCity-PDK-Boiler `
`git merge upstream/master master --allow-unrelated-histories --squash`
Fix any conflicts if possible
`git push`



```
docker-compose up
```
This will start multiple services as outlined in the docker-compose.yml file. 
By default this will start 4 services.
```yml
version: '3.8'
networks:
  pdk:
    driver: bridge
services:
  microapp: # Microapp builds the pdk-sample. By default the in-container development image is used. See more here https://code.visualstudio.com/docs/remote/containers
    container_name: microapp
    ...
  # microapp: # host-based development. This image syncs the state of the container with the host. Simpler to use, although its much more intensive
  #   container_name: microapp
  ...
  mongodb: # creates local mongodb database server with prebuilt test data
    image: mongo
    container_name: mongodb
    ...
 mongo-cli: # creates a mongo shell that attatches to the local database defined above
    container_name: mongo-cli
    image: mongo
  mongo-express: # mongodb web client for Database GUI
    image: mongo-express
    container_name: mongo-express
    ...

```
## Container Development workflow
Start all the services using `docker-compose up` . A service can be specified by using `docker-compose up $SERVICE`.

### microapp 
It's recommended to attach a terminal directly to the running microapp instance for development and building directly inside the container.
See (here)[https://code.visualstudio.com/docs/remote/containers]
Git management would be handled outside the container while all project files are handled directly in the container.

#### dependency management
dependencies can be managed directly inside the container. To install a new dependency attach your terminal directly to the container
`docker attach microapp` then `yarn add $PACKAGE`. 
If a new dependency is added to the project it is recommended to rebuild the image rather than installing packages manually. 
`docker-compose down` followed by `docker-compose up --build`

### mongodb
The Mongo service requires no configuration. 

### mongo-cli
To use the mongo cli make sure all services are running then attach a shell to the cli.
After running `docker-compose up`  then a terminal can be attached to the cli by `docker attach mongo-cli` 

### mongo-express
The express server requires no configuration and should run following a successful start of the mongodb service

## Troubleshooting
If problems with docker-compose up are encountered its most likely a problem with the fixed container names. If a service is killed then the container is not removed on shutdown.
`docker-compose down` will clean all containers related to this project.
A subsequent `docker-compose up` should work. 
## Other Features

```
docker-compose run microapp yarn test:unit
```

### Lints and fixes files
```
docker-compose run microapp yarn lint
```
## Docker Resources
https://www.thebyte.io/offers/wqnqeqQm/checkout

### signed by akheel