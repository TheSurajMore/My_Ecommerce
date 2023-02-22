import React, { useContext } from "react";
import { Navigate,} from "react-router-dom";
import { AuthenticationContext } from "../Contexts/Authentication";
import Address from "./Address";
import {Center, Select, Heading, Divider,} from '@chakra-ui/react'
import BuyNowCard from "./BuyNowCard";

const BuyNow = () => {
    const {Auth} = useContext(AuthenticationContext);

    return(<>
        { Auth===false?<Navigate to='/' replace />:
        <>
    <Address/>
    <Divider mt={'2%'} />
    <Center mt={'3%'} >
    <Heading size={'md'} mr={'1%'} >Payment Options</Heading>
    <Select placeholder='Cash on Delivery (COD)' width={'30%'} >
    <option value='option2'>Debit Card</option>
    <option value='option2'>Digital Wallets</option>
    <option value='option2'>Credit Cards</option>
    </Select>
    </Center>
    <Divider mt={'2%'} />
    <BuyNowCard/>
        </>
}
    </>)
}
export default BuyNow;