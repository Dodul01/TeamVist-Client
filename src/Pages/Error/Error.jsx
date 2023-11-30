import { useNavigate } from 'react-router-dom';
import ErrorPoster from '../../../public/404.png';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-center flex-col'>
            <img className='h-[80vh]' src={ErrorPoster} alt="error" />
            <button onClick={() => navigate('/')} className='ml-3 text-lg font-medium border-2 border-solid border-[#051d2a] rounded-lg px-3 hover:bg-[#051d2a] hover:text-white transition'>Go Home</button>
        </div>
    )
}

export default Error