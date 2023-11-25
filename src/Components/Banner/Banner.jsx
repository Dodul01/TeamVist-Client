import { Link } from 'react-router-dom';
import bannerImage from '../../assets/Images/bannerImg.png';

const Banner = () => {
  return (
    <div className='flex items-center justify-center min-h-[60vh] mt-3 lg:flex-row md:flex-col-reverse flex-col-reverse'>
      <div className='p-1'>
        <h2 className="lg:text-4xl md:text-3xl font-semibold text-2xl text-[#051d2a] mb-2">More Efficient Employee <br /> Management For Your Company</h2>
        <p className='max-w-lg mb-2 text-gray-500'>Revolutionize Your Workplace Dynamics with our Advanced Employee Management Solutions. From Streamlined HR Processes to Enhanced Productivity, Experience a New Era of Efficiency for Your Company</p>
        <Link to="/signUp" className="text-lg font-medium border-2 border-solid border-[#051d2a] rounded-lg px-3 hover:bg-[#051d2a] hover:text-white transition">Join Now</Link>
        <Link to="/contactUs" className="ml-3 text-lg font-medium border-2 border-solid border-[#051d2a] rounded-lg px-3 hover:bg-[#051d2a] hover:text-white transition">Contact Us</Link>
      </div>
      <div>
        <img className='lg:h-[350px] h-[200px] w-[100vw] lg:w-auto object-cover' src={bannerImage} alt="" />
      </div>
    </div>
  )
}

export default Banner
