import React from 'react'
import { NewsContextProvider } from '../news/contexts'
import { Home } from '../home'

function App() {
  return (
    <NewsContextProvider>
      <Home />
    </NewsContextProvider>
  )
}

export default App
