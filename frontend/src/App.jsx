import React, { useContext } from 'react'
import {Navigate, Route,Routes, useLocation} from 'react-router-dom'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'
import './App.css'
import Nav from './component/Nav'
import { userDataContext } from './context/UserContext'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Collections from './pages/Collections'

function App() {
  let {userData} = useContext(userDataContext)
  let location = useLocation()

  return (
    <>
      {userData && (<Nav/>)}
      <Routes>
        <Route path='/login' element={
          userData ? (<Navigate to={location.state?.from || "/"}/>) : <Login/>}/>

        <Route path='/signup' element={
          userData ? (<Navigate to={location.state?.from || "/"}/>) : <Registration/>}/>

        <Route path='/' element={userData ? <Home/> : <Navigate to={"/login"} state={{from:location.pathname}}/>}/>

        <Route path='/about' element={userData ? <About/> : <Navigate to={"/login"} state={{from:location.pathname}}/>}/>

        <Route path='/contact' element={userData ? <Contact/> : <Navigate to={"/login"} state={{from:location.pathname}}/>}/>

        <Route path='/product' element={userData ? <Product/> : <Navigate to={"/login"} state={{from:location.pathname}}/>}/>

        <Route path='/collections' element={userData ? <Collections/> : <Navigate to={"/login"} state={{from:location.pathname}}/>}/>

      </Routes>
    </>
  )
}

export default App
