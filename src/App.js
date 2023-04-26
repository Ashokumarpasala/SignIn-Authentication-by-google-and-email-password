import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignPage from './components/SignPage'
import UseAuth from './components/UseAuth'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact  path='/' element={<SignPage />} />
        <Route exact path='/home' element={<UseAuth />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
