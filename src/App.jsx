import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
function App() {
  

  return (
    <>
   
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path={'/'} element={<Home/>}/>
     <Route path={'/about'} element={<About/>}/>
     <Route path={'/contact'} element={<Contact/>} />
   </Routes>
   </BrowserRouter>
   

      
      
    </>
  )
}

export default App
