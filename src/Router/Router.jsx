import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Dashbord from "../Pages/Dashbord/Dashbord";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRouter";
import EmployeeDetails from "../Components/EmployeeDetails/EmployeeDetails";
import EmployeeList from "../Pages/EmployeeList/EmployeeList";
import Progress from "../Pages/Progress/Progress";
import WorkSheet from "../Components/WorkSheet/WorkSheet";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dashbord',
        element: <PrivateRoute><Dashbord /></PrivateRoute>
      },
      {
        path: '/contactUs',
        element: <ContactUs />
      },

    ]
  },
  {
    path: '/signUp',
    element: <SignUp />
  },
  {
    path: '/signIn',
    element: <SignIn />
  },
  {
    path: '/dashbord',
    element: <PrivateRoute><Dashbord /></PrivateRoute>,
    children: [
      {
        path: '/dashbord/details/:email',
        element: <EmployeeDetails />
      },
      {
        path: '/dashbord',
        element: <EmployeeList />
      },
      {
        path: '/dashbord/progress',
        element: <Progress />
      },
      {
        path: '/dashbord/workSheet',
        element: <WorkSheet />
      },
      {
        path: '/dashbord/paymentHistory',
        element: <PaymentHistory />
      }
    ]
  }
])

export default router;