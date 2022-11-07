import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { decodeToken } from "react-jwt";
import { useDispatch } from "react-redux";

import './App.scss';
import { Home, Shop, ProductCart, Basket, Favourite, Auth, Account, Guarantee, Exchange, AboutUs } from './pages';
import { NewEdit, Search, Client, Order } from './components';
import { fetchAuthMe } from './redux/slices/auth';


function App() {
  const dispatch = useDispatch();
  const [token, setToken] = useState();
  const role = token ? decodeToken(token).role : 'client';

  if(window.localStorage.getItem('token') != null  && !token){
    setToken(window.localStorage.getItem('token'));
  }

  useEffect(() => {
    dispatch(fetchAuthMe());
}, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductCart />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/auth" element={<Auth setToken={setToken} token={token}/> } />
        <Route path="/account" element={<Account setToken={setToken} role={role}/>}>
          <Route path='client' element={<Client />} />
          <Route path='order' element={<Order role={role} />} />
          <Route path='new-product' element={<NewEdit edit={false}/>} />
          <Route path='search' element={<Search />} />
          <Route path='edit-product/:id' element={<NewEdit edit={true}/>} />
        </Route>
        <Route path="/guarantee" element={<Guarantee />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
