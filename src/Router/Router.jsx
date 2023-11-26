import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Dashbord from "../Pages/Dashbord/Dashbord";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRouter";

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