import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Admin = ({ data }) => {
    const [updateRole, setUpdateRole] = useState(false);
    const [firedList, setFiredList] = useState([]);
    const [fired, setFired] = useState(false);


    const handleMakeHR = (user) => {
        fetch(`http://localhost:5000/makeHR?email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/JSON'
            },
            body: JSON.stringify({ user, userRole: 'hr' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('User Role Updated.');
                    setUpdateRole(true)
                }
            })
    }

    const handleFiredUser = (user) => {
        fetch('http://localhost:5000/firedList', {
            method: 'POST',
            headers: {
                'Content-type': 'application/JSON'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success('Fired sucessfully')
                    setFired(true)
                }
            })
    }

    useEffect(() => {
        fetch('http://localhost:5000/firedList')
        .then((res)=> res.json())
        .then(data => setFiredList(data))
    }, [updateRole, fired])

    return (
        <div className='p-2'>
            <table className='w-full'>
                <tr>
                    <th className='border text-start'>Name</th>
                    <th className='border text-start'>Email</th>
                    <th className='border text-start'>Designation</th>
                    <th className='border text-start'>Make HR</th>
                    <th className='border text-start'>Fire</th>
                </tr>
                <tbody>
                    {data.map((user) => {
                        if (user.userRole == 'admin') {
                            return null
                        }

                        if (user.isVerifyed == false) {
                            return null
                        }

                        const isFired = firedList.some((firedUser) => firedUser.email === user.email);

                        return <tr>
                            <td className="text-start p-1 border">{user.name}</td>
                            <td className="text-start p-1 border">{user.email}</td>
                            <td className="text-start p-1 border">{user.userRole == 'hr' ? 'HR' : 'Employee'}</td>
                            <td className="text-start p-1 border">
                                {user.userRole == 'hr' ?
                                    'HR' :
                                    <button onClick={() => handleMakeHR(user)} className='p-1 rounded bg-[black] text-white'>Make HR</button>
                                }

                            </td>
                            <td className='text-start p-1 border'>
                            <td className='text-start p-1 border'>{isFired ? 'Fired' : <button onClick={() => handleFiredUser(user)} className='p-1 rounded bg-black text-white'>Fire</button>}</td>
                                {/* <button onClick={() => handleFiredUser(user)} className='p-1 rounded bg-black text-white'>Fire</button> */}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <Toaster />
        </div>
    )
}

export default Admin