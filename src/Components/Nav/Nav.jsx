import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BsMenuButtonWideFill } from "react-icons/bs";
import useAppContext from '../../hooks/useAppContext';
import toast, { Toaster } from 'react-hot-toast';
import brandIcon from '../../../public/brandIcon.png'

const Nav = () => {
  const { user, signOutUser } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  const links = <>
    <NavLink className='text-lg font-medium mx-1 hover:border-b-2 hover:border-b-[#051d2a] transition' to='/'>Home</NavLink>
    <NavLink className='text-lg font-medium mx-1 hover:border-b-2 hover:border-b-[#051d2a] transition' to='/dashbord'>Dashbord</NavLink>
    <NavLink className='text-lg font-medium mx-1 hover:border-b-2 hover:border-b-[#051d2a] transition' to='/contactUs'>Contact Us</NavLink>
  </>

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Sign Out Sucessfull')
        navigate('/signIn')
      })
      .catch(() => {
        toast.error('Can not Sign Out Sucessfully')
      })
  }

  return (
    <div>
      <div className='flex justify-between text-[#051d2a] mx-1 border-b p-4 shadow-sm'>
        <div className='flex items-center gap-2'>
          <img className='h-[20px]' src={brandIcon} alt="" />
          <h2 className='font-bold text-xl'>TeamVista</h2>
        </div>
        <div className='flex items-center justify-center'>
          <div className='hidden lg:block md:block'>
            {links}
          </div>
          <div>
            {
              user && <div className='flex'>
                <p>{user?.displayName}</p>
                <img className='h-[50px] w-[50px] rounded-full object-cover' src={user?.photoURL} alt="" />
              </div>
            }
          </div>
          {
            user ?
              <button onClick={handleSignOut} className='ml-3 text-lg font-medium border-2 border-solid border-[#051d2a] rounded-lg px-3 hover:bg-[#051d2a] hover:text-white transition'>Sign Out</button>
              :
              <Link to='/signUp'>
                <button className='ml-3 text-lg font-medium border-2 border-solid border-[#051d2a] rounded-lg px-3 hover:bg-[#051d2a] hover:text-white transition'>Sign Up</button>
              </Link>
          }
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
      <Toaster />
    </div>
  )
}

export default Nav