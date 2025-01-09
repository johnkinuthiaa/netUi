import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router";
import BottomNav from "./components/BottomNav.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <BottomNav/>
          <App />
      </BrowserRouter>
  </StrictMode>,
)
