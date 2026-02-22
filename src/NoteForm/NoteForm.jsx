import '../App.css'

export default function NoteForm({ submitForm, onTitleChange, onDescrChange, onTagChange, title, description, tag }) {
    return (
        <div className='py-5 mb-10 bg-white rounded-2xl border border-black flex flex-col items-center'>
            <p className='mb-5 text-3xl'>Form</p>
            <form className='flex flex-col items-center' onSubmit={submitForm}>
                <input type="text" id="noteTitle" name="title" value={title} onChange={onTitleChange} required placeholder='Введіть заголовок нотатки' className='px-3 py-1 rounded-2xl border border-black w-xl mb-3' />
                <textarea type="text" id='noteText' name='text' value={description} onChange={onDescrChange} required placeholder='Введіть текст нотатки' rows='3' className='px-3 py-1 rounded-2xl border border-black w-xl mb-3' />
                <select type="text" id='noteTag' onChange={onTagChange} value={tag} placeholder='Оберіть категорію нотатки' className='px-3 py-1 rounded-2xl border border-black w-xl mb-3' >
                    <option value="common">Загальні</option>
                    <option value="work">Робота</option>
                    <option value="personal">Особисте</option>
                    <option value="study">Навчання</option>
                </select>
                <button type='submit' className='px-3 py-1 rounded-2xl border border-black w-s mb-3'>Створити</button>
            </form>
        </div>
    )
}