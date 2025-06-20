import React from "react";
import {Alert, AlertIcon, AlertTitle, AlertDescription, Button, Divider,} from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () =>{
const nav = useNavigate()
const home = () =>{
  nav('/')
}
    return(
 <>
 <Alert 
  ml={'15%'}
  mt={'10%'}
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
  Thank you for shopping; your order will be delivered shortly.
  </AlertDescription>
  <Divider mt={'2.5%'} width={'50%'} mb={'2.5%'} />
  <Button onClick={home} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
Continue shopping
  </Button>
</Alert>
        </>
    );
}
export default OrderPlaced;