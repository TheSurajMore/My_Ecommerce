import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export default function Authentication ({children}) {
    const [Auth, setAuth] = useState(false);
    const Login = () => {
        setAuth(true);
    }
    const Logout = () => {
        setAuth(false);
    }
    return <AuthenticationContext.Provider value={{Login, Logout, Auth}} > {children} </AuthenticationContext.Provider>
}