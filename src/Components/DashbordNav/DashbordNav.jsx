import React, { useEffect, useState } from 'react'
import useAppContext from '../../hooks/useAppContext';
import { NavLink, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const DashbordNav = () => {
    const { user, isLoading } = useAppContext()
    const [userData, setUserData] = useState({});
    const { signOutUser } = useAppContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('Sign Out Sucessfull')
                navigate('/signIn')
            })
            .catch((error) => {
                toast.error('Can not Sign Out Sucessfully')
            })
    }

    useEffect(() => {
        fetch(`https://team-vista-server.vercel.app/users?email=${user?.email}`)
            .then((res) => res.json())
            .then(data => setUserData(data[0]))

        if (userData?.userRole) {
            setLoading(false);
        }
    }, [isLoading, userData?.userRole])



    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className='flex gap-3 my-2 border-b pb-2'>
                <img className='h-[100px] w-[100px] object-cover' src={userData?.user_image} alt="" />
                <div>
                    <h3 className='font-semibold text-lg'>{userData?.name}</h3>
                    <h3 className='font-semibold text-lg'>{userData?.email}</h3>
                    <h3 className='font-semibold text-lg'>{userData?.userRole}</h3>
                    <button className='mt-3 text-lg font-medium border-2 border-solid rounded-lg p-1 bg-[#051d2a] text-white transition' onClick={handleSignOut}>Sign Out</button>
                </div>
            </div>

            {userData?.userRole === 'hr' && <div className="flex p-1 mt-2">
                <div className="w-[300px] flex flex-col">
                    {/* hr nav bar */}
                    <NavLink className='text-lg font-medium' to='/dashbord'>Employee List</NavLink>
                    <NavLink className='text-lg font-medium' to='/dashbord/progress'>Progress</NavLink>
                </div>
            </div>}
            {userData?.userRole === 'employee' && <div className=" flex p-1">
                <div className="w-[300px] flex flex-col">
                    {/* Employee Nav Link */}
                    <NavLink className='text-lg font-medium' to='/dashbord/paymentHistory'>Payment History</NavLink>
                    <NavLink className='text-lg font-medium' to='/dashbord/workSheet'>Work Sheet</NavLink>
                </div>
            </div>}
            {userData?.userRole === 'admin' && <div className="flex p-1">
                <div className="w-[300px] flex flex-col">
                    {/* admin Nav Link */}
                    <NavLink className='text-lg font-medium' to='/dashbord' >All Users</NavLink>
                </div>
            </div>}

            {userData == {} ? <P>Loading...</P> : ''
                // userData?.userRole === 'hr'
                //     ?
                //     <div className="flex mt-2">
                //         <div className="w-[300px] flex flex-col">
                //             {/* hr nav bar */}
                //             <NavLink className='text-lg font-medium' to='/dashbord'>Employee List</NavLink>
                //             <NavLink className='text-lg font-medium' to='/dashbord/progress'>Progress</NavLink>
                //         </div>
                //     </div>
                //     :
                //     <div className="flex">
                //         <div className="w-[300px] flex flex-col">
                //             {/* Employee Nav Link */}
                //             <NavLink className='text-lg font-medium' to='/dashbord/paymentHistory'>Payment History</NavLink>
                //             <NavLink className='text-lg font-medium' to='/dashbord/workSheet'>Work Sheet</NavLink>
                //         </div>
                //     </div>
            }
            <Toaster />
        </div>
    )
}

export default DashbordNav