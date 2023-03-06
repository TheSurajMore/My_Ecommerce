import React, { useContext } from "react";
import {Alert, AlertIcon, AlertTitle, AlertDescription, Center, Button, Divider, Text,} from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../Contexts/Authentication";

const OrderPlaced = () =>{
const nav = useNavigate()
const home = () =>{
  nav('/')
}
const {buyNowProduct} = useContext(AuthenticationContext)
    return(
 <>
 <Center mt={'10%'} >
 <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='70%'
  width={'70%'}
  borderRadius='50px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
  Order placed !
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
  Thanks for shopping. You will get your <Text bg={'yellow'} >{buyNowProduct.title}</Text> soon.
  </AlertDescription>
  <Divider mt={'5%'} />
  <Button onClick={home} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
Continue shopping
  </Button>
</Alert>
</Center>
        </>
    );
}
export default OrderPlaced;