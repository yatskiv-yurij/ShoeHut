import { Routes, Route } from 'react-router-dom'


import { Home, Shop, ProductCart } from './pages';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductCart />} />
      </Routes>
    </div>
  );
}

export default App;
