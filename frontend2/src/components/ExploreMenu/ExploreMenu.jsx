import React, { useRef } from "react";
import './Explore.css';
import { categories } from "../../assets/assets";


const ExploreMenu=({category,setCategory})=>{
    const menuref=useRef(null);
    const scrollleft=()=>{
        if(menuref.current){
            menuref.current.scrollBy({left:-200,behavior:"smooth"});
        }
    }
    const scrollright=()=>{
        if(menuref.current){
            menuref.current.scrollBy({left:200,behavior:"smooth"});
        }
    }
    return(
            <div className='explore-menu position-relative'>
                <h1 className="d-flex align-items-center justify-content-between">
                    Explore Menu
                    <div className="d-flex">
                        <i className="bi bi-arrow-left-circle scroll-icon" onClick={scrollleft}></i>
                        <i className="bi bi-arrow-right-circle scroll-icon" onClick={scrollright}></i>
                    </div>
                </h1>
               <p>Curated Lists of dishes from top categories</p>
               <div className="d-flex justify-content-between gap-4 overflow-auto explore-menu-list" ref={menuref}>
                    {
                        categories.map((item,index)=>{
                            return(
                                <div key={index} className="text-center explore-menu-list-item" onClick={()=> setCategory(prev=> prev===item.category?'All':item.category)}>
                                    <img src={item.icon} alt="" className={item.category===category?'active rounded-circle':'rounded-circle'} height={128} width={128}/>
                                    <p className='mt-2 fw-bold'>{item.category}</p>
                                </div>
                            )
                        })
                    }
               </div>
               <hr />
            </div>
    )
}
export default ExploreMenu;