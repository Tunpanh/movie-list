# Movie-list
Movie-list is a web application that shows movie information from a csv file. 

# Project structure
```
.
├───backend/                           # Backend Project
│   ├───database/                      # CSV file as database
│   │   └───movies.csv
│   ├───movies/                        
│   │   ├───movie.service.js           # Logics to interact with database
│   │   └───movies.controller.js       # Movie API
│   ├───test/
│   │   └───integration.js             # Test functions
│   ├───_helpers/                      # Common functions
│   │   └───error-handler.js
│   ├───.gitignore
│   ├───config.json
│   ├───package-lock.json
│   ├───package.json                   # Scripts/npm plugins version
│   └───server.js                      # Dependencies, server setup
├───client/
│   ├───.angular/                      # Angular builds cache
│   ├───.git/                          # Git local information
│   ├───.vscode/                       
│   ├───src/                           # Source files
│   │   ├───app/
│   │   │   ├───components/            # View components
│   │   │   │   └───movies-list/    
│   │   │   ├───services/              # Logics to interact with APIs
│   │   │   │   └───movie.service.ts
│   │   │   ├───app-routing.module.ts  # Router configuration
│   │   │   ├───app.component.css
│   │   │   ├───app.component.html
│   │   │   ├───app.component.ts       
│   │   │   └───app.module.ts           
│   │   ├───assets/                     # Application assets
│   │   ├───environments/               # Environment configurations
│   │   ├───favicon.ico
│   │   ├───index.html
│   │   ├───main.ts
│   │   ├───polyfills.ts
│   │   ├───styles.css
│   │   └───test.ts
│   ├───.browserslistrc
│   ├───.editorconfig
│   ├───.gitignore
│   ├───angular.json
│   ├───karma.conf.js
│   ├───package-lock.json
│   ├───package.json                    # Scripts/npm plugins version
│   ├───README.md
│   ├───tsconfig.app.json
│   ├───tsconfig.json
│   └───tsconfig.spec.json
└───README.md                            # Project Overview 

```
<br/>
============================

# Project Setup on local
```
- Step 1: Install node.js
[Click here](https://nodejs.org/en/)

- Step 2: Node modules setup

cd .\backend 
npm install
```
cd .\client 
npm install

```

- Step 3: Run local server, client

cd .\backend 
npm run start
```
cd .\client 
npm run start

```