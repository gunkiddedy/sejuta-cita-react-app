import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

import Search from './Search'


const Books = ({booksPerPage}) => {
  const {id, name} = useParams()

  const keyword = '/fee-assessment-books' //fee-assessment-books?categoryId=1
  const [books, setBooks] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')

  const [currentBooks, setCurrentBooks] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  const [bookmarks, setBookmarks] = useState([])

  const fetchData = async () => {
    await fetch(`${keyword}?categoryId=${id}`)
      .then(response => response.json())
      .then(data => {
        setIsLoading(false)
        setBooks(data)
        const endOffset = itemOffset + booksPerPage
        console.log(`Loading books from ${itemOffset} to ${endOffset}`)
        setCurrentBooks(data.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(data.length / booksPerPage))
        // console.log(data)
      }).catch(error => {
        setIsLoading(false)
        setError(error.message)
        console.log(error)
      })
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const filteredResults = currentBooks.filter( book => ((book.title).toLowerCase()).includes(search.toLowerCase()))
    setCurrentBooks(filteredResults)
    setPageCount(Math.ceil(currentBooks.length / booksPerPage))
    // console.log(filteredResults)
  }

  const handleBookmarks = (bookId) => {
    let myBooks = []
    const bookmarked = books.filter((book) => book.id === bookId) //1
    myBooks = [...bookmarked] //new array from bookmarked book //2

    const listBooks = bookmarks.map(book => book.id !== bookId ? [...bookmarks, ...myBooks] : false)
    // setBookmarks(listBooks)
   
    setBookmarks(oldArray => [...oldArray, listBooks])
    console.log('bookmarked ', bookmarked)
    console.log('listBooks ', listBooks)
    console.log('bookmarks ', bookmarks)
  }

  useEffect(() => {
    setTimeout(()=> {fetchData()}, 750)
  }, [id,itemOffset, booksPerPage, search])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * booksPerPage) % books.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
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
      {isLoading && <p className='text-center'>Loading data from server...</p>}
      {!isLoading && currentBooks.length <= 0 && <p className='text-center'>No data found</p>}
      <div className='book pb-8 grid grid-cols-5 gap-5'>
        { !isLoading && currentBooks && currentBooks.map((book, index) => (
          <article 
            className='bg-white p-4 transform transition duration-500 hover:scale-110 shadow-lg' 
            key={index}>
            <img 
              src={book.cover_url} 
              className="h-40 w-full object-cover"
              alt={book.title} />
            <footer className="py-2 flex flex-row justify-between">
              <h3 className="text-xs">{book.title}</h3>
              <button onClick={() => handleBookmarks(book.id)} title="bookmark">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
              </button>
            </footer>
          </article>
          ))
        }
      </div>
      <div className='paginate flex flex-row justify-center mt-4'>
        {currentBooks.length >= 1 && 
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
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="prev"
            renderOnZeroPageCount={null}
          />
        }
      </div>
    </div>
  )
}

Books.defaultProps = {
  booksPerPage: 10
}

export default Books