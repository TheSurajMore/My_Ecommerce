import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../Contexts/Authentication";
import Address from "./Address";

const BuyNow = () => {
    const nav= useNavigate();
    const {Auth} = useContext(AuthenticationContext);
    
    return(<>
    <Address/>
    </>)
}
export default BuyNow;