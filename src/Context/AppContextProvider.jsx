import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth(app);

  const signUpUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const signInUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () => {
    setIsLoading(true);
    setUser(null)
    return signOut(auth)
  }


  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
  }


  const appInfo = {
    signUpUser,
    signInUser,
    user,
    signOutUser,
    updateUserProfile,
    isLoading,
    setIsLoading,
  }


  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoading(false);
          setUser(user);
        } else {
          console.log('User Not Found');
          setIsLoading(false)
        }
      })
    }

    setIsLoading(false)
    return () => {
      unsubscribe()
    }
  }, [isLoading])

  return (
    <AppContext.Provider value={appInfo}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
