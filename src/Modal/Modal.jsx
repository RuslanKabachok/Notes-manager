import { useState } from 'react'

import '../App.css'

export default function Modal({ noteToEdit, onEdit, closeModal }) {
    const [title, setTitle] = useState(noteToEdit.title);
    const [description, setDescription] = useState(noteToEdit.text);
    const [tag, setTag] = useState(noteToEdit.tag);

    return <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5'>
        <div className='py-5 mb-10 bg-white rounded-2xl border border-black flex flex-col items-center absolute shadow-xl'>
            <p className='mb-5 text-3xl'>Edit form</p>
            <form className='flex flex-col items-center p-10' onSubmit={(e) => {
                e.preventDefault()
                onEdit({
                    ...noteToEdit,
                    title,
                    text: description,
                    tag
                });
            }}>
                <input type="text" id="noteTitle" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} required placeholder='Введіть заголовок нотатки' className='px-3 py-1 rounded-2xl border border-black w-xl mb-3' />
                <textarea type="text" id='noteText' name='text' value={description} onChange={(e) => { setDescription(e.target.value) }} required placeholder='Введіть текст нотатки' rows='3' className='px-3 py-1 rounded-2xl border border-black w-xl mb-3' />
                <select type="text" id='noteTag' value={tag} onChange={(e) => { setTag(e.target.value) }} placeholder='Оберіть категорію нотатки' className='px-3 py-1 rounded-2xl border border-black w-xl mb-3' >
                    <option value="common">Загальні</option>
                    <option value="work">Робота</option>
                    <option value="personal">Особисте</option>
                    <option value="study">Навчання</option>
                </select>
                <div>
                    <button type='submit' className='px-3 py-1 mr-2 rounded-2xl border border-black w-s mb-3'>Редагувати</button>
                    <button type='button' onClick={closeModal} className='px-3 py-1 rounded-2xl border border-black w-s mb-3'>Скасувати</button>
                </div>
            </form>
        </div>
    </div>
}