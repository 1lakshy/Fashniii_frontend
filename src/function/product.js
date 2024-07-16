
import ReactStars from "react-rating-stars-component";
import React from "react";
import {Link} from "react-router-dom";
import Btn from "../Components/layout/Btn.jsx"



let randomDecimal = Math.random();
const Products = ({product})=>{
    const options ={
        edit:false,
        activeColor:"tomato",
        size:window.innerWidth < 600 ? 16 : 18,
        value:product.rating,
        isHalf:true,
    }
    return(

        <Link to={`/product/${product._id}`} className="w-[13.5rem] h-[24rem] mr-4 my-3  bg-[#fff] ">
            <div className="w-[16rem]">
                <img src={product.images[0].url} alt="" srcset="" className="w-[13.5rem]" />
            </div>
            <div className="px-2">
            <p className="mt-2 brand">KongStar</p>
            <h6>{product.name}</h6>
            <div className="flex">
            <h5 className="mr-2 ">Rs.{Math.round(product.price*randomDecimal)}</h5>
            <h5 className="mr-2 old">Rs.{product.price}</h5>
            <h5 className="mr-2 discount">({Math.round((product.price*randomDecimal/product.price)*100)} % OFF)</h5>
            </div>
           
            
            {/* <div className="">
                <ReactStars {...options}/> 
                <div className="flex items-center justify-between">
                <span className="text-xs "><p>({product.numberOfreviews})</p></span>
                <h5 className="mr-2 text-[#333333]">₹{product.price}</h5>
                </div>
            
            </div> */}
            {/* <Btn text="Add to Cart"/> */}
            </div>


        </Link>
    )
}


export default Products;