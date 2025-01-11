import logo from "../logo.svg";
import React from "react";

export const Contact = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Contact
            </a>
        </header>
    )
}