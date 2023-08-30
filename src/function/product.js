
import ReactStars from "react-rating-stars-component";
import React from "react";
import {Link} from "react-router-dom";
import Btn from "../Components/layout/Btn.jsx"




const Products = ({product})=>{
    const options ={
        edit:false,
        activeColor:"tomato",
        size:window.innerWidth < 600 ? 16 : 18,
        value:product.rating,
        isHalf:true,
    }
    return(

        <Link to={`/product/${product._id}`} className="cardShadow w-[18rem] h-[28rem] m-2 rounded-2xl bg-[#fff] ">
            <div className="w-[16rem]">
                <img src={product.images[0].url} alt="" srcset="" className="w-[16rem]" />
            </div>
            <div className="px-2">
            <p className="mt-2">{product.name}</p>
            <h6>Lorem ipsum dolor sit amet.</h6>
            <div className="">
                <ReactStars {...options}/> 
                <div className="flex items-center justify-between">
                <span className="text-xs "><p>({product.numberOfreviews})</p></span>
                <h5 className="mr-2 text-[#333333]">₹{product.price}</h5>
                </div>
            
            </div>
            {/* <Btn text="Add to Cart"/> */}
            </div>


        </Link>
    )
}


export default Products;