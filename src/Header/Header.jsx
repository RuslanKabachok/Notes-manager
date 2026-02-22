import '../App.css'
import Input from '../InputElement/Input'

export default function Header({ title, onChange, query }) {
    return (
        <div className='py-5 mb-10 bg-white rounded-2xl border border-black flex flex-col items-center'>
            <h1 className='mb-5 text-3xl'>{title}</h1>
            <Input
                onChange={onChange}
                value={query} />
        </div>
    )
};