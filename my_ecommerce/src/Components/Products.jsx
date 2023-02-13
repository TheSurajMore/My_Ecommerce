import React, { useEffect, useState } from "react";
import axios from "axios";
import {Grid, GridItem,} from '@chakra-ui/react'
import ProductCard from "./ProductCard";

const Products = () => {
    
    const [data, setData] = useState([]);

    const getData = () =>{
  axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    // handle success
    console.log(response.data);
    setData(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

    useEffect(()=>{
        getData()
    },[])

    return(<>
            {/* <Grid templateColumns='repeat(4, 1fr)' gap={6}> */}
            <Grid templateColumns={{ base:'repeat(1, 1fr)', sm:'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg:'repeat(3, 1fr)', xl:'repeat(4, 1fr)' }} gap={6}>
    {data && data.map((el)=>(
        <GridItem w='100%' key={el.id} >
            <ProductCard IMAGE={el.image} title={el.title} price={el.price} description={el.description} category={el.category}
             rate={el.rating.rate} count={el.rating.count} />
        </GridItem>
    ))}
          </Grid>
    </>)
}

export default Products;