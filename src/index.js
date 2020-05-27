import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';


axios.interceptors.request.use(request => (request), error => (Promise.reject(error)))
//la syntaxe de interceptors est à revoir,  je vais regarder leur doc au besoin p ex quand plante, trop de temps 
axios.interceptors.response.use(response => (response), error => (Promise.reject(error)))
//faudrait que je regarde pour la config de header 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
