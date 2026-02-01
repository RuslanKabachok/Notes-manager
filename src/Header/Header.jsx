import '../App.css'

export default function Header({ title, onChange, query }) {
    return (
        <div className='py-5 mb-10 bg-white rounded-2xl border border-black flex flex-col items-center'>
            <h1 className='mb-5 text-3xl'>{title}</h1>
            <input
                className='px-3 py-1 rounded-2xl border border-black'
                type="search"
                id="noteSearch"
                name="search"
                placeholder="🔍 Пошук нотаток..."
                autoComplete="off"
                aria-label="Фільтрувати нотатки"
                onChange={onChange}
                value={query}
            />
        </div>
    )
};