import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Books = () => {
  const {id} = useParams()
  const keyword = '/fee-assessment-books' //fee-assessment-books?categoryId=1

  const [books, setBooks] = useState([])
  // const [errorBooks, setErrorBooks] = useState(null)
  // const [isLoadingBooks, setIsLoadingBooks] = useState(true)

  const fetchBooks = async () => {
    try {
      await fetch(`${keyword}?categoryId=${id}`)
      .then(response => response.json())
      .then(data => {
        setBooks(data)
        console.log(data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setTimeout(() => fetchBooks(), 1000)
  }, [id])

  return (
    <div>
      {books.map(book => (
        <pre key={book.id}>{book.title}</pre>
      ))}
    </div>
  )
}
export default Books