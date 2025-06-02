import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuBar from './components/MenuBar'
import Explore from './components/Explore/Explore.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Routes, Route } from 'react-router-dom'
// import Header from './components/Home/Header.jsx';
import Home from './components/Home/Home.jsx'
import FoodDetails from './components/FoodDetails/FoodDetails.jsx'
import Cart from './components/Cart/Cart.jsx'
import PlaceOrder from './components/PlaceOrder/PlaceOrder.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'

function App() {
  return (
    <>
      <MenuBar/>
      {/* <Header/>  */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/food/:id" element={<FoodDetails/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/order" element={<PlaceOrder/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
    </>
  )
}

export default App
