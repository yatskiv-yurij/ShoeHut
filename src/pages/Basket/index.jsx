import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate} from 'react-router-dom';
import axios from '../../axios';

import './basket.scss';
import { Nav, Footer, ProductMin } from "../../components";
import { selectIsAuth } from "../../redux/slices/auth";

export const Basket = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(selectIsAuth);
    const { posts } = useSelector(state => state.post);
    const [products, setProducts] = useState(null);
    const [price, setPrice] = useState(0);
    const [deleted, setDeleted] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem('basket'));
        if(data){
            setProducts(data);
            let count = 0;
            data.map(product => {
                count += parseInt(product.price);
                
            });
            setPrice(count);
        }
    },[deleted]);

    const deleteProduct = (id) => {
        const postId = products.findIndex((elem) => elem.product === id);
        products.splice(postId, 1);
        setProducts([...products]);
        const basket = JSON.parse(window.localStorage.getItem('basket'));
        basket.splice(postId, 1);
        window.localStorage.setItem('basket', JSON.stringify(basket));
        setDeleted(!deleted);
    }

    const Order = () => {
        if(isAuth){
            const order = {
                products: [...products]
            }
            
            setProducts(null);
            window.localStorage.removeItem('basket');
            axios.post('/order', order);

        }else{
            navigate('/auth');
        }
    }

    return (
        <>
            <Nav />
                <header className="basket">
                    <div className="container">
                        <h3 className="basket__title title2">Корзина</h3>

                        {products && posts.data && <div className="basket__wrapper">
                            <div className="basket__products">
                                
                                {
                                    
                                    products.map(({product, size}, index) => {
                                        
                                        const dataProduct = posts.data.find((elem) => elem._id === product);
                                        return  <div key={index} className="basket__product">
                                                    <ProductMin data={dataProduct} size={size} counter={true} price={price} setPrice={setPrice} products={products} setProducts={setProducts}/>
                                                    <button className="basket__delete" onClick={() => deleteProduct(dataProduct._id)}>
                                                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M52.1999 1.84001C50.6399 0.280006 48.1199 0.280006 46.5599 1.84001L26.9999 21.36L7.43988 1.8C5.87988 0.240005 3.35988 0.240005 1.79988 1.8C0.239883 3.36 0.239883 5.88001 1.79988 7.44001L21.3599 27L1.79988 46.56C0.239883 48.12 0.239883 50.64 1.79988 52.2C3.35988 53.76 5.87988 53.76 7.43988 52.2L26.9999 32.64L46.5599 52.2C48.1199 53.76 50.6399 53.76 52.1999 52.2C53.7599 50.64 53.7599 48.12 52.1999 46.56L32.6399 27L52.1999 7.44001C53.7199 5.92001 53.7199 3.36001 52.1999 1.84001V1.84001Z" fill="black"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                    })
                                }
                            </div>

                            <div className="basket__sum">
                                <div className="basket__cost">
                                    <p>Вартість товарів:</p>
                                    <p>{price} UAH</p>
                                </div>
                                <div className="basket__payable">
                                    <p>До сплати: </p>
                                    <p>{price} UAH</p>
                                </div>
                                <hr />
                                <button className="basket__pay" onClick={Order}>Сплатити</button>
                            </div>
                        </div>}

                        {!products && <div className="basket__empty">
                            <div>
                                <p className="basket__empty-text">
                                    Ваша корзина порожня
                                </p>
                                <Link className="basket__shop" to={'/shop'}>ЗА ПОКУПКАМИ</Link>
                            </div>
                            
                        </div>}
                    </div>
                </header>
            <Footer />
        </>
    );
}