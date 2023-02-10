import React, { useContext } from "react";
import { AuthenticationContext } from "../Contexts/Authentication";

const Cart = () => {
    const {Auth} = useContext(AuthenticationContext)
    return(<>
    {Auth===false?'Alert':
    'Cart'
}
    </>)
}

export default Cart;