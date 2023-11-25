import manageTaskImg from '../../assets/Images/manage-task.png';
import quickPayImg from '../../assets/Images/quick-payment.png';
import trackWorkImg from '../../assets/Images/track-work.png';
import salaryPayImg from '../../assets/Images/salary-payment.png';

const OurService = () => {
  return (
    <div>
      <h3 className='text-2xl font-semibold mx-5 text-[#051d2a]'>Our Service</h3>
      <p className='text-lg text-gray-500 mx-5'>Elevating Employee Management for Seamless Success</p>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-1 m-5 '>
        <div className='m-1 p-2 flex items-center justify-center flex-col rounded-lg shadow-lg border'>
          <img className='h-[200px]' src={manageTaskImg} alt="" />
          <h4 className='text-xl font-medium'>WorkforcePro Suite</h4>
        </div>
        <div className='m-1 p-2 flex items-center justify-center flex-col rounded-lg shadow-lg border'>
          <div>
            <img className='h-[200px]' src={quickPayImg} alt="" />
            <h4 className='text-xl font-medium'>EmployeeMaster Connect</h4>
          </div>
        </div>
        <div className='m-1 p-2 flex items-center justify-center flex-col rounded-lg shadow-lg border'>
          <div>
            <img className='h-[200px]' src={trackWorkImg} alt="" />
            <h4 className='text-xl font-medium'>TeamSync Central</h4>
          </div>
        </div>
        <div className='m-1 p-2 flex items-center justify-center flex-col rounded-lg shadow-lg border'>
          <div>
            <img className='h-[200px]' src={salaryPayImg} alt="" />
            <h4 className='text-xl font-medium'>EmployeeMaster Connect</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurService
