import googleImg from '../../assets/Images/google.png';
import amazoneImg from '../../assets/Images/amazone.png';
import soptifyImg from '../../assets/Images/spotify.png';
import metaImg from '../../assets/Images/meta.png';

const TrusteUs = () => {
  return (
    <div>
      <h4 className='text-center font-medium text-lg mt-5 text-gray-500'>Join over 1000+ company's arround the world that <br /> trust the TeamVista</h4>
      <div className='flex items-center justify-center'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-6'>
          <img className='h-[100px] w-[180px] object-contain' src={googleImg} alt="" />
          <img className='h-[100px] w-[180px] object-contain' src={metaImg} alt="" />
          <img className='h-[100px] w-[180px] object-contain' src={amazoneImg} alt="" />
          <img className='h-[100px] w-[180px] object-contain' src={soptifyImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default TrusteUs
