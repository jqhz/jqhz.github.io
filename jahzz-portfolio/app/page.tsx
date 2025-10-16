"use client"

import { BrowserRouter } from "react-router-dom"
import App from "../src/App"
import { UIProvider } from "../src/context/UIContext"
import "../src/index.css"

export default function Page() {
  return (
    <UIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UIProvider>
  )
}
