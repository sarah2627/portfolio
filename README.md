# My portfolio 💻

*IMAC Semester 5 project*

Application build with VueJs.

## Table of contents

* [**How To**](#how-to)
    + [**Install Node Libraries**](#install-node-libraries)
    + [**Run Server**](#run-server)
    + [**For Developpers**](#for-developpers)
        - [**Check JS Syntax with Eslint**](#check-js-syntax-with-eslint)
        - [**Compiles and minifies for production**](#compiles-and-minifies-for-production)
        - [**Building for GitHub Pages**](#building-for-github-pages)
* [**Ressources**](#ressources)

## How To

### Install Node Libraries

The first thing to do is to install the libraries.
Open a shell inside the root folder.

```bash
npm install
```

Now, you should have a sub-folder *node_modules*.

### Run Server // Compiles and hot-reloads for development

```
npm run serve
```

The server will be opened on *localhost:8080*.
To make it stop, use Ctrl+C.


#### Check JS Syntax with linter

For developers only: To make sure the code is well written, please run this command several times during your development work.

```bash
npm run lint
```

If nothing happens, everything is right. Else, warnings or errors will be written there.

#### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
