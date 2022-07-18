import React , { useContext } from 'react';
import Product from "../shared/Product";
import { productContext } from "../Context/Productprovider";

const Store = () => {
    const products = useContext(productContext)
    return (
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
            {products.map(productDetail=><Product key={productDetail.id} productDetail={productDetail}/>)}
        </div>
    );
};

export default Store;