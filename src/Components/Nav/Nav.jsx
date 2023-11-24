import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsMenuButtonWideFill } from "react-icons/bs";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = <>
    <NavLink className='text-lg font-medium mx-1 hover:border-b-2 hover:border-b-[#051d2a] transition' to='/'>Home</NavLink>
    <NavLink className='text-lg font-medium mx-1 hover:border-b-2 hover:border-b-[#051d2a] transition' to='/'>Dashbord</NavLink>
    <NavLink className='text-lg font-medium mx-1 hover:border-b-2 hover:border-b-[#051d2a] transition' to='/'>Contact Us</NavLink>
  </>


  return (
    <div className=''>
      <div className='flex justify-between text-[#051d2a] mx-1 border-b p-4 shadow-sm'>
        <div>
          <h2 className='font-bold text-xl'>TeamVista</h2>
        </div>
        <div className='flex items-center justify-center'>
          <div className='hidden lg:block md:block'>
            {links}
          </div>
          <button className='ml-3 text-lg font-medium border-2 border-solid border-[#051d2a] rounded-lg px-3 hover:bg-[#051d2a] hover:text-white transition'>Sign Up</button>
          <div onClick={() => setIsOpen(!isOpen)}>
            <BsMenuButtonWideFill className='text-2xl m-2 font-[#051d2a] lg:hidden md:hidden block' />
          </div>
        </div>
      </div>


      <div className={`lg:hidden md:hidden bg-white block absolute top-14 ${isOpen ? 'left-0' : 'left-[-100%]'}  w-full h-full transition-all`}>
        <div className='flex flex-col '>
          {links}
        </div>
      </div>
    </div>
  )
}

export default Nav