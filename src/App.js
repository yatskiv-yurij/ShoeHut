import { Routes, Route } from 'react-router-dom'


import { Home, Shop, ProductCart, Basket, Favourite, Auth, Account, Guarantee, Exchange, AboutUs } from './pages';
import { NewEdit, Search, Client, Order } from './components';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductCart />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/account" element={<Account role={"client"}/>}>
          <Route path='client' element={<Client />} />
          <Route path='order' element={<Order role="client" />} />
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
