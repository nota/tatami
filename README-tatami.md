# tatami

All commands are run at PROJECT_ROOT.

### Develop
Changes to the files in the following directories are monitored and rebuilt.
- assets/
- demo/pwa_ui/src/client/

```
$ npm run watch-demo
```

Open ./demo/pwa_ui/index.html in your browser.

If the first time, you need to run:
```
$ npm run prepare-demo
```

Or see demo/pwa_ui/README.md

### Update github pages
Before push to master branch, run below command.
```
$ npm run build-demo
```
