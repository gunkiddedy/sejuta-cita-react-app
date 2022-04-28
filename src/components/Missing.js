import { Link } from "react-router-dom"

const Missing = () => {
  return (
    <div className="px-4 md:px-16 h-64 py-8 flex items-center flex-col">
      <div className="flex">
        <h1 className="text-6xl text-gray-700 font-bold">404. Halaman tidak ada!</h1>
      </div>
      <Link to="/" className="mt-4">
        <span className="text-xl text-blue-500 font-bold">Kembali ke beranda</span>
      </Link>
    </div>
  )
}

export default Missing