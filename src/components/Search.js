const Search = () => {
  return (
    <div className="flex flex-row items-center justify-center my-8">
      <form className="py-4 bg-white w-1/2 flex flex-row items-center px-4 space-x-4">
        <input 
          placeholder="Search Book here..."
          name="input" 
          className="w-full text-sm focus:outline-none px-8 py-2 rounded-2xl bg-gray-100" />
        <button className="bg-blue-500 py-2 px-8 text-white rounded-full text-sm font-semibold">Search</button>
      </form>

    </div>
  )
}
export default Search