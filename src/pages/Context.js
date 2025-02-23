import React, { createContext, useContext, useState } from 'react'

const MyContext = createContext();

export const MyProvider = ({children}) => {

    const [userProfile, setUserProfile] = useState({
        picture: null,
        name: null,
        email: null
      });

    return (
        <MyContext.Provider value={{userProfile,setUserProfile}}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => useContext(MyContext);