import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

const Authentication = ({children}) => {
    const [Auth, setAuth] = useState(false);
    const [buyNowProduct, setBuyNowProduct] = useState({})
    const Login = () => {
        setAuth(true);
        console.log("Login function called");
    }

    const Logout = () => {
        setAuth(false);
        console.log("Logout function called");
    }
    return <AuthenticationContext.Provider value={{Login, Logout, Auth, buyNowProduct, setBuyNowProduct}} > {children} </AuthenticationContext.Provider>
}

export default Authentication;