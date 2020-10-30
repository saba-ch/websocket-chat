# NEWROW Chat example

---

this project was bootstrapped by [Create React App](https://create-react-app.dev/)

### Tech Stack

- [Create React app][cra] for development infrastructure
- [Redux][redux] for state management
- [MATERIAL UI][material-ui] for ui components
- [Websocket API][Websocket] for websocket communication

### Directory Layout

```bash
├── build/                           # Compiled output
├── node_modules/                    # 3rd-party libraries and utilities
├── public/                          # Static files such as index.html etc.
├── src/                             # Application source code
│   ├── components/                  # Shared React components
│   ├── hooks/                       # React hooks
│   ├── state/                       # Redux state
│   │   │── {module}/                # Module
│   │   │   │── {module}Actions.js/  # Redux actions
│   │   │   │── {module}Reducers.js/ # Redux reducers
│   │   │   │── {module}Types/       # Redux types
│   ├── assets/                      # Asset components
│   ├── pages/                       # Pages
│   ├── socket/                      # Websocket messaging management
│   ├── helpers/                     # Helpers 
│   ├── utils/                       # Utils 
│   ├── Router/                      # Application route definitions
│   ├── config/                      # Application config
```

### Getting Started

```bash
$ git clone https://github.com/xxx/xxx
$ cd xxx
$ yarn
$ yarn start
```

## Environment Variables

environment variable is set by REACT_APP_ENV env variable

## Running the app

```bash
# local (connects to local server)
$ yarn start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>


### Scripts

#### Start scripts
```bash
$ yarn start # connecting on local backend
```

#### Build
```bash
$ yarn build # building application on production environment
```
