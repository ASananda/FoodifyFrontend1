import React, { useContext } from "react";
import { StoreContext } from "../../Contexts/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({category,searchText}) => {

    const { foodList } = useContext(StoreContext);
    const filteredList=foodList.filter(food=>(
        (category ==='All'||food.category === category) && (food.name.toLowerCase().includes(searchText.toLowerCase()) )
    ));
    // console.log(foodList);

    return (
        <div className='container'>
            <div className='row'>
                {foodList.length > 0 ? (
                    filteredList.map((food, index) => (
                       <FoodItem key={index} name={food.name} description={food.description} id={food.id} imageUrl={food.imageUrl} price={food.price}/>
                    ))
                ) : (
                    <div className="text-center mt-4">
                        <h4>No Food Found</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FoodDisplay;