import React ,{useContext} from 'react';
import {shorten,inCart,quatitiyCount} from "../helper/shortenfunction";
import {Link} from "react-router-dom";
import {cartContext} from "../Context/CardProvider";
// icon
import trashIcon from "../assets/icon/trash.svg"

const Product = ({productDetail}) => {
    const {state,dispatch}=useContext(cartContext)
    return (
        <div>
            <img src={productDetail.image} alt="Product Img" style={{width:"100px"}}/>
            <h1>{shorten(productDetail.title)}</h1>
            <p>{productDetail.price}</p>
            <h3>{shorten(productDetail.category)}</h3>
            <div>
            <Link to={`/details/${productDetail.id}`}>Detail</Link>
            {/* <Link href="/#">{shorten(productDetail.description)}</Link> */}
                <div>
                    {quatitiyCount(state,productDetail.id)===1&&<button onClick={()=>dispatch({type:"RemoveItem",payload:productDetail})}><img src={trashIcon} alt="trash" style={{width:"10px"}}/></button>}
                    {quatitiyCount(state,productDetail.id)>1&&<button onClick={()=>dispatch({type:"Decreaase",payload:productDetail})}>-</button>}
                    {inCart(state,productDetail.id)?
                    <button onClick={() => dispatch({type:"Increase",payload:productDetail})}>+</button>:
                    <button onClick={() => dispatch({type:'AddItem',payload:productDetail})}>Ad To Cart</button>}
                    </div>

            </div>
        </div>
    );}

export default Product;