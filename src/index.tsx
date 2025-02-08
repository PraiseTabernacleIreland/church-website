import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import {AppDataProvider} from "./contexts/AppDataContext";

const headerTheme = {
    fontFamily: '"Merriweather", serif', // Merriweather for H1 headers
}

const theme = createTheme({
    typography: {
        fontFamily: '"Montserrat", sans-serif', // Set Montserrat as the default font
        h1: headerTheme,
        h2: headerTheme,
        h3: headerTheme,
        h4: headerTheme,
        h5: headerTheme,
        h6: headerTheme,
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/church-website">
            <ThemeProvider theme={theme}>
                <AppDataProvider>
                    <CssBaseline/>
                    <App/>
                </AppDataProvider>
            </ThemeProvider>
        </BrowserRouter>,
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
