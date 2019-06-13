# ProcurA Dashboard Boilerplate
Monolith front-end for ProcurA Dashboard!

## Features
* **redux** for handling application state
* **redux-thunk** for handling async actions and side-effects
* **axios** for making HTTP requests
* **redux-devtools** in development
* **compression** for compressing static assets
* **babel-plugin-module-resolver** for importing modules related to the root directory
* **prettier** and **eslint** configured with **airbnb**'s styleguide for formating code
* **husky** and **lint-staged** for autoformatting code before commit
* **styled-components** allows you to write actual CSS code to style your components.

## Deploying to server
### Prerequisites
* Node.js (should install LTS version)
Update previous installed node version with `vim /etc/apt/sources.list.d/nodesource.list"`.
* Yarn
* Other libraries for enable this container to open headless chrome  
This repo is using pupeeteer to load prerender version of web app. It can be an error for the first time because by default ubuntu server doesn't have libraries for headless chrome. In order to enable it, you should install these libraries:
```sh
$ sudo apt-get install gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

### Installation
* Install dependencies from `package.json` with `yarn`. Add `--ignore-engine` argument if get error when installing.
* Type `yarn run build` to generate web app assets.