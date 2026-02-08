import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import NotesManager from './NotesManager/NotesManager'

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className='p-10 font-serif bg-gray-300'>
      <Header title='Notes manager' onChange={(e) => { setQuery(e.target.value) }} query={query} />
      <NotesManager search={query} />
    </div>
  )
}

export default App
