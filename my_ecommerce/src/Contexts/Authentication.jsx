import React, { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthenticationContext = createContext();

const Authentication = ({children}) => {
    const [Auth, setAuth] = useState(false);
    const Login = () => {
        <Navigate to='/' />
        setAuth(true);
        console.log(Auth);
    }

    const Logout = () => {
        setAuth(false);
        console.log(Auth);
        <Navigate to='/' />
    }
    return <AuthenticationContext.Provider value={{Login, Logout, Auth}} > {children} </AuthenticationContext.Provider>
}

export default Authentication;