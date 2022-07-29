import React from 'react'
import { createRoot } from 'react-dom/client'

import { MainLayout } from './components/Layout'
import './index.scss'

const App = () => {
  return (
    <MainLayout>
      <h1>Hello React!</h1>
    </MainLayout>
  )
}

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
