export default function Input({ onChange, value }) {
    const trimmedQuery = value.trim()

    return <>
        <input
            className='px-3 py-1 rounded-2xl border border-black'
            type="search"
            id="noteSearch"
            name="search"
            placeholder="🔍 Пошук нотаток..."
            autoComplete="off"
            aria-label="Фільтрувати нотатки"
            onChange={onChange}
            value={trimmedQuery}
        />
        {trimmedQuery.length > 50 && <p className="text-red-500 text-sm mt-1">Не більше 50 символів</p>}
        {(trimmedQuery.length < 2 && trimmedQuery.length > 0) && <p className="text-red-500 text-sm mt-1">Для пошуку введіть мінімум 2 символи</p>}
    </>

}