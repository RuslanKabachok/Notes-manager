import '../App.css'

export default function NoteForm({ SubmitForm }) {
    return (
        <div className='py-5 mb-10 bg-white rounded-2xl border border-black flex flex-col items-center'>
            <p className='mb-5 text-3xl'>Form</p>
            <form className='flex flex-col items-center' onSubmit={SubmitForm}>
                <input type="text" id="noteTitle" name="title" required placeholder='Введіть заголовок нотатки' className='px-3 py-1 rounded-2xl border border-black w-xl mb-3' />
                <textarea type="text" id='noteText' name='text' required placeholder='Введіть текст нотатки' rows='3' className='px-3 py-1 rounded-2xl border border-black w-xl mb-3' />
                <select type="text" id='noteTag' placeholder='Оберіть категорію нотатки' className='px-3 py-1 rounded-2xl border border-black w-xl mb-3' >
                    <option value="all">Усі нотатки</option>
                    <option value="work">Робота</option>
                    <option value="personal">Особисте</option>
                    <option value="urgent">Терміново</option>
                </select>
                <button type='submit' className='px-3 py-1 rounded-2xl border border-black w-s mb-3'>Створити</button>
            </form>
        </div>
    )
}