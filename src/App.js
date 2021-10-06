import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ManagingData from './components/ManagingData'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={ManagingData}/>
      </BrowserRouter>
      
    </>
  )
}

export default App
