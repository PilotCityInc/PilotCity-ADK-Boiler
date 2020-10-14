# PilotCity-Boiler

## Project setup
```
docker-compose up
```

## Troubleshooting
If the vue-cli service is missing run
```
docker-compose run microapp yarn
```
then
```
docker-compose up
```

### Run your unit tests
```
docker-compose run microapp yarn test:unit
```

### Lints and fixes files
```
docker-compose run microapp yarn lint
```