import React from 'react'
import toast from 'react-hot-toast'

const ContactUs = () => {

  const handleText = (e) => {
    e.preventDefault()
    if (e.target.name.value && e.target.email.value && e.target.text.value) {
      toast.success('Thanks you for ccontacting with us we will reach you soon.')
      e.target.reset()
    } else {
      toast.error('Please fill all information.')
    }
  }

  return (
    <div>
      <h1 className='text-xl font-semibold text-center'>Contact Us</h1>
      <form onSubmit={handleText} className='flex items-center flex-col max-w-xl mx-auto'>
        <input name='name' className='border w-full p-2 m-2' placeholder='Your Name' type="name" />
        <input name='email' className='border w-full p-2 m-2' placeholder='Your Email' type="email" />
        <textarea name='text' className='border w-full p-2 m-2' placeholder='Message' cols="5" rows="5"></textarea>
        <button className='ml-3 text-lg font-medium border-2 border-solid border-[#051d2a] rounded-lg px-3 hover:bg-[#051d2a] hover:text-white transition w-[90%]'>Send Text</button>
      </form>

      <div className='m-2'>
        <address>
          <h3 className='text-xl font-bold mb-2'>Our Address</h3>
          <p className='text-lg font-semibold'>Street:	4983 S Orange Ave</p>
          <p className='text-lg font-semibold'>City/Town:	Orlando</p>
          <p className='text-lg font-semibold'>State/Province/Region:	Florida</p>
          <p className='text-lg font-semibold'>Zip/Postal Code:	32806</p>
          <p className='text-lg font-semibold'>Phone Number:	+(407) 857-8873</p>
          <p className='text-lg font-semibold'>Country:	United States(US)</p>
        </address>
      </div>
    </div>
  )
}

export default ContactUs
