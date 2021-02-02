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

Créer un portfolio ou tout autre site a visée créative en utilisant le framework VueJs et intégrer les éléments suivants :
[x] Intégrer un canvas 3D ou 2D intéractif
=> intégration d'un canva 2D
[x] Minimum 2 routes avec custom transition entre les 2
[x] Intégrer des animations JS via [gsap](https://greensock.com/gsap/) ou animateJS ou autre... => utilisation de GSAP
[x] Responsive et avec une bonne compatibilité navigateurs
[x] La notation se basera sur l'approfondissement des notions déjà vues, les justifications des choix techniques, la propreté du code, la solidité des animations. Le code doit donc être assez propre et commenté un minimum pour que n'importe quel autre collègue dev puisse vous rejoindre sur le projet.
[x] Aucun bugs visuel et JS ne doivent être présents

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
