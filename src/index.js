import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/State";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let reRenderEntireTree = (state) => {
    root.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    );
}

reRenderEntireTree(store.getState())
store.subscribe(reRenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
