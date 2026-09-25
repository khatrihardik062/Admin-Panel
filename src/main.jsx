import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/style.css"
import Home from './Home'
import Header from './common/Header'


createRoot(document.getElementById('root')).render(
  <>
    <Home/>
  </>,
)
