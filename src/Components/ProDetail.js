import React,{useContext} from 'react';
// context 
import {productContext} from "../Context/Productprovider";
import { Link } from 'react-router-dom';


const ProDetail = (productDetail) => {
    // console.log(productDetail)
    const id=productDetail.match.params.id;
    const contekst=useContext(productContext);
    const detayl=contekst[id-1];
    const {image,title,price,category,description}=detayl;
    // console.log(detayl)
    return (
        <div>
            <img src={image} alt="pictur"/>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p><span>Category :</span> {category}</p>
            </div>
            <span>{price}$</span>
            <br/>
            <Link to="/store">Back To ShowCase</Link>
        </div>
    );
};

export default ProDetail;