import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Error from './Pages/Error';
import {GlobalStyle} from "./GlobalStyle"
import { ThemeProvider } from 'styled-components';
import Contact from './Pages/Contact';
import Nav2 from './Components/layout/Nav/Nav2';
import ProductDetail from './Components/layout/ProductDetail/ProductDetail';
import Products from "./Pages/Products/Products.jsx"


function App() {
  const show = true;
  const theme ={
    colors:{
      bg:"#000",
      cyan:"#83f4d4"
    }
  }
  return (

    // <ThemeProvider theme={theme}>
    <BrowserRouter>
    {/* <GlobalStyle/> */}
    <Nav2 show={show} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />        
        <Route path="/product/:id" element={<ProductDetail />} />        
        <Route path="/products" element={<Products/>} />        
        <Route path="/products/:keyword" element={<Products/>} />        

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
