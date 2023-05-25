import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>Hello world</div>
  </React.StrictMode>
)
