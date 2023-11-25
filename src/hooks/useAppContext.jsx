import { useContext } from "react"
import { AppContext } from "../Context/AppContextProvider"

const useAppContext = () => {
  const appContext = useContext(AppContext);
  return appContext;
}

export default useAppContext
