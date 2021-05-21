import React from 'react'
import Index from './views/index'
import './App.css'
import Main from './layouts/MainLayout'
function App() {
  return (
    <div className="App">
      <Main>
        <Index />
      </Main>
    </div>
  )
}

export default App
