import { useState, useContext } from "react";
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Image,
  IconButton, 
  useToast,
  AlertIcon,
  Alert,
  Center
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { AuthenticationContext } from "../Contexts/Authentication";
import { useNavigate } from "react-router-dom";
import {Link as RouteLink,} from 'react-router-dom'



// const cartItems = [
//   {
//     id: 1,
//     name: "Chakra UI T-Shirt",
//     price: 25.0,
//     imageUrl: "https://via.placeholder.com/150",
//   },
//   {
//     id: 2,
//     name: "Chakra UI Mug",
//     price: 15.0,
//     imageUrl: "https://via.placeholder.com/150",
//   },
// ];

const Cart = () => {
  const {Auth, cart, setCart} = useContext(AuthenticationContext)
  const [items, setItems] = useState(cart);
  const toast = useToast();
  const navi = useNavigate();

  const handleRemoveItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
    toast({
      title: "Item removed from cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const placed = () =>{
    navi('/OrderPlaced')
    setCart([]);
}

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  return (<>
    {Auth===false?<Center><Box width={'50%'} >
        <Alert mt={'5%'} status='error' ><AlertIcon/>You need to log in to access cart.
        <Box ml={'5%'} alignSelf={'center'}><RouteLink to={'/Login'} ><Button colorScheme='blue' size='sm' >Login</Button></RouteLink></Box>
                </Alert></Box></Center>:
                  cart.length===0?<Center><Box>
                    <Image src="CartIsEmpty.jpg"></Image>
                  </Box></Center> :
    <Center>
    <Box py="4" width={'70%'} >
      {cart.map((item) => (
        <Flex
          key={item.id}
          // bg="white"
          boxShadow="md"
          borderRadius="md"
          p="4"
          mb="4"
        >
          <Image src={item.image} alt={item.title} mr="4" width={'70px'} />
          <Box paddingLeft={'5%'} >
            {/* <Heading as="h2" fontSize="lg" mb="2" width={'100%'} >
              {item.title}
            </Heading> */}
            <Text fontSize="md" >
              ${item.price.toFixed(2)}
            </Text>
            <IconButton
              aria-label="Remove item"
              icon={<AiFillDelete />}
              variant="outline"
              colorScheme="red"
              size="sm"
              mt="2"
              onClick={() => handleRemoveItem(item.id)}
            />
          </Box>
          <Box paddingLeft={'5%'}>
          <Heading as="h2" fontSize="lg" mb="2" >
              {item.title}
            </Heading>
          </Box>
        </Flex>
      ))}
      {items.length === 0 && (
        <Center><Image src="CartIsEmpty.jpg" ></Image></Center>
      )}
      {items.length > 0 && (
        <Box boxShadow="md" borderRadius="md" p="4">
          <Heading as="h2" fontSize="lg" mb="4">
            Total: ${totalPrice.toFixed(2)}
          </Heading>
          <Button colorScheme="blue" onClick={placed} >Checkout</Button>
        </Box>
      )}
    </Box>
    </Center>
}
    </>
  );
};

export default Cart;