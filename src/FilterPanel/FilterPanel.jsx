export default function FilterPanel({ filter, onFilterChange }) {
    return <div className='py-5 mb-10 bg-white rounded-2xl border border-black flex flex-row items-center justify-evenly'>
        <p>Сортувати за категорією:</p>
        <select type="text" id='noteTag' value={filter} onChange={onFilterChange} placeholder='Оберіть категорію нотатки' className='px-3 py-1 rounded-2xl border border-black w-l mb-3' >
            <option value="all">Всі</option>
            <option value="common">Загальні</option>
            <option value="work">Робота</option>
            <option value="personal">Особисте</option>
            <option value="study">Навчання</option>
        </select>
    </div>
}
