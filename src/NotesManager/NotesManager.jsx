import { useState, useEffect } from 'react';
import '../App.css'
import NoteForm from '../NoteForm/NoteForm';
import NoteList from '../NoteList/NoteList';
import FilterPanel from '../FilterPanel/FilterPanel';
import { nanoid } from 'nanoid';
import Modal from '../Modal/Modal';

export default function NotesManager({ search }) {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes')
        return savedNotes ? JSON.parse(savedNotes) : []
    });
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('common');
    const [isEditing, setIsEditing] = useState(false);
    const [editingNote, setEditingNote] = useState({});
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const filteredNotes = notes.filter((note) => note.text.includes(search) && (note.tag === filter || filter === 'all'))

    const submitForm = (e) => {
        e.preventDefault()

        const newNote = {
            title: e.target.elements.noteTitle.value,
            text: e.target.elements.noteText.value,
            tag: e.target.elements.noteTag.value,
            id: nanoid(),
        }

        localStorage.setItem('notes', JSON.stringify(notes))

        setNotes(prevNotes => [...prevNotes, newNote])
        setTitle('')
        setDescription('')
        setTag('common')
        setFilter('all')
    }

    const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id));

    const openModal = (id) => {
        const noteToEdit = notes.find(note => note.id === id)
        setEditingNote(noteToEdit);
        setIsEditing(true);
    }

    const editNote = (newNote) => {
        setNotes(prevNotes => prevNotes.map(note => note.id === newNote.id ? newNote : note))

        setIsEditing(false);
    }

    return (
        <>
            <NoteForm
                title={title}
                description={description}
                tag={tag}
                submitForm={submitForm}
                onTagChange={(e) => { setTag(e.target.value) }}
                onTitleChange={(e) => { setTitle(e.target.value) }}
                onDescrChange={(e) => { setDescription(e.target.value) }} />

            {!notes.length ? <p className='text-center'>Нотаток немає</p> : <> <FilterPanel filter={filter} onFilterChange={(e) => { setFilter(e.target.value) }} /> <NoteList data={filteredNotes} onEditPress={openModal} onDelete={deleteNote} /></>}

            {!isEditing ? null :
                <Modal noteToEdit={editingNote} onEdit={editNote} closeModal={() => { setIsEditing(false) }} />}
        </>
    )
}