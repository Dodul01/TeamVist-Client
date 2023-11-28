import { useEffect, useState } from "react"
import useAppContext from "../../hooks/useAppContext"
import { Link, NavLink } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaSquareXmark } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";

const EmployeeList = () => {
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
          <div className="mt-2">
            <div>
              <table className="w-full border rounded-full">
                <tr className="border-b">
                  <th className="text-start p-1 border">Name</th>
                  <th className="text-start p-1 border">Email</th>
                  <th className="text-start p-1 border">Salary</th>
                  <th className="text-start p-1 border">Bank Account</th>
                  <th className="text-start p-1 border">Verfication</th>
                  <th className="text-start p-1 border">Action</th>
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
                            <IoIosCheckmarkCircle onClick={() => alert(data.name + ' clicked on button')} className="text-3xl text-green-500"></IoIosCheckmarkCircle>
                          </div>
                          : <FaSquareXmark onClick={() => alert('you clicked on ' + data.name + ' button')} className="text-3xl text-red-500 cursor-pointer" />
                        }</td>
                        <td className="flex p-1 border">
                          <button className='ml-3 text-base flex items-center font-normal border-2 border-solid rounded-lg p-2 bg-[#051d2a] text-white transition'><MdOutlinePayment /> Pay</button>
                          <Link to={`/dashbord/details/${data.email}`}  className='ml-3 text-base flex items-center font-normal border-2 border-solid rounded-lg p-2 bg-[#051d2a] text-white transition'><BiSolidUserDetail /> Details</Link>
                        </td>
                      </tr>
                    );
                  })
                }
                
              </table>
            </div>
          </div>
          :
          <div className="flex">
            {/* <div className="w-1/4 flex flex-col">
              <NavLink to='/paymentHistory'>Payment History</NavLink>
              <NavLink to='/workSheet'>Work Sheet</NavLink>
            </div> */}
            <div className="w-3/4">
              <h1 className="text-3xl font-bold">Your Work Here</h1>
            </div>
          </div>
      }

    </div>
  )
}

export default EmployeeList
