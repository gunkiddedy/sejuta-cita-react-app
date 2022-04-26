import { Link } from "react-router-dom"

const Categories = ({items, error, isLoading}) => {
  return (
    <div className="categories my-8">
      <h1 className="text-2xl font-bold text-blue-500"></h1>
      { isLoading ? (
        <p className="text-center text-xl">Loading data from server...</p>
      ) : (
        <article className="grid grid-cols-5 gap-5">
          {items.map((item, index) => (
            <Link 
              className="bg-white p-4 transform transition duration-500 hover:scale-110 shadow-lg" 
              to={`/books/${item.id}/${item.name}`} key={item.id}>
              <article>
                  <img 
                    src={require(`../assets/img/book-${index + 1}.jpg`)} 
                    className="h-40 w-full object-cover"
                    alt={item.name} />
                  <footer className="py-2 flex flex-row justify-between">
                    <h3 className="text-xs">{item.name}</h3>
                    <button title="bookmark">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
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
    </div>
  )
}
export default Categories