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


const cartItems = [
  {
    id: 1,
    name: "Chakra UI T-Shirt",
    price: 25.0,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Chakra UI Mug",
    price: 15.0,
    imageUrl: "https://via.placeholder.com/150",
  },
];

const Cart = () => {
  const [items, setItems] = useState(cartItems);
  const toast = useToast();
  const {Auth} = useContext(AuthenticationContext)

  const handleRemoveItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
    toast({
      title: "Item removed from cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (<>
    {Auth===false?<Center><Box width={'50%'} >
        <Alert mt={'5%'} status='error' ><AlertIcon/>You need to log in to access cart.</Alert>
                  </Box></Center>:
                  cartItems.length===0?<Center><Box>
                    <Image src="CartIsEmpty.jpg" ></Image>
                  </Box></Center> :
    <Box py="4">
      <Heading as="h1" mb="4">
        Shopping Cart
      </Heading>
      {items.map((item) => (
        <Flex
          key={item.id}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          p="4"
          mb="4"
        >
          <Image src={item.imageUrl} alt={item.name} mr="4" />
          <Box>
            <Heading as="h2" fontSize="lg" mb="2">
              {item.name}
            </Heading>
            <Text fontSize="md" color="gray.600">
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
        </Flex>
      ))}
      {items.length === 0 && (
        <Text fontSize="md" color="gray.600">
          Your cart is empty
        </Text>
      )}
      {items.length > 0 && (
        <Box bg="white" boxShadow="md" borderRadius="md" p="4">
          <Heading as="h2" fontSize="lg" mb="4">
            Total: ${totalPrice.toFixed(2)}
          </Heading>
          <Button colorScheme="blue">Checkout</Button>
        </Box>
      )}
    </Box>
}
    </>
  );
};

export default Cart;