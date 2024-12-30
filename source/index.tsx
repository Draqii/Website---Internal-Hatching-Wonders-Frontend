import React from "react";
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import "./styles/responsive_base.scss";
import "./styles/reset.scss";
import "./styles/fontfaces.scss";
import "./index.scss";
import App from "./components/_App/App";

const element = (
    <React.StrictMode> 
        <HashRouter> 
            <App />
        </HashRouter>
    </React.StrictMode>
)

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container);
root.render(element);