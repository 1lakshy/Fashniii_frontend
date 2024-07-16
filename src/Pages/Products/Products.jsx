import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Components/layout/Loading/Loading';
import Product from '../../function/product';
import { useEffect } from 'react';
import { getProducts } from '../../Actions/productAction';
import { useParams } from 'react-router-dom';
// import Pagination from "react-js-pagination"
import { Pagination } from '@mui/material';
import './products.css';
import Filter from '../../Components/layout/Filter/Filter';

const Products = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const { loading, products, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const params = useParams();
  const keyword = params.keyword;
  const [price,setPrice] = useState([0,10000]);
  const [category,setCategory] = useState('');

  useEffect(() => {
    dispatch(getProducts(keyword, currentPage,price));
  }, [dispatch, keyword, currentPage,price]);

  const handlePriceValue = (value) => {
    setPrice(value);
  };
  const handleCategoryValue = (value) => {
    setCategory(value);
  };
  console.log(price)
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex main ">
            <Filter priceValue={handlePriceValue} category={handleCategoryValue}/>
            <div className="">
              <h1 className="heading mx-4">Products</h1>
              <div className="products flex flex-wrap">
                {products &&
                  products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
              </div>
            </div>
          </div>

          <div className="paginationDiv">
            <Pagination
              count={10}
              defaultPage={1}
              page={currentPage}
              onChange={(e, newPage) => setCurrentPage(newPage)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Products;
