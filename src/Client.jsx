import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App/index'
const root = document.querySelector('#root')
const container = createRoot(root)
container.render(<App />)
