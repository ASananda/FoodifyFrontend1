import axios from 'axios';

const api='http://localhost:8080/api/foods';
export const fetchfoodList= async ()=>{
    try{
        const response=await axios.get(api);
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}
export const fetchfood=async(id)=>{
    try{
        console.log("Making API call to:", api+"/"+id);
        const response=await axios.get(api+"/"+id);
        console.log("API Response:", response);
        return response.data;
    }
    catch(error){
        console.error("Error in fetching food:", error.message);
        if (error.response) {
            console.error("Error response data:", error.response.data);
            console.error("Error response status:", error.response.status);
        }
        throw error;
    }
}
