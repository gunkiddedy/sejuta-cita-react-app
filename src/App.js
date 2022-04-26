import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Search from './components/Search'
import Home from './components/Home'
import Bookmarks from './components/Bookmarks'
import Books from './components/Books'
import Missing from './components/Missing'

const App = () => {
  const keyword = '/fee-assessment-categories' //fee-assessment-books?categoryId=1
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchCategories = async () => {
    try {
      await fetch(keyword)
      .then(response => response.json())
      .then(data => {
        setIsLoading(false)
        setItems(data)
        console.log(data)
      })
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    setTimeout(() => fetchCategories(), 1000)
  }, [])

  return (
    <main className='bg-blue-100 pb-12'>
      <Header />
      <Switch>
        <Route exact path="/">
          <Search />
          <Home items={items} error={error} isLoading={isLoading} />
        </Route>
        <Route exact path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/books/:id">
          <Books />
        </Route>
        <Route path="*" component={Missing} />
      </Switch>
    </main> 
  )
}
export default App
