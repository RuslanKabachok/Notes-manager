import './App.css'
import Header from './HeaderComponent/Header'
import NoteForm from './NoteFormComponent/NoteForm'

function App() {

  const onChange = (e) => { console.log(e.target.value) }
  const SubmitForm = (e) => {
    e.preventDefault()

    return {
      title: e.target.elements.noteTitle.value,
      text: e.target.elements.noteText.value,
      tag: e.target.elements.noteTag.value
    }
  }

  return (
    <div className='p-10 font-serif bg-gray-300'>
      <Header title='Notes manager' onChange={onChange} />
      <NoteForm SubmitForm={SubmitForm} />
    </div>
  )
}

export default App
