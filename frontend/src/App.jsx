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
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import { ToastContainer, toast } from 'react-toastify';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Verify from './pages/Verify'
import Ai from './component/Ai'


const stripePromise = loadStripe(
  "pk_test_51RvXaHFufNua0lBNgvpJJqI1gbwKTFcQoW5sFXoNSxB0aWoxeJqNXhIhHvKMJThpdbGIQBlKWGhjb2T0wr00YTuD00jycTRjc4"
);

function App() {
  let {userData} = useContext(userDataContext)
  let location = useLocation()
  


  return (
    <>
     <ToastContainer/>
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
        
        <Route path='/productdetail/:productId' element={userData ? <ProductDetails/> : <Navigate to={"/login"} state={{from:location.pathname}}/>}/>

        <Route path='/cart' element={userData ? <Cart/> : <Navigate to={"/login"} state={{from:location.pathname}}/>}/>

        <Route path='/placeorder' element={userData ? (  <Elements stripe={stripePromise}>   <PlaceOrder /> </Elements> ) : <Navigate to={"/login"} state={{from:location.pathname}}/>}/>

        <Route path='/order' element={userData ? <Order/> : <Navigate to={"/login"} state={{from:location.pathname}}/>}/>

        <Route path='/verify' element={userData ? <Verify/> : <Navigate to={"/login"} state={{from:location.pathname}}/>}/>
        
      </Routes>
      
      <Ai/>
    </>
  )
}

export default App
