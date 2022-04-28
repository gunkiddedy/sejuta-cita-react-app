import { Link } from "react-router-dom"

const Categories = ({items, error, isLoading}) => {
  return (
    <div className="categories my-8">
            
      { isLoading ? (
        <p className="text-center text-xl">Loading data from server...</p>
      ) : (
        <article className="grid lg:grid-cols-5 md:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <Link 
              className="bg-white p-4 transform transition duration-500 hover:scale-110 shadow-lg" 
              to={`/books/${item.id}/${item.name}`} key={item.id}>
              <article>
                  <img 
                    src={require(`../assets/img/book-${index + 1}.jpg`)} 
                    className="h-4/6 md:h-40 w-full object-cover"
                    alt={item.name} />
                  <footer className="py-2 flex flex-row justify-between">
                    <h3 className="text-xs">{item.name}</h3>
                  </footer>
              </article>
            </Link>
          ))} 
        </article>
      )}
      
      { !items && 
        <p>{error}</p>
      }
    </div>
  )
}
export default Categories