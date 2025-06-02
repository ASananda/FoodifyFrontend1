import React from "react";
import logo from '../assets/logo.png';
import { useState } from "react";
import { addFood } from "./foodService";
import { toast } from "react-toastify";


const AddFood = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: '',
    price: 0,
    category: 'Biryani',
    description: '',
  });

  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    
    if (!image) {
      toast.error('Please Select Image');
      return;
    }

    try{
       await addFood(data,image);
       toast.success('Food Added Successfully');
       setData({name: '', price: 0, category: 'Biryani', description: ''});
       setImage(null);
    }
    catch(error){
       toast.error("error in adding food");
    }
  };

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="card col-md-4">
            <div className="card-body">
              <h2 className="mb-4">Add Food</h2>
              <form onSubmit={onsubmitHandler}>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    {image ? (
                      <img 
                        src={URL.createObjectURL(image)} 
                        alt="Preview" 
                        height={100} 
                        width={150} 
                        style={{objectFit: 'cover'}}
                      />
                    ) : (
                      <img src={logo} alt="Logo" height={55} width={100}/>
                    )}
                  </label>
                  <input 
                    type="file" 
                    name="image" 
                    className="form-control" 
                    id="image" 
                    onChange={(e) => setImage(e.target.files[0])} 
                    hidden
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Food Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Biryani"
                    required 
                    id="name" 
                    onChange={onchangeHandler} 
                    value={data.name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Food Price</label>
                  <input 
                    type="number" 
                    name="price" 
                    className="form-control" 
                    placeholder="&#8377:200"
                    required 
                    id="price" 
                    onChange={onchangeHandler} 
                    value={data.price}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Food Category</label>
                  <select 
                    name="category" 
                    className="form-control" 
                    required 
                    id="category" 
                    onChange={onchangeHandler} 
                    value={data.category}
                  >
                    <option value="Biryani">Biryani</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Icecream">Icecream</option>
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Cake">Cake</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea 
                    name="description" 
                    className="form-control" 
                    placeholder="Write description here"
                    required 
                    id="description" 
                    rows="5" 
                    onChange={onchangeHandler} 
                    value={data.description}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Food</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFood;