import React from 'react'

const NewsLetter = () => {
  return (
    <div className=' bg-[#051d2a] mx-auto max-w-7xl my-10 p-5 rounded-lg shadow-md'>
      <h2 className='lg:text-3xl md:text-2xl text-xl font-bold text-white text-center my-2'>Subscribe to Our Newsletter for Exclusive Updates and Insights</h2>
      <p className='text-white text-lg max-w-2xl text-center mx-auto mb-6'>Subscribe to our newsletter for the latest in employee management, industry trends, and special offers. Stay connected and stay ahead—subscribe now!</p>
      <div className='flex items-center justify-center mb-2'>
        <input className='max-w-md p-3 w-full rounded-l-lg' type="text" placeholder='Your Email Here' />
        <button className='bg-[#23d16b] font-bold text-white p-3 rounded-r-lg' type='submit'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter