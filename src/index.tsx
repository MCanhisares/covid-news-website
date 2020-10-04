import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './app/App'
import * as serviceWorker from './serviceWorker'
import * as firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'covid-news-291320.firebaseapp.com',
  databaseURL: 'https://covid-news-291320.firebaseio.com',
  projectId: 'covid-news-291320',
  storageBucket: 'covid-news-291320.appspot.com',
  messagingSenderId: '926432069992',
  appId: '1:926432069992:web:61024a25a343f698d1aedd',
  measurementId: 'G-FBCQP573TM',
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
