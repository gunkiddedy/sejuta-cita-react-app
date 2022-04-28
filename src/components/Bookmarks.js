import { useEffect } from 'react'
import { useStore } from '../store/store'
import Book from './Book'

const Bookmarks = () => {

  const addBookmarks = useStore((state) => state.addBookmarks)
  const removeAllBookmarks = useStore((state) => state.removeAllBookmarks)
  const myBooks = useStore((state) => state.bookmarks)

  
  useEffect(() => {
    addBookmarks(JSON.parse(localStorage.getItem('bookmarks')))
  }, [])

  return (
    <div className="bookmarks px-16 py-8">
      {!myBooks ? (
        <div className='flex flex-row justify-center'>
          <p className='text-center'>No data here...</p>
        </div>
      ) : (
        <>
          <button
            onClick={removeAllBookmarks} 
            className="bg-red-500 py-2 px-3 text-white rounded-full text-xs font-bold">
              Clear Bookmarks
          </button>
          <div className='book py-8 grid grid-cols-5 gap-5'>
            {myBooks.map((book, index) => (
              <Book 
                key={index} 
                book={book} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
export default Bookmarks