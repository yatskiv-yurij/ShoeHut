import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import './shop.scss';
import header_img from '../../image/header-shop.png';
import { Nav, Footer, Pagination, Spiner} from '../../components/';

export const Shop = () => {
    const [size, setSize] = useState(null);
    const [type, setType] = useState(null);
    const [color, setColor] = useState(null);

    const [selectSort, setSelectSort] = useState(null);
    const [selectSize, setSelectSize] = useState(null);
    const [selectType, setSelectType] = useState(null);
    const [selectSeason, setSelectSeason] = useState(null);
    const [selectColor, setSelectColor] = useState(null);
    const [search, setSearch] = useState(null);
    
    const [filterData, setFilterData] = useState(null);

    const{ posts } = useSelector(state => state.post);
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    useEffect(() =>{
        if(posts.data) {
            const sizes = [];
            const types = [];
            const colors =[];
            posts.data.map(post=> {
                post.sizes.map(size => {
                    if(!sizes.includes(size)){
                        sizes.push(size);
                    }
                })
                if(!types.includes(post.type)){
                    types.push(post.type);
                }
                if(!types.includes(post.type)){
                    types.push(post.type);
                }

                if(!colors.includes(post.color)){
                    colors.push(post.color);
                }
                
                
            });

            sizes.sort((a,b) => a-b);
            types.sort();
            colors.sort();
            setSize(sizes);
            setType(types);
            setColor(colors);
        }

    }, [posts.data]);

    const applyFilter = () => {
        let data = posts.data;
        if(selectSize){
            data = data.filter(elem => elem.sizes.includes(selectSize))
        }
        if(selectType){
            data = data.filter(elem => elem.type === selectType)
        }
        if(selectSeason){
            data = data.filter(elem => elem.season === selectSeason)
        }
        if(selectColor){
            data = data.filter(elem => elem.color === selectColor)
        }
        if(selectSort){
            if(selectSort === 'popular'){
                data = [...data].sort((elem, nextelem) => nextelem.popular - elem.popular)
            }
            if(selectSort === 'unpopular'){
                data = [...data].sort((elem, nextelem) => elem.popular - nextelem.popular)
            }
            if(selectSort === 'rich'){
                data = [...data].sort((elem, nextelem) => nextelem.price - elem.price)
            }
            if(selectSort === 'poor'){
                data = [...data].sort((elem, nextelem) => elem.price - nextelem.price)
            }
        }

        if(data){
            setFilterData(data);
        }
       
    }

    const deleteFilter = () => {
        setFilterData(null);
        document.querySelector('.filter__sort').value="default";
        document.querySelector('.filter__size').value="default";
        document.querySelector('.filter__type').value="default";
        document.querySelector('.filter__season').value="default";
        document.querySelector('.filter__color').value="default";
        setSelectSort(null);
        setSelectSize(null);
        setSelectType(null);
        setSelectSeason(null);
        setSelectColor(null);
    }

    const searchProduct = (value) => {
        let data = posts.data;
        data = [...data].filter(elem => {
            if(elem.title.toLowerCase().includes(value.toLowerCase())){
                return elem;
            }
        });

        if(data){
            setFilterData(data);
        }
    }

    return (
        <>
            <Nav />
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__content">
                            <h1 className="header__title title">Сучасне взуття від топових брендів</h1>
                            <p className="header__text">Купляй брендове взуття нової колекції саме в нашому магазині</p>
                        </div>
                        <img src={header_img} alt="header" className="header__img"/>
                    </div>
                </div>
            </header>
            <div className="goods">
                <div className="container">
                    <div className="filter">
                        <div className="filter__top">
                            <select name="sort" className="filter__sort" onChange={(event) => setSelectSort(event.target.value)} defaultValue={'default'}>
                                <option value="default" disable="false" hidden>Сортувати за</option>
                                <option value="popular">Спочатку популярні</option>
                                <option value="unpopular">Спочатку не популярні</option>
                                <option value="rich">Спочатку дорогі</option>
                                <option value="poor">Спочатку дешеві</option>
                            </select>
                            {size && <select name="size" className="filter__size" onChange={(event) => setSelectSize(event.target.value)} defaultValue={'default'}>
                                <option value="default" disable="false" hidden>Розмір</option>
                                {
                                    size.map((elem,index) => (
                                        <option key={index} value={elem}>{elem}</option>
                                    ))
                                }
                                
                            </select>}
                            { type && <select name="type" className='filter__type' onChange={(event) => setSelectType(event.target.value)} defaultValue={'default'}>
                                <option value="default" disable="false" hidden>Тип</option>
                                {
                                    type.map((elem, index) => (
                                        <option key={index} value={elem}>{elem}</option>
                                    ))
                                }
                            </select>}
                            <select name="season" className="filter__season" onChange={(event) => setSelectSeason(event.target.value)} defaultValue={'default'}>
                                <option value="default" disable="false"  hidden>Сезон</option>
                                <option value="summer">Літо</option>
                                <option value="winter">Зима</option>
                                <option value="spring">Весна-осінь</option>
                            </select>
                            { color && <select name="color" className="filter__color" onChange={(event) => setSelectColor(event.target.value)} defaultValue={'default'}>
                                <option value="default" disable="false"  hidden>Колір</option>
                                {
                                    color.map((elem, index) => (
                                        <option key={index} value={elem}>{elem}</option>
                                    ))
                                }
                            </select>}
                        </div>
                        <div className="filter__bottom">
                            <button className="filter__apply" onClick={applyFilter}>Застосувати</button>
                            <button className="filter__delete" onClick={deleteFilter}>Скинути</button>
                            <div className="filter__search">
                                <button className="filter__search-btn" onClick={() => searchProduct(search)}></button>
                                <input type="text" className="filter__search-input" placeholder='Пошук' onChange={(event) => {setSearch(event.target.value); searchProduct(event.target.value)}}/>  
                            </div>
                            
                        </div>
                    </div>
                    {posts.status === 'loading' && <Spiner />}
                    {posts.data && !filterData && <Pagination items={posts.data} /> }
                    {filterData && <Pagination items={filterData} /> }
                </div>
            </div>
            <Footer />
        </>
    );
}