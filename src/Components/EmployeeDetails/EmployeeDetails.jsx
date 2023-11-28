import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const EmployeeDetails = () => {
  const [userInfo, setUserInfo] = useState({});
  const { email } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${email}`)
      .then((res) => res.json())
      .then(data => setUserInfo(data[0]))
  }, [email])

  return (
    <div>
      {userInfo == {} ? 'Loading...' :
        <div>
          <div className="flex gap-1 mt-4">
            <div>
              <img className="h-[100px] w-[100px] object-cover" src={userInfo.user_image} alt="user_image" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{userInfo.name} ( {userInfo?.isVerifyed == true ?  <span className="text-green-500">verifyed</span> : <span className="text-red-500">unverifyed</span>} ) </h3>
              <h3 className="text-xl font-semibold">{userInfo.email}</h3>
              <h3 className="text-xl font-semibold">{userInfo.userRole}</h3>
            </div>
          </div>
          <h1></h1>
        </div>
      }
    </div>
  )
}

export default EmployeeDetails