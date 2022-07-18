// API
import React ,{useState,useEffect , createContext} from 'react';
import {getproducts} from "../Services/API";

export const productContext=createContext();

const Productprovider = ({children}) => {

    const[product,setProduct]=useState([]);
    
    useEffect(()=>{
        const fetchAPI=async ()=>{
            setProduct(await getproducts())
        }
        fetchAPI()
    },[])
    
    return (
        <div>
            <productContext.Provider value={product}>
                {children}
            </productContext.Provider>
            
        </div>
    );
};

export default Productprovider;