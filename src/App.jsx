import { useState, useEffect } from 'react'

import './App.css'
import Header from './Header/Header'
import NotesManager from './NotesManager/NotesManager'

function App() {
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  // const [error, setError] = useState('')

  useEffect(() => {
    const update = setTimeout(() => { setQuery(inputValue) }, 1000);
    return () => { clearTimeout(update) }
  }, [inputValue])

  return (
    <div className='p-10 font-serif bg-gray-300'>
      <Header title='Notes manager' onChange={(e) => { setInputValue(e.target.value) }} query={inputValue} />
      <NotesManager search={query} />
    </div>
  )
}

export default App
