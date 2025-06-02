import React,{useContext} from "react";
import {logo} from '../../assets/assets'
import { StoreContext } from "../../Contexts/StoreContext";
import { calucalteCartTotals } from "../Utils/cartUtils";

const PlaceOrder=()=>{
    const {foodList,quantity,setQuantity}=useContext(StoreContext);
    
    const cartitems=foodList.filter(food=> quantity[food.id] > 0);

   
    const {subtotal,shipping,tax,total}=calucalteCartTotals(cartitems,quantity);
    return(
        <div className='container mt-2'>
                <main>
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src="{}" alt="" width={72} height={57}/>
                    <h1 className="h2">Checkout form</h1>
                </div>
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Your cart</span>
                        <span className="badge bg-primary rounded-pill">{cartitems.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                        {
                            cartitems.map((food)=>{
                               return(
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">{food.name}</h6>
                                        <small className="text-body-secondary">Qty:{quantity[food.id]}</small>
                                    </div>
                                    <span className="text-body-secondary">&#8377;{food.price*quantity[food.id]}</span>
                                </li>
                               )
                            })
                        }
                        <li className="list-group-item d-flex justify-content-between">
                            <div>
                            <span className="text-body-secondary">Shipping</span>
                            </div>
                            <span className="text-body-secondary">&#8377;{subtotal===0?0.0:shipping.toFixed(2)}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <div>
                            <span className="text-body-secondary">Tax</span>
                            </div>
                            <span className="text-body-secondary">&#8377;{tax.toFixed(2)}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (INR)</span>
                            <strong>&#8377;{total.toFixed(2)}</strong>
                        </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" noValidate>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="John"  required/>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Doe" required/>
                            </div>

                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Email</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" className="form-control" id="email" placeholder="Email" required/>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="phone" placeholder="9876543213" required/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
                            </div>

                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select className="form-select" id="country" required>
                                    <option value="">Choose...</option>
                                    <option>India</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">State</label>
                                <select className="form-select" id="state" required>
                                    <option value="">Choose...</option>
                                    <option>Karnataka</option>
                                </select>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="zip" className="form-label">Zip</label>
                                <input type="number" className="form-control" id="zip" placeholder="98745" required/>
                            </div>
                        </div>

                        <hr className="my-4"/>

                        <button className="w-100 btn btn-primary btn-lg" type="submit" disabled={cartitems.length===0}>Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </main>
            </div>
    )
}
export default PlaceOrder;