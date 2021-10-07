import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import FormValidation from './components/Lesson-One/FormValidation'
import HandlingSubmission from './components/Lesson-One/HandlingSubmission'
import ManagingData from './components/Lesson-One/ManagingData'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={ManagingData}/>
        <Route exact path="/handling" component={HandlingSubmission}/>
        <Route exact path="/simple-validation" component={FormValidation}/>
      </BrowserRouter>
      
    </>
  )
}

export default App
