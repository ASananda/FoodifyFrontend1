import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddFood from './components/AddFood';
import ListFood from './components/ListFood/ListFood';
import Orders from './components/Orders';
import {Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import SideBar from './components/sideBar';
import MenuBar from './components/MenuBar';
import {ToastContainer} from 'react-toastify';
function App() {
  // const [count, setCount] = useState(0)
  const [sidebarVisible, setSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible)
  }

  return (
    <>
       <div className="d-flex" id="wrapper">
            {/* Sidebar */}
           <SideBar sidebarVisible={sidebarVisible}/>
            <div id="page-content-wrapper">
              <MenuBar toggleSidebar={toggleSidebar}/>
              <ToastContainer/>
                <div className="container-fluid">
                   <Routes>
                     <Route path="/add" element={<AddFood/>}>AddFood</Route>
                     <Route path="/list" element={<ListFood/>}>ListFood</Route>
                     <Route path="/orders" element={<Orders/>}>Orders</Route>
                     <Route path="/" element={<ListFood/>}>ListFood</Route>
                   </Routes>
                </div>
            </div>
        </div>
        </>
  )
}

export default App
