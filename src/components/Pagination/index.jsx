import React, {useState, useEffect, useRef} from 'react'
import ReactPaginate from 'react-paginate';

import './pagination.scss';

import {Product} from '../Product';

export const Pagination = ({items}) =>{
  const paginationRef = useRef(null); 
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
      paginationRef.current.scrollIntoView();
    };
  
    return (
      <>
        <div className="goods__all" ref={paginationRef}>
            {currentItems && currentItems.map((product, index) => {
                return (
                    <Product key={index} edit={false} data={product}/>
                )
            })}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName='pagination__page'
          previousLinkClassName='pagination__prev'
          nextLinkClassName='pagination__next'
          breakLinkClassName='pagination__break'
        />
      </>
    );
  }