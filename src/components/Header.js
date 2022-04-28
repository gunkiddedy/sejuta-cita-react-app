import { Link } from "react-router-dom"
import { useStore } from '../store/store'

const Header = () => {
  const bookmarks = useStore((state) => state.bookmarks)

  return (
    <header className="bg-white w-full py-4 px-4 md:px-16 flex flex-row items-center justify-between">
      <h1 className="font-bold text-xs md:text-2xl text-blue-600">
        <Link to="/">Books Library</Link>
      </h1>

      <nav className="text-blue-400 font-semibold md:text-sm text-xs">
        <ul className="flex flex-row items-center space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bookmarks">My Bookmarks ({bookmarks ? bookmarks.length : 0 })</Link></li>
        </ul>
      </nav>
      
    </header>
  )
}
export default Header