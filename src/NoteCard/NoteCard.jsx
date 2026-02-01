import '../App.css'

export default function NoteCard({ note, onEdit, onDelete }) {
    return (
        <li className='bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition'>
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                    {note.title}
                </h3>

                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                    {note.tag}
                </span>
            </div>
            <p className='text-gray-600 leading-relaxed'>{note.text}</p>
            <div className="flex gap-3 justify-end">
                <button
                    onClick={() => onEdit(note.id)}
                    className="px-3 py-1 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                    ✏️ Edit
                </button>

                <button
                    onClick={() => onDelete(note.id)}
                    className="px-3 py-1 text-sm rounded-lg border border-red-300 text-red-600 hover:bg-red-50 transition"
                >
                    🗑 Delete
                </button>
            </div>
        </li>)
}