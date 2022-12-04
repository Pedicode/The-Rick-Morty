import React from 'react';
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./core-Ui/GlobalStyle"
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { apiSlice } from "./app/api/apiSlice"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <ApiProvider api={apiSlice}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
)

 
