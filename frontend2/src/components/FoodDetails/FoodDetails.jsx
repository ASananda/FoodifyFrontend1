import axios from 'axios';
import react,{useState,useEffect, useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchfood } from '../../Contexts/FoodContext';
import {toast} from 'react-toastify';
import { StoreContext } from '../../Contexts/StoreContext';

const FoodDetails = () => {
    const {id} = useParams();

    const {increaseQty}=useContext(StoreContext);
    const [data, setData] = useState(null);
   

    const navigate=useNavigate();
    useEffect(()=>{
        const loadFoodDetails=async ()=>{
           try{
               const response = await fetchfood(id);
               setData(response);
           }
           catch(error){
               console.error("Error fetching food details:", error);
               toast.error("error in displaying");
           }
        }
        loadFoodDetails();
    },[id]);

    const addToCart=()=>{
       increaseQty(data.id);
       navigate("/cart");
    }

    if (!data) {
        return <div className="text-center py-5">Loading...</div>;
    }

    return (
            <section className="py-4">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={data.imageUrl} height={300} width={60} alt="..." /></div>
                    <div className="col-md-6">
                        <div className="fs-5 mb-2">Category: <span className='badge text-bg-warning'>{data.category}</span></div>
                        <h1 className="display-5 fw-bolder">{data.name}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through"></span>
                            <span>&#8377;{data.price}.00</span>
                        </div>
                        <p className="lead">{data.description}</p>
                        <div className="d-flex">
                            {/* <input className="form-control text-center me-3" id="inputQuantity" type="num"  style={{"maxWidth": "3rem"}} /> */}
                            <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={addToCart}>
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default FoodDetails;