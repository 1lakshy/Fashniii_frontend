import React, { useEffect } from 'react';
import HeroSection from '../Components/HeroSection';
import Categories from '../Components/Categories';
import MetaData from '../Components/MetaData';
import AllProducts from '../Components/AllProducts';
import { getProducts } from '../Actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Components/layout/Footer/Footer';
import Products from '../function/product';
import Loading from '../Components/layout/Loading/Loading';
// import styled from "styled-components"

const Home = () => {
  const dispatch = useDispatch();
  

  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
    {loading ? (<Loading/>):(
          <div className="" style={{ height: 'max-content' }}>
          <MetaData title="Fashniii" />
          <HeroSection />
          <Categories />
          {/* <AllProducts/> */}
          <div className="Products flex flex-wrap">
            {products && products.map((product) => <Products product={product} />)}
          </div>
          <Footer />
        </div>
    )}
    
    </>

  );
};

// const Content = styled.div`
// padding-top: 2rem;
//   height: 50rem;
//   width: 100vw;
//   /* background-color: yellow; */
//   /* position: relative; */
// `
export default Home;
