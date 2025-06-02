import React from "react";
import Header from "./Header";
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import { categories } from '../../assets/assets.js';
import FoodDisplay from "../FoodDisplay/FoodDisplay.jsx";
import { useState } from "react";

const Home=()=>{
    const [category, setCategory] = useState('All');
    const [searchText, setSearchText] = useState('');

    return(
        <div>
            <main className='container'>
              <Header/> 
              <ExploreMenu category={category} setCategory={setCategory}/>
              <FoodDisplay category={category} searchText={searchText}/>
            </main>
        </div>
    )
}
export default Home;