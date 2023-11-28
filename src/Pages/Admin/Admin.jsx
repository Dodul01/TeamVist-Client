import React from 'react'

const Admin = ({ data }) => {

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
                        if (user.isVerifyed == false) {
                            return null
                        }
                        return <tr>
                            <td className="text-start p-1 border">{user.name}</td>
                            <td className="text-start p-1 border">{user.email}</td>
                            <td className="text-start p-1 border">{user.userRole =='hr'? 'HR': 'Employee'}</td>
                            <td className="text-start p-1 border">
                                <button className='p-1 rounded bg-[black] text-white'>Make HR</button>
                            </td>
                            <td className='text-start p-1 border'>
                                <button className='p-1 rounded bg-black text-white'>Fire</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Admin