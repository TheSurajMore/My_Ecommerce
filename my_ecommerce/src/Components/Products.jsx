import React, { useEffect, useState } from "react";
import axios from "axios";
import {Alert, AlertIcon, Grid, GridItem, Box, Center, Stack, Spinner} from '@chakra-ui/react'
import ProductCard from "./ProductCard";

const Products = () => {
    
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = () =>{
  axios.get('https://fakestoreapi.com/products')
  .then(function (response) { 
    // handle success
    console.log(response.data);
    setData(response.data);
    setLoading(false)
  })
  .catch(function (error) {
    // handle error
    setData(0)
    console.log(error);
    setLoading(false)
  })
}

    useEffect(()=>{
        getData()
    },[])

    return(<>{ loading===true?<Center> <Stack align={'center'} mt={'5%'} direction='row' spacing={4}>
    <Spinner size='xs' />
    <Spinner size='sm' />
    <Spinner size='md' />
    <Spinner size='lg' />
    <Spinner size='xl' />
  </Stack> </Center>
  :
  data===0?<Center><Box width={'50%'}>
               <Alert mt={'5%'} status='success' ><AlertIcon/>Everything is looking good in the project.</Alert>
               <Alert status='error' ><AlertIcon/>but the problem is from the backend.</Alert>
               <Alert status="loading" ><AlertIcon/>Try after some time. </Alert>
               </Box></Center>
               :
            <Grid templateColumns={{ base:'repeat(1, 1fr)', sm:'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg:'repeat(3, 1fr)', xl:'repeat(4, 1fr)' }} gap={6}>
    {data && data.map((el)=>(
        <GridItem w='100%' key={el.id} >
            <ProductCard IMAGE={el.image} title={el.title} price={el.price} description={el.description} category={el.category}
             rate={el.rating.rate} count={el.rating.count} el={el} />
        </GridItem>
    ))}
              </Grid>
}
 </>)
}

export default Products;