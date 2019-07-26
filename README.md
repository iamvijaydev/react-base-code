React base code
===============

An opinionated and scalable base tech stack for a modern React app.

[![Build Status](https://travis-ci.org/iamvijaydev/react-base-code.svg?branch=master)](https://travis-ci.org/iamvijaydev/react-base-code)

## Tech Stack
- **react:** The main UI library
- **rematch:** The main state management framework powered by Redux
- **styled-components:** The styling and theming library
- **react-router-dom:** The routing library
- **react-loadable:** The lazy loading library
- **axios:** The XHR library
- **react-intl-universal:** The internationalization library
- **jest & enzyme:** The testing libraries

## Code structure
- **/build:** Build related details of Webpack and Jest
- **/config:** Whitewashing and language related details and assets
- **/src/components:** Shareable components that never connects to redux store
- **/src/pages:** Individual route pages
- **/src/services:** Wrapped services for the App, e.g: fetch, validation. Available as an API, so the actual implementation can change
- **/src/store:** Redux store
- **/dist:** Complied code ready to deployed

## Get the code
- *clone:* the repository via `git clone git@github.com:iamvijaydev/react-base-code.git` (You will have to change the remote)
- *zip:* [v1.2.0.zip](https://github.com/iamvijaydev/react-base-code/archive/v1.2.0.zip)
- *tar.gz:* [v1.2.0.tar.gz](https://github.com/iamvijaydev/react-base-code/archive/v1.2.0.tar.gz)

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
npm run dist
```

## Unit test
```shell
npm test
```

## Update unit test snapshots
```shell
npm run test:u
```

## Intl
All the language translations are added to `/config/locale/<locale code>/<fragments>.json`. During both dev and prod build, an additional script is run to aggregate all the fragments to a single file at `/config/locale/<locale code>.json`. Meaning, you can create as many fragments as you like. Make sure to apply any modifications or additions are applied on all locale folders. Since aggregation is a separate script, you need to restart the dev server to apply the new changes.

## TODO
[TODO.md](https://github.com/iamvijaydev/react-base-code/blob/master/TODO.md)
