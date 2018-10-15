# tatami

All commands are run at PROJECT_ROOT.

## Develop of bootstrap-sass
Run below command.
When changes of files in `assets/` are detected, they will be copied to `demo/pwa_ui/client/bootstrap-sass/assets/`.
```
$ npm run watch
```

## demo/pwa_ui
### Develop or launch a demo app
It is necessary to execute the above section command in advance.
Run below command.
```
$ npm run watch-demo
```
Open http://localhost:2500

If the first time, you need to run:
```
$ npm run prepare-demo
```

Or see demo/pwa_ui/README.md

### deploy to Heroku
```
$ git push heroku LOCAL_BRANCH_NAME:master
```
