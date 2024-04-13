import { NextUIProvider } from '@nextui-org/system'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppRouter } from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <AppRouter />
    </NextUIProvider>
  </React.StrictMode>,
)
