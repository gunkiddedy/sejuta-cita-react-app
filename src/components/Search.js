const Search = ({search, setSearch, handleSearch}) => {
  return (
      <form 
        onSubmit={handleSearch}
        className="w-1/2 flex flex-row items-center px-4 space-x-4">
        <input 
          placeholder="Search Book here..."
          name="input"
          required
          value={search}
          onChange={(e)=> setSearch(e.target.value)} 
          className="w-full text-sm focus:outline-none px-8 py-2 rounded-2xl bg-white" />
        <button type="submit" className="bg-blue-500 py-2 px-8 text-white rounded-full text-sm font-semibold">Search</button>
      </form>
  )
}
export default Search