import { useEffect, useState } from "react"
import useAppContext from "../../hooks/useAppContext"
import { NavLink } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaSquareXmark } from "react-icons/fa6";

const Dashbord = () => {
  const { user, isLoading } = useAppContext()
  const [userData, setUserData] = useState({});
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    const unsubscribe = () => {
      fetch(`http://localhost:5000/users?email=${user?.email}`)
        .then((res) => res.json())
        .then(data => setUserData(data[0]))

      fetch('http://localhost:5000/users')
        .then((res) => res.json())
        .then(data => setAllUsers(data))
    }


    return () => {
      unsubscribe();
    }
  }, [user, isLoading])

  return (
    <div className='min-h-screen mx-5'>

      {userData == {} ? <P>Loading...</P> :
        userData?.userRole === 'hr'
          ?
          <div className="flex mt-2">
            <div className="w-1/4 flex flex-col">
              <NavLink to='/employeeList'>Employee List</NavLink>
              <NavLink to='/progress'>Progress</NavLink>
            </div>
            <div className="w-3/4">
              <table className="w-full border rounded-full">
                <tr className="border-b">
                  <th className="text-start p-1 border">Name</th>
                  <th className="text-start p-1 border">Email</th>
                  <th className="text-start p-1 border">Salary</th>
                  <th className="text-start p-1 border">Bank Account</th>
                  <th className="text-start p-1 border">Verfication</th>
                </tr>
                {
                  allUsers.map((data) => {
                    if (data.userRole === 'hr') {
                      return null;
                    }

                    return (
                      <tr key={data._id}>
                        <td className="text-start p-1 border">{data.name}</td>
                        <td className="text-start p-1 border">{data.email}</td>
                        <td className="text-start p-1 border">{data.salary}</td>
                        <td className="text-start p-1 border">{data.bankAccount}</td>
                        <td className="text-center p-1 border">{data.isVerifyed ?
                          <div className="text-2xl font-semibold text-red-500">
                            <IoIosCheckmarkCircle className="text-3xl text-green-500"></IoIosCheckmarkCircle>
                          </div>
                          : <FaSquareXmark className="text-3xl text-red-500 cursor-pointer" />
                        }</td>
                      </tr>
                    );
                  })
                }

              </table>
            </div>
          </div>
          :
          <div className="flex">
            <div className="w-1/4 flex flex-col">
              <NavLink to='/paymentHistory'>Payment History</NavLink>
              <NavLink to='/workSheet'>Work Sheet</NavLink>
            </div>
            <div className="w-3/4">
              <h1 className="text-3xl font-bold">Your Work Here</h1>
            </div>
          </div>
      }

    </div>
  )
}

export default Dashbord
