import { useState } from 'react';
import '../App.css'
import NoteForm from '../NoteForm/NoteForm';
import NoteList from '../NoteList/NoteList'
import { nanoid } from 'nanoid';

export default function NotesManager() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('common');
    const [isEditing, setIsEditing] = useState(false);

    const SubmitForm = (e) => {
        e.preventDefault()

        const newNote = {
            title: e.target.elements.noteTitle.value,
            text: e.target.elements.noteText.value,
            tag: e.target.elements.noteTag.value,
            id: nanoid(),
        }

        setNotes(prevNotes => [...prevNotes, newNote])
        setTitle('')
        setDescription('')
        setTag('common')
    }

    const DeleteNote = (id) => setNotes(notes.filter((note) => note.id !== id));

    const EditNote = (id) => {

        setIsEditing(true);

        setNotes(notes.map((note) => {
            if (note.id == id) {
                return { ...note, title: 'newnewnew', text: 'hahahahah' }
            }
        }))
    }

    return (
        <>
            <NoteForm
                title={title}
                description={description}
                tag={tag}
                SubmitForm={SubmitForm}
                onTagChange={(e) => { setTag(e.target.value) }}
                onTitleChange={(e) => { setTitle(e.target.value) }}
                onDescrChange={(e) => { setDescription(e.target.value) }} />

            {!notes.length ? null : <NoteList data={notes} onEdit={EditNote} onDelete={DeleteNote} />}
        </>
    )
}