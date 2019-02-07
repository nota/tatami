# tatami

All commands are run at PROJECT_ROOT.

### Develop
Changes to the files in the following directories are monitored and rebuilt.
- assets/
- demo/tatami/src/client/

The local server also starts up on port 2500.

```
$ npm run watch-demo
```

Open http://localhost:2500/ in your browser.

If the first time, you need to run:
```
$ npm run prepare-demo
```

### deploy to GitHub Pages
Static files will be generated in `./demo/tatami/gh-pages/` and deployed to the `origin/gh-pages` branch.
```
$ npm run tatami-gh-pages
```

#### Demos
- https://tatami-ui.herokuapp.com/
- https://tatami-ui.herokuapp.com/default.html
- https://nota.github.io/tatami/index.html
- https://nota.github.io/tatami/default.html
