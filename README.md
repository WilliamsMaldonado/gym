# gym
GYM

[![node](https://img.shields.io/badge/node-v12.X-yellow.svg)](https://nodejs.org)
[![npm](https://img.shields.io/badge/npm-v6.13.X-red.svg)](https://www.npmjs.com/)

>Proyeccto en NodeJS con express JS
>

## Prerequisitos

Necesitas tener instaldo en el computador

* [Git](http://git-scm.com/)
* [Node](https://nodejs.org)
* [NPM](https://www.npmjs.com/)

## Instalación

* `git clone git@github.com/WilliamsMaldonado/gym.git` 
* Ingresar al proyecto `cd gym`

## Dependencias

correr `npm install` para instalar las dependencicas del proyeccto
* [express](https://github.com/expressjs/express)
* [express-jwt](https://github.com/auth0/express-jwt)
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
* [mysql2](https://github.com/sidorares/node-mysql2)

## Build

* Correr comando para instalcion docker
* `docker-compose build && docker-compose up --remove-orphans`
* Sube la base de datos mysql en puerto 3306 expuesto en local al puerto 3306
* Sube el proyecto en puerto 4000 expuesto en local al puerto 4000
* Si no crea las tablas al subir por favor correr el script `database/init.sql` manualmente

## Correr pruebas unitarias

correr `npm run test` para ejecutar las pruebas con [Jest](https://jestjs.io/).

correr `npm run coverage` para ejecutar las pruebas con cobertura, la cobertura se encuentra en la carpeta `coverage/lcov-report/index.html`

## Clean Code

* para garantizar codigo limpio y organizado se incluye la libreria [eslint](https://eslint.org/docs/developer-guide/nodejs-api)
* `npm run lint` para ver errores
* `npm run lint:fix` para corregir algunos errores automaticamente

