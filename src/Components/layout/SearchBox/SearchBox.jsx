import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";
import "./searchBox.css";

const SearchBox = () => {

const [keyword,SetKeyword] = useState()
const navigate = useNavigate();
const submitHandler=(e)=>{
   e.preventDefault();
   if(keyword.trim()){
    navigate(`/products/${keyword}`);
   }else{
    navigate("/products");
   }
}

  return (
    <>
    <form className='searchBox' >

        <input type="text" placeholder='search Anything' onChange={(e)=>SetKeyword(e.target.value)}/>
    
          <button onClick={submitHandler}>
            <BiSearchAlt/>
          </button>
      
    </form>
    </>
  )
}

export default SearchBox