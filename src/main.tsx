import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <App />
  //</React.StrictMode> funciona como double check na etapa de desenvolvimento melhor no React+JS
)
