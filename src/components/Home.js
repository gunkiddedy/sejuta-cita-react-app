import Categories from './Categories'

const Home = ({items, error, isLoading}) => {
  return (
    <main className='px-4 md:px-16'>
      <Categories 
        items={items} 
        error={error} 
        isLoading={isLoading} 
      />
    </main>
  )
}

export default Home