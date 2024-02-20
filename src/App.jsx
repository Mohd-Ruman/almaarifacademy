import { useState } from 'react'
import { Home, Navbar, About } from './components'
// import  { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
    </>
  )
}

export default App
