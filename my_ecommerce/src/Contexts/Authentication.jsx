import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

const Authentication = ({children}) => {
    const [Auth, setAuth] = useState(false);
    const Login = () => {
        setAuth(true);
        console.log(Auth)
    }
    const Logout = () => {
        setAuth(false);
        console.log(Auth)
    }
    return <AuthenticationContext.Provider value={{Login, Logout, Auth}} > {children} </AuthenticationContext.Provider>
}

export default Authentication;