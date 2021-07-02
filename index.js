import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './components/Family/poppins.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import axios from 'axios';
axios.defaults.baseURL = 'https://pass-it-on123.herokuapp.com/';





ReactDOM.render(


  <App />
  ,
  document.getElementById('root')
);



