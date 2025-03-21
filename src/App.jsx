import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Landing from './Components/Landing'
import Login from './Components/Login'
import Register from './Components/Register'
import Quiz from './pages/Quiz'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
         
        </Route>
      </Routes>

    </Router>

   

     
    </>
  )
}

export default App
