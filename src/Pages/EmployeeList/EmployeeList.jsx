import { useEffect, useState } from "react"
import useAppContext from "../../hooks/useAppContext"
import { Link, NavLink } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaSquareXmark } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
import WorkSheet from "../../Components/WorkSheet/WorkSheet";
import toast, { Toaster } from "react-hot-toast";
import Admin from "../Admin/Admin";
import Modal from "../../Components/Modal/Modal";

const EmployeeList = () => {
  const { user, isLoading } = useAppContext()
  const [userData, setUserData] = useState({});
  const [allUsers, setAllUsers] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [loading, setLoading] = useState(true);

  const handleVerify = (data) => {
    fetch(`https://team-vista-server.vercel.app/users?email=${user?.email}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/JSON'
      },
      body: JSON.stringify({ data, isVerifyed: !data.isVerifyed })
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount === 1) {
          toast.success('User verification updated.')
        }
      })
  }

  const handleModal = (data) => {
    setModalData(data);
    setShowModal(true);
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataResponse = await fetch(`https://team-vista-server.vercel.app/users?email=${user?.email}`);
        const userDataJson = await userDataResponse.json();
        setUserData(userDataJson[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }

      try {
        const allUsersResponse = await fetch('https://team-vista-server.vercel.app/users');
        const allUsersJson = await allUsersResponse.json();
        setAllUsers(allUsersJson);
      } catch (error) {
        console.error('Error fetching all users data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, loading, allUsers]);


  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <div className='min-h-screen mx-5'>
      {userData?.userRole === 'hr' && <div className="mt-2">
        <div>
          <h1 className="text-2xl font-semibold my-3 text-center">All Employees</h1>
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
                if (data.userRole === 'admin') {
                  return null;
                }

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
                        <IoIosCheckmarkCircle onClick={() => handleVerify(data)} className="text-3xl text-green-500 cursor-pointer"></IoIosCheckmarkCircle>
                      </div>
                      : <FaSquareXmark onClick={() => handleVerify(data)} className="text-3xl text-red-500 cursor-pointer" />
                    }</td>
                    <td className="flex p-1 border">
                      <button onClick={() => handleModal(data)} className='ml-3 text-base flex items-center font-normal border-2 border-solid rounded-lg p-2 bg-[#051d2a] text-white transition' disabled={!data.isVerifyed}><MdOutlinePayment /> Pay</button>
                      <Link to={`/dashbord/details/${data.email}`} className='ml-3 text-base flex items-center font-normal border-2 border-solid rounded-lg p-2 bg-[#051d2a] text-white transition'><BiSolidUserDetail /> Details</Link>
                    </td>
                  </tr>
                );
              })
            }
          </table>
          {showModal && <Modal showModal={showModal} setShowModal={setShowModal} userData={modalData} />}
        </div>
      </div>}
      {userData?.userRole === 'employee' && <div className="flex">
        <div>
          <WorkSheet />
        </div>
      </div>}
      {userData?.userRole === 'admin' && <Admin data={allUsers} />}
      <Toaster />
    </div>
  )
}

export default EmployeeList
