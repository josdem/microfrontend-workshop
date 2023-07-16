## Microfrontend Workshop

This is a getting started project using [MFE](https://en.wikipedia.org/wiki/Microfrontend) implemented with [React](https://react.dev/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [jest](https://jestjs.io/)

#### To build

```bash
cd frontend
npm install
```

where `frontend` could be:
- `home`
- `pdp`
- `cart`
- `atc`

**Note:** In a different terminal window each `frontend`

#### To run the project

```bash
cd frontend
npm start
```

#### To run test with Jest

```bash
cd frontend
npm test
```


#### To run test with [Cypress](https://www.cypress.io/)

```bash
cd home
npx cypress run --browser chrome
```