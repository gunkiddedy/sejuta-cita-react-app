import { Link } from "react-router-dom"

const Categories = ({items, error, isLoading}) => {
  return (
    <>
      { isLoading ? (
        <p className="text-center text-xl">Loading data from server...</p>
      ) : (
        <article className="grid grid-cols-5 gap-5">
          {items.map((item, index) => (
            <Link to={`/books/${item.id}`}>
              <article
                className="bg-white p-4 transform transition duration-500 hover:scale-110 shadow-lg" 
                key={item.id}>
                  <img 
                    src={require(`../assets/img/book-${index + 1}.jpg`)} 
                    className="h-40 w-full object-cover" />
                  <footer className="py-2 flex flex-row justify-between">
                    <h3 className="text-xs">{item.name}</h3>
                    <button title="bookmark">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                    </button>
                  </footer>
              </article>
            </Link>
          ))} 
        </article>
      )}
      {/* if error */}
      { !items && 
        <p>{error}</p>
      }
    </>
  )
}
export default Categories