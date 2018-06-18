import "babel-polyfill"
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app"
import { Provider } from "react-redux";
import store from './store'
import "./styles/main.css"

const root = document.getElementById("root");
ReactDOM.render(
    <Provider store={ store } >
        <App />
    </Provider>,
    root
)
