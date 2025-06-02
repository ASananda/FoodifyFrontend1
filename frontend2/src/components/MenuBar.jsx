import React,{useContext, useState} from 'react';
import '../components/MenuBar.css';
import reactimg from '../assets/react.svg';
import cart from '../assets/trolley.png';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Contexts/StoreContext';


export default function MenuBar() {
     const [active,setActive]=useState("home");
    const {quantity}=useContext(StoreContext);
    const uniqueItems=Object.values(quantity).filter((qty)=>qty>0).length;
    const navigate=useNavigate();
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
        <Link to="/" className="navbar-brand" href="/">
            <img src={reactimg} alt="" className='logo' height={38} width={38}/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className={active==="home"?"nav-link fw-bold active":"nav-link"} aria-current="page" to="/" onClick={()=>setActive("home")}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className={active==="explore"?"nav-link fw-bold active":"nav-link"} aria-current="page" to="/explore" onClick={()=>setActive("explore")}>Explore</Link>
                </li>
                <li className="nav-item">
                    <Link className={active==="contact-us"?"nav-link fw-bold active ":"nav-link"} aria-current="page" to="/contact" onClick={()=>setActive("contact-us")}>Contact Us</Link>
                </li>
            </ul>
            <div className='d-flex align-items-center gap-4'>
               <Link to={`/cart`}>
                <div className="position-relative">
                    <img src={cart} alt="cart" height={32} width={32}/>
                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning'>{uniqueItems}</span>
                </div>
               </Link>
               <button className='btn btn-outline-primary' onClick={()=>navigate('/login')}>Login</button>
               <button className='btn btn-outline-success' onClick={()=>navigate('/register')}>Register</button>               
            </div>
        </div>
        </div>
    </nav>
  )
}
