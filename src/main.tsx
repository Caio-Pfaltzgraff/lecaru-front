import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import AppRouter from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
