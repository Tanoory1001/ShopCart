// Hooks
import React,{useContext} from 'react';
import {cartContext} from "../Context/CardProvider";
// operation
import {shorten} from "../helper/shortenfunction";
// image
import trash from "../assets/icon/trash.svg"

const Card = (props) => {
    const {dispatch}=useContext(cartContext)
    const{image,title,price,quantity}=props.data;
    return (
        <div>
            <img src={image} alt="imag"/>
            <div>{shorten(title)}</div>
            <p>{price}</p>
            <div><span>{quantity}</span></div>
            <div>
                {quantity>1 ?
                <button onClick={() => dispatch({type:"Decreaase",payload:props.data})}>-</button>:
                <button onClick={() => dispatch({type:"RemoveItem",payload:props.data})}><img src={trash} alt="Trash" style={{width:"20px"}}/></button>
                }
                <button onClick={() => dispatch({type:"Increase",payload:props.data})}>+</button>
            </div>
        </div>
        
    );
};

export default Card;