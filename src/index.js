import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//"PORT=4200 react-scripts start"

const express  = require("express");
const cors = require("cors");

const app = espress();

app.use(cors({ origin: "https://arcane-sea-40282.herokuapp.com"}));
app.use(espress.json());
app.use(express.urlencoded({extended: true }));

app.listen(process.ENODEV.PORT || 3000);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
