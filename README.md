React base code
===============

An opinionated base tech stack for a modern React app.

## Tech Stack
- **react:** The main UI library
- **redux:** The main state management library
- **styled-components:** The styling and theming library
- **react-router-dom:** The routing library
- **react-loadable:** The lazy loading library
- **axios:** The XHR library

## Code structure
- **/build:** Build related details of Webpack and Jest
- **/config:** Whitewashing related details and assets
- **/src/components:** Shareable components that never connects to redux store
- **/src/pages:** Individual route pages
- **/src/services:** Wrapped services for the App, e.g: fetch, validation. Available as an API, so the actual implementation can change
- **/src/store:** Redux store
- **/dist:** Complied code ready to deployed

## Get the code
- *clone:* the repository via `git clone git@github.com:iamvijaydev/react-base-code.git` (You will have to change the remote)
- *zip:* [v1.0.0.zip](https://github.com/iamvijaydev/react-base-code/archive/v1.0.0.zip)
- *tar.gz:* [v1.0.0.tar.gz](https://github.com/iamvijaydev/react-base-code/archive/v1.0.0.tar.gz)

## Install packages
```shell
npm install
```

## Create env.js from env.example.js
This file `env.js` contains any environment-related contents. Update then as you see fit. Add more if required.

## Start dev server
```shell
npm start
```

## Build dist
```shell
npm run build
```

## Unit test
```shell
npm test
```

## Update unit test snapshots
```shell
npm run test:u
```
