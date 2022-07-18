import React,{useContext} from 'react';
import {cartContext} from "../Context/CardProvider";
import { Link } from 'react-router-dom';
import Card from "./Card"

const Shop = () => {
    const {state,dispatch}=useContext(cartContext)
    return (
        <>
        <div>
            {state.selectedItems.map(item=> <Card key={item.id} data={item} />)}            
        </div>
        <div>
            {
            state.itemCounter >0 && 
            <div>
                    <p><span>Total Items:</span>{state.itemCounter}</p>
                    <p><span>Total Payments:</span>{state.total}</p>
                 <div>
                    <button onClick={()=>dispatch({type:"CheckOut"})}>Check-Out</button>
                    <button onClick={()=>dispatch({type:"Clear"})}>Clear</button>
                 </div>
            </div>
            }
            {state.checkOut && <div><h3>Check Out Seccusfully</h3>
            <Link to="/store">Buy More</Link></div>}
            {!state.checkOut && state.itemCounter===0 && <div><h3>Cart Clear</h3>
            <Link to="/store">Back to ShowCase</Link></div>}
        </div>
        </>
    );
};

export default Shop;