#!/bin/bash

# rsync -arvWS --delete --no-compress --exclude  /usr/src/app/node_modules/.cache /usr/src/cache/node_modules/. /usr/src/app/node_modules/
ls -1 /usr/src/cache/node_modules | xargs -I {} -P 8 -n 1 rsync -ParvWS --delete --no-compress --exclude  /usr/src/app/node_modules/.cache /usr/src/cache/node_modules/{} /usr/src/app/node_modules/

exec yarn run serve
