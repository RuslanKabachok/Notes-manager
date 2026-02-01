import '../App.css'
import NoteCard from '../NoteCard/NoteCard'

export default function NoteList({ data, onEdit, onDelete }) {
    return (
        < ul className='w-full max-w-3xl space-y-4' >
            {data.map((note) =>
                <NoteCard note={note} key={note.id} onDelete={onDelete} onEdit={onEdit} />
            )}
        </ul >)
}

