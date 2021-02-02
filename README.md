# My portfolio 💻

*IMAC Semester 5 project*

![portfolio-home-screen](src/assets/portfolio-home-screen.png)

Authors:
- Sarah VEYSSET

## Table of contents

* [**The project**](#the-project)
    + [**The instructions**](#the-instructions)
* [**How To**](#how-to)
    + [**Install Node Libraries**](#install-node-libraries)
    + [**Run Server**](#run-server)
    + [**For Developpers**](#for-developpers)
        - [**Check JS Syntax with Eslint**](#check-js-syntax-with-eslint)
        - [**Compiles and minifies for production**](#compiles-and-minifies-for-production)
* [**Ressources**](#ressources)

## The project

### The instructions

#### Create a portfolio or any other creatively aimed website using the Js framework.

I chose to develop a portfolio in order to present my projects and to have a presentation support for eventual questions. I chose the VueJs framework for its simplicity, flexibility and performance.

#### Integrate the following elements :

- [x] Integrate an interactive 3D or 2D canvas

=> integration of a 2D canva

- [x] Minimum 2 routes with custom transition between the 2
- [x] Embedding JS animations via [gsap](https://greensock.com/gsap/) or animateJS or other... => use of GSAP
- [x] Responsive and with good browser compatibility
- [x] The notation will be based on the in-depth study of the concepts already seen, the justifications of the technical choices, the cleanliness of the code, the solidity of the animations. The code must therefore be clean enough and with a minimum of commentary so that any other colleague can join you on the project.
- [x] No visual and JS bugs should be present.

Translated with www.DeepL.com/Translator (free version)

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
