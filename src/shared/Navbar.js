import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import {cartContext} from "../Context/CardProvider";
import cart from "../assets/icon/cart.svg"
const Navbar = () => {
    const {state}=useContext(cartContext);
    return (
        <div>
            <Link to="/store">ShowCase</Link>
            <div>
                <Link to="/shop"><img src={cart} alt='Cart' style={{width:"25px"}}/></Link>
                <span style={{fontSize:"30px"}}>{state.itemCounter}</span>
            </div>
            
        </div>
    );
};

export default Navbar;