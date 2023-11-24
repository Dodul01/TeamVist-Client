import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Dashbord from "../Pages/Dashbord/Dashbord";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";

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
        element: <Dashbord />
      },
      {
        path: '/contactUs',
        element: <ContactUs />
      }
    ]
  },
  {
    path: '/signUp',
    element: <SignUp />
  },
  {
    path: '/signIn',
    element: <SignIn />
  }
])

export default router;