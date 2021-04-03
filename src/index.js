import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react";

const domain = "cbf.auth0.com";
ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain={domain}
            clientId="tgnBPUcKrWSRBs2P5SFLfo104gRWmuNO"
            redirectUri={window.location.origin}
            audience={`https://${domain}/api/v2/`}
            scope="read:current_user">
            <App/>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
