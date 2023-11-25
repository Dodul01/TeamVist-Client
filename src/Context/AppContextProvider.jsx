import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth(app)

  // TODO

  // SIGN UP [DONE]
  const signUpUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // SIGN IN 
  const signInUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  // SIGN OUT
  // ON AUTH STATE CHANGE
  // GOOGLE LOGIN 


  const appInfo = {
    signUpUser,
    signInUser
  }


  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoading(false);
          setUser(user);
          console.log(user);
        } else {
          setIsLoading(false)
          console.log('User Not Found');
        }
      })
    }

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AppContext.Provider value={appInfo}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
