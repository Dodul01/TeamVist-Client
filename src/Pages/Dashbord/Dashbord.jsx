import { Outlet } from "react-router-dom"
import DashbordNav from "../../Components/DashbordNav/DashbordNav"

const Dashbord = () => {
  return (
    <div className='min-h-screen mx-5'>
      <div className="flex">
        <div className="w-[300px]">
          <DashbordNav />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashbord
