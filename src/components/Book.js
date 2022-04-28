const Book = ({book, handleBookmarks}) => {
  return (
    <article className='bg-white p-4 transform transition duration-500 hover:scale-110 shadow-lg'>
      <img 
        src={book.cover_url} 
        className="h-4/6 md:h-40 w-full object-cover"
        alt={book.title} />
      <footer className="py-2 space-y-2">
        <h3 className="md:text-xs text-lg">{book.title}</h3>
        {handleBookmarks && 
          <button 
            className="bg-gray-500 rounded-md shadow-sm px-2 text-white focus:ring-2 focus:ring-blue-400"
            onClick={() => handleBookmarks(book)} 
            title="bookmark">
              <h5 className="md:text-xs font-semibold leading-snug">Bookmark</h5>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg> */}
          </button>
        }
      </footer>
    </article>
  )
}
export default Book