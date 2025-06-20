import React from 'react'
import './Explore.css'
import FoodDisplay from '../FoodDisplay/FoodDisplay'
import { useState } from 'react'; 

const Explore=() =>{
  const [category, setCategory]=useState('All');
  const [searchText, setSearchText]=useState('');
  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={(e)=>e.preventDefault()}>
            <div className="input-group mb-3">
              <select className='form-select mt-2' style={{'maxWidth':'150px'}} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Biryani">Biryani</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Ice cream">Ice cream</option>
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Cake">Cake</option>
              </select>
              <input type="text" className='form-control mt-2' placeholder='Search your favourite dish....' 
                  onChange={(e)=>setSearchText(e.target.value)} value={searchText}/>
              <button className='btn btn-primary mt-2' type='submit'>
                <i className='bi bi-search'></i>
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <FoodDisplay category={category} searchText={searchText}/>
    </>
  )
}

export default Explore;