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

const domNode = document.getElementById('app')
const root = createRoot(domNode as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)