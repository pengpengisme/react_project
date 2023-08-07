import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import DataProvider from './Components/Dataprovider';
import NavbarConsumer from './Components/Navbar/NavbarConsumer';
import NavbarManager from './Components/Navbar/NavbarManager';
import Bag from "./Components/Bag/Bag";
import Checkout from "./Components/Checkout/Checkout";
import Member from "./Components/Member/Member";
import Member_edit from './Components/Member/Member_edit';
import Member_order from "./Components/Member/Member_order"
import Business from "./Components/Business/Business";
import Product_edit from "./Components/Business/Product_edit";
import Product from "./Components/Product/Home";
import Login from "./Components/Login & Signup/Login";
import Signup from './Components/Login & Signup/Signup';
import ForgetPassword from "./Components/Login & Signup/Forgotpassword";
// import Footer from "./Components/Navbar/Footer";
import "./Components/Login & Signup/App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<><NavbarConsumer /><DataProvider endpoint="api/member/" render={data => <Member data={data} />} /></>} />
          <Route path="/bag" element={<><NavbarConsumer /><Bag /></>} />
          <Route path="/checkout" element={<><NavbarConsumer /><Checkout /></>} />
          <Route path='/member' element={<><NavbarConsumer /> <DataProvider endpoint="api/member/" render={data => <Member data={data} />} /></>} />
          <Route path='/member_edit' element={<><NavbarConsumer /><DataProvider endpoint="api/member_edit/" render={data => <Member_edit data={data} />} /></>} />
          <Route path='/member_order' element={<><NavbarConsumer /><Member_order /></>} />
          <Route path='/business' element={<><NavbarManager /> <Business /></>} />
          <Route path="/product_edit/:id" element={<><NavbarManager /><ProductEditWithData /></>} />
          <Route path='/login' element={<><NavbarConsumer /> <Login /></>} />
          <Route path='/signup' element={<><NavbarConsumer /> <Signup /></>} />
          <Route path='/forgot-password' element={<><NavbarConsumer /> <ForgetPassword /></>} />
          <Route path='/product' element={<><NavbarConsumer /> <Product /></>} />
        </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);


function ProductEditWithData() {
  const { id } = useParams(); // Access the 'id' parameter using useParams hook

  return (
    <DataProvider endpoint={`api/product/${id}/`} render={data => <Product_edit data={data} />} />
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
