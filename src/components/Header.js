import { Link } from "react-router-dom"

const Header = ({bookmarks}) => {

  return (
    <header className="bg-white w-full py-4 px-16 flex flex-row items-center justify-between">
      <h1 className="font-bold text-2xl text-blue-600">
        <Link to="/">Books Library</Link>
      </h1>
      <nav className="text-blue-400 font-semibold">
        <ul className="flex flex-row items-center space-x-4 text-sm">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bookmarks">My Bookmarks ({bookmarks ? bookmarks.length : 0 })</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header