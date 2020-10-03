import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./utils/auxilliary/icons";
import { GlobalStyle } from "./utils/auxilliary/globalStyles";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
