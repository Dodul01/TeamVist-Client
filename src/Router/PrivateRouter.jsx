import { Navigate } from "react-router-dom";
import useAppContext from "../hooks/useAppContext"


const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAppContext();

    if (isLoading) {
        return <div className="h-screen w-screen">
            <h1 className="text-2xl font-bold text-center">Loading...</h1>
        </div>
    } else if (user) {
        return children
    } else {
        return <Navigate  to="/signUp"/>
    }
}

export default PrivateRoute;