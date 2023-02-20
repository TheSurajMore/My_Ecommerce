import React, { useContext } from "react";
import { Navigate,} from "react-router-dom";
import { AuthenticationContext } from "../Contexts/Authentication";
import Address from "./Address";
import {Box, Select} from '@chakra-ui/react'

const BuyNow = () => {
    const {Auth} = useContext(AuthenticationContext);

    return(<>
        { Auth===false?<Navigate to='/' replace />:
        <>
    <Address/>
    <Select placeholder='Select option' width={'30%'} >
    <option value='option1'>Option 1</option>
    <option value='option2'>Option 2</option>
    </Select>
        </>
}
    </>)
}
export default BuyNow;