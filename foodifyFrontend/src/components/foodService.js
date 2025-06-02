import axios from "axios";
import { toast } from "react-toastify";
const url='http://localhost:8080/api/foods';

export const addFood=async(foodData,image)=>{
    const formData = new FormData();
    formData.append('food',JSON.stringify(foodData));
    formData.append('file', image);

    try {
        const response = await axios.post(url, formData);
        return response;
    } catch (error) {
        console.error('Error adding food:', error);
        throw error;
    }
}

export const getFoods = async () => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.error('Error fetching foods:', error);
        throw error;
    }
};

export const deleteFood = async (id) => {
    try {
        const response = await axios.delete('http://localhost:8080/api/foods/' + id);
        return response;
    } catch (error) {
        console.error('Error deleting food:', error);
        throw error;
    }
};
