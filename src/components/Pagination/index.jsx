import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';

import './pagination.scss';

import {Product} from '../Product';

export const Pagination = (props) =>{
    const { items } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 25;
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <div className="goods__all">
            {currentItems && currentItems.map(product => {
                return (
                    <Product key={product}/>
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