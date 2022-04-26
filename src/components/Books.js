import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

import Search from './Search'


const Books = ({booksPerPage}) => {
  const {id, name} = useParams()

  const keyword = '/fee-assessment-books' //fee-assessment-books?categoryId=1
  const [books, setBooks] = useState([])
  const [currentBooks, setCurrentBooks] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [search, setSearch] = useState('')

  const fetchData = async () => {
    await fetch(`${keyword}?categoryId=${id}`)
      .then(response => response.json())
      .then(data => {
        setBooks(data)
        const endOffset = itemOffset + booksPerPage;
        console.log(`Loading books from ${itemOffset} to ${endOffset}`);
        setCurrentBooks(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / booksPerPage));
        console.log(data)
      }).catch(error => {
        console.log(error)
      })
  }

  // useEffect(() => {
  //   const filteredResults = posts.filter(post => 
  //     ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
  //     ((post.title).toLowerCase()).includes(search.toLowerCase()
  //   ));
  //   setSearchResults(filteredResults.reverse());
  // }, [posts, search])

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = currentBooks.filter( book => ((book.title).toLowerCase()).includes(search.toLowerCase()))
    setCurrentBooks(filteredResults)
    console.log(filteredResults)
  }

  useEffect(() => {
    fetchData()
  }, [id,itemOffset, booksPerPage])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * booksPerPage) % books.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset)
  }

  return (
    <div className='books px-16 py-8'>
      <div className='flex flex-row items-center justify-between mb-12 pb-4 border-b border-gray-50'>
        <div className='p-2 bg-white rounded-tl-lg rounded-br-lg shadow-sm max-w-max'>
          <h1 className='text-sm font-semibold'>{name}</h1>
        </div>
        <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
      </div>
      <div className='book pb-8 grid grid-cols-5 gap-5'>
        { currentBooks && currentBooks.map((book, index) => (
          <article 
            className='bg-white p-4 transform transition duration-500 hover:scale-110 shadow-lg' 
            key={index}>
            <img 
              src={book.cover_url} 
              className="h-40 w-full object-cover"
              alt={book.title} />
            <footer className="py-2 flex flex-row justify-between">
              <h3 className="text-xs">{book.title}</h3>
            </footer>
          </article>
          ))
        }
      </div>
      <div className='paginate flex flex-row justify-center mt-4'>
        <ReactPaginate
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
}

Books.defaultProps = {
  booksPerPage: 10
}

export default Books