import React, { useContext, } from "react";
import { Navigate, useNavigate,} from "react-router-dom";
import { AuthenticationContext } from "../Contexts/Authentication";
import Address from "./Address";
import {Center, Select, Heading, Divider,Button, ButtonGroup,} from '@chakra-ui/react'
import BuyNowCard from "./BuyNowCard";

const BuyNow = () => {
    const {Auth} = useContext(AuthenticationContext);
    const navi = useNavigate()
    const cancel = () =>{
        navi('/');
    }
    const placed = () =>{
        navi('/OrderPlaced')
    }

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
    <ButtonGroup variant='outline' spacing='6' mb={'2%'}>
  <Button bg={'green'} onClick={placed} >Place Order</Button>
  <Button bg={'red'} onClick={cancel} >Cancel</Button>
</ButtonGroup>
        </>
}
    </>)
}
export default BuyNow;