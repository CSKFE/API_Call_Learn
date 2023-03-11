import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Contents from '../Contents'
import { GlobalStyles } from '../../GlobalStyles'
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Contents />
    </BrowserRouter>
  )
}

export default App
