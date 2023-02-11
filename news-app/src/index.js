import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";

axios.interceptors.request.use(
  config => {
    // var requests = JSON.parse(localStorage.getItem("httpRequests"))
    // if (localStorage == null) {
    //   requests = []
    // }
    // let request = {
    //     "method": `${config.method.toUpperCase()}`,
    //     "url": `${config.url}`,
    //     "timestamp": `${new Date().getTime()}`
    // }
    // localStorage.setItem("request", JSON.stringify(request))
    // console.log(requests)
    // requests.push(request)
    // localStorage.setItem("httpRequests", JSON.stringify(requests))
    // console.log(
    //     `Petición ${config.method.toUpperCase()} hecha a ${config.url} a la(s) ${new Date().toLocaleTimeString()}`
    // )
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
