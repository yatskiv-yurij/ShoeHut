import { Routes, Route } from 'react-router-dom'


import { Home, Shop, ProductCart, Basket, Favourite, Auth, Account } from './pages';
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
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
