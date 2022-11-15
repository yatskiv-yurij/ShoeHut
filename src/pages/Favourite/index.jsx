import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import './favourite.scss';
import { Nav, Footer, ProductMin } from "../../components";


export const Favourite = () => {
    const { posts } = useSelector(state => state.post);
    const [favourite, setFavourite] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        const favourites = JSON.parse(window.localStorage.getItem('favourite'));
        if(favourites) {
            setFavourite(favourites)
        }
    }, []);

    const deleteFavourite = (id) => {
        const index = favourite.findIndex(elem => elem === id);
        favourite.splice(index, 1);
        setFavourite([...favourite]);
        const favourites = JSON.parse(window.localStorage.getItem('favourite'));
        favourites.splice(index, 1);
        window.localStorage.setItem('favourite', JSON.stringify(favourites));
    }
    

    return (
        <>
            <Nav />
                <header className="favourite">
                    <div className="container">
                        <h3 className="favourite__title title2">Вподобані</h3>
                        {posts.data && favourite && <div className="favourite__products">


                            {
                                favourite.map((id, index) => {
                                        
                                    const dataProduct = posts.data.find((elem) => elem._id === id);
                                    return  <div key={index} className="basket__product">
                                                <ProductMin data={dataProduct} size={false} counter={false} />
                                                <button className="favourite__delete" onClick={() => deleteFavourite(id)}>
                                                    <svg className='heart red-heart' width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.3607 20.548L11.3592 20.5467C8.12037 17.6097 5.51322 15.2432 3.70374 13.0309C1.90574 10.8327 1 8.90902 1 6.875C1 3.57728 3.57728 1 6.875 1C8.74721 1 10.5597 1.87644 11.7386 3.26084L12.5 4.1549L13.2614 3.26084C14.4403 1.87644 16.2528 1 18.125 1C21.4227 1 24 3.57728 24 6.875C24 8.90903 23.0943 10.8328 21.296 13.0328C19.4865 15.2466 16.8796 17.6159 13.6411 20.5589C13.6407 20.5593 13.6403 20.5596 13.64 20.5599L12.5026 21.5875L11.3607 20.548Z" fill="#EB3223" stroke="black" strokeWidth="2"/>
                                                    </svg>
                                                </button>
                                            </div>
                                })
                            }
                        </div>}

                        {!favourite && <div className="favourite__empty">
                            <div>
                                <p className="favourite__empty-text">
                                    У Вас немає улюблених товарів
                                </p>
                                <Link className="favourite__shop" to={'/shop'}>ЗА ПОКУПКАМИ</Link>
                            </div>
                            
                        </div>}
                    </div>
                </header>
            <Footer />
        </>
    );
}