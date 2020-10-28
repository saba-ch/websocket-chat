# NEWROW Chat example

---

this project was bootstraped by [Create React App](https://create-react-app.dev/)

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

environment variable is set by REACT_APP_STAGE env variable

## Running the app

```bash
# development (connects to development server)
$ yarn start

# local mode (connects to local server)
$ yarn start:local

```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>


### Scripts

#### Start scripts
```bash
$ yarn start # connecting on dev backend
$ yarn start:local # connecting on local backend
```

#### Build
```bash
$ yarn build # building application on production environment
```

### Packages

- [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons) - Icons
- [@apollo/react-hooks](https://www.npmjs.com/package/@apollo/react-hooks) - Hooks for apollo client 
- [ace-builds](https://www.npmjs.com/package/ace-builds) - React-ace uses this built binary
- [antd](https://www.npmjs.com/package/antd) - Ui components library
- [apexcharts](https://www.npmjs.com/package/apexcharts) - React-apexcharts uses this build binary
- [apollo-cache-inmemory](https://www.npmjs.com/package/apollo-cache-inmemory) - This allows apollo to cache in memory
- [apollo-client](https://www.npmjs.com/package/apollo-client) - Apollo library we use it to connect to backend
- [apollo-link](https://www.npmjs.com/package/apollo-link) - Combines multiple apollo links to work together
- [apollo-link-context](https://www.npmjs.com/package/apollo-link-context) - Sets apollo context for example authorization header
- [apollo-link-error](https://www.npmjs.com/package/apollo-link-error) - Error middleware
- [apollo-upload-client](https://www.npmjs.com/package/apollo-upload-client) - Upload client for apollo
- [axios](https://www.npmjs.com/package/axios) - Making http requests
- [fbemitter](https://www.npmjs.com/package/fbemitter) - Fbemitter is same as nodejs event emitter we use this for drawers
- [graphql.macro](https://www.npmjs.com/package/graphql.macro) - Loads graphql files
- [i18next](https://www.npmjs.com/package/i18next) - Translates pages
- [i18next-browser-languagedetector](https://www.npmjs.com/package/i18next-browser-languagedetector) - Detects browser language
- [moment](https://www.npmjs.com/package/moment) - Easy api for working with dates
- [qs](https://www.npmjs.com/package/qs) - Query string serialize/deserialize
- [ramda](https://www.npmjs.com/package/ramda) - Functional programing library for immutability
- [react-ace](https://www.npmjs.com/package/react-ace) - Code editor
- [react-apexcharts](https://www.npmjs.com/package/react-apexcharts) - Charts library
- [react-color](https://www.npmjs.com/package/react-color) - Color picker
- [react-country-flag](https://www.npmjs.com/package/react-country-flag) - Country flag component
- [react-csv](https://www.npmjs.com/package/react-csv) - generates csv from json
- [react-datepicker](https://www.npmjs.com/package/react-datepicker) - Datepicker
- [react-google-recaptcha-v3](https://www.npmjs.com/package/react-google-recaptcha-v3) - Google recaptcha library
- [react-icons](https://www.npmjs.com/package/react-icons) - Icons library
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - React routing library
- [styled-components](https://www.npmjs.com/package/styled-components) - Styling components