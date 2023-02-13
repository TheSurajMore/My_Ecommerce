import React, { useContext } from "react";
import { Navigate,} from "react-router-dom";
import { AuthenticationContext } from "../Contexts/Authentication";
import Address from "./Address";

const BuyNow = () => {
    const {Auth} = useContext(AuthenticationContext);

    return(<>
        { Auth===false?<Navigate to='/' replace />:
    <Address/>
}
    </>)
}
export default BuyNow;