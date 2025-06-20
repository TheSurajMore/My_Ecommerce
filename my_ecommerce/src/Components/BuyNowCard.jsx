import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text, 
    Stack,
    Image,
    HStack,
    Divider,
    Button,
  } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { AuthenticationContext } from '../Contexts/Authentication';
  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function BuyNowCard() {
    const {buyNowProduct} = useContext(AuthenticationContext)
    const [quantity, setQuantity] = useState(1)
    const add = () =>{
      setQuantity(quantity+1)
    }
    const reduce = () =>{
      setQuantity(quantity-1)
    }
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={buyNowProduct.image}
            />
          </Box>
          <Stack>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {buyNowProduct.title}
            </Heading>
            <Stack direction={'row'} align={'center'} alignSelf={'center'} >
              <Text fontWeight={800} fontSize={'xl'}>
                ${buyNowProduct.price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                $1999
              </Text>
              </Stack>
              <Divider height={'2'} />
              <Text>Quantity</Text>
              <HStack alignSelf={'center'} >
              <Button isDisabled={quantity===1} w='40px' h='40px' bg='pink.400' color='white' fontWeight={'extrabold'} fontSize={'larger'} onClick={reduce} >
               -
              </Button>
              <Center w='40px' h='40px' bg='pink.400' color='white'>
                <Box as='span' fontSize='lg' fontWeight={'extrabold'} >
                {quantity}
                </Box>
              </Center>
              <Button isDisabled={quantity===10} w='40px' h='40px' bg='pink.400' color='white' fontWeight={'extrabold'} fontSize={'larger'} onClick={add}>
                +
              </Button>
              </HStack>
              <Text fontWeight={800} fontSize={'xl'} >
               Total Amount= ${buyNowProduct.price*quantity}
              </Text>
          </Stack>
        </Box>
      </Center>
    );
  }