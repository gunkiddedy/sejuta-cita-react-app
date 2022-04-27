const Bookmarks = ({books}) => {
  return (
    <div className="bookmarks px-16 py-8">
      <h1>Bookmarks</h1>
      {books &&
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <div>{book.id}</div>
              <div>{book.title}</div>
              <div>{book.category_id}</div>
              <div>{book.authors}</div>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}
export default Bookmarks