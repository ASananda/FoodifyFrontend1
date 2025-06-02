import { createContext,useEffect,useState} from "react";
import { fetchfoodList } from "./FoodContext";

export const StoreContext = createContext(null);

export const StorecontextProvider = (props) => {

    const [foodList, setFoodList] = useState([]);

    const [quantity, setQuantity] = useState({});

    const increaseQty=(foodId)=>{
          setQuantity((prev)=>({...prev ,[foodId]: (prev[foodId]||0)+1}));
    }

    const decreaseQty=(foodId)=>{
        setQuantity((prev)=>({...prev,[foodId]:prev[foodId]>0?prev[foodId]-1:0}));
    }
    const removeFromCart=(foodId)=>{
        setQuantity((prev)=>{
            const updatedQty={...prev};
            delete updatedQty[foodId];
            return updatedQty;
        })
    }

    const contextvalue={
        foodList,
        increaseQty,
        decreaseQty,
        quantity,
        removeFromCart
    };
    useEffect(() => {
        async function loaddata() {
            const data=await fetchfoodList();
            setFoodList(data);
        }
        loaddata();
    },[]);

    return(
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )


}
