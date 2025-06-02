import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { deleteFood, getFoods } from "../foodService";
import '../ListFood/ListFood.css';

const ListFood = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await getFoods();
      setList(response.data);
    } catch (error) {
      toast.error("Error in fetching data");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteFood(id);
      toast.success("Food deleted successfully");
      await fetchList();
      
    } catch (error) {
      toast.error("Error in deleting food");
    }
  };

  return (
    <>
      {/* <h1 className="text-center mb-4">Available Food</h1> */}
      <div className="py-5 row justify-content-center">
        <div className="col-11">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item,index) => (
                  <tr key={index}>
                    <td>
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        width={58} 
                        height={48}
                        style={{objectFit: 'cover'}}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>₹{item.price}</td>
                    <td>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListFood;