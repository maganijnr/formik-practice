import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HandlingSubmission from './components/HandlingSubmission'
import ManagingData from './components/ManagingData'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={ManagingData}/>
        <Route exact path="/handling" component={HandlingSubmission}/>
      </BrowserRouter>
      
    </>
  )
}

export default App
