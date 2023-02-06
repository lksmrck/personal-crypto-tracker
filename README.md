# 🔎 Personal Crypto Tracker

## 🔸 Key Features

Simple personal project, that allows user to:

- Watch actual cryptocurrency prices and statistics on Dashboard
- Login and add transactions of his buys and sells of cryptocurrencies
- User's profit or loss, actual holding amount and average purchase price are calculated and updated based on added transactions and transaction prices (Holdings page)
- User's transactions (Transaction history page) and Holdings (Holdings page) are logged and saved into database

## 🔸 Demo

You can try the demo [HERE](https://lukasthevicious.github.io/personal-crypto-tracker/)

```diff
- Actual info: If you want to try this app, you have to run it locally on your machine based on steps below, because of expired backend hosting on Heroku.
- Based on that, users are currently not able to register and login using username and pw. Users are however still able to login via Google Auth, but don't see their holdings and transactions (as these are fetched from the currently unhosted BE).
```

![App demo](./readMe/cryptoTrackerGIF.gif)

## 🔸 Configuration and setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)

#### 1. Client

```
$ cd client
```

Create .env file in the root of your client directory. Add:

```
REACT_APP_GOOGLE_CLIENT_ID = *your google client ID*
REACT_APP_API = http://localhost:8000
```

```
$ npm install (to install client-side dependencies)
& npm start (to start the client)
```

#### 2. Server

```
$ cd server
```

Create .env file in the root of your server directory. Add:

```
MONGODB = *your mongoDB cluster URL*
JWT_SECRET = *your secret string for JWT*
```

```
$ npm install (to install server-side dependencies)
& nodemon index.js (to start the server)
```

## 🔸 Data

Data from [CoinGecko](https://www.coingecko.com/) API is used in this project.

## 🔸 Main technologies used

- <b>Frontend:</b>
  [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/)
- <b>Backend:</b>
  [NodeJS](https://nodejs.org/en/), [Express](https://expressjs.com/)
- <b>Database:</b>
  [MongoDB](https://www.mongodb.com/)
- <b>Hosting:</b>
  [GH pages](https://pages.github.com/), [Heroku](https://dashboard.heroku.com/)

- <b>Other:</b>
  [Redux](https://redux.js.org/) (for state management), Material UI, Styled components, React Icons, Axios, React-router-dom, JWT (for authentication), bcryptjs (for data encryption), …

## 🔸 Known issues

- Google sign in vs. Form sign in with same gmail is not considered as same user

## 🔸 Future

- Potential extension to use also stocks data
- Implementation of charts for movements
- Profit and loss statement for specified period based on added transactions and prices
