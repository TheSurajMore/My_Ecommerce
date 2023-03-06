import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    WrapItem,
    AlertDialogOverlay,
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    useDisclosure,
  } from '@chakra-ui/react';
import { useContext, useRef } from 'react';
import {useNavigate} from "react-router-dom"
import { AuthenticationContext } from '../Contexts/Authentication';
  
//  const IMAGE =
//     'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function ProductCard(props) {

    const {IMAGE, title, price, description, category, rate, count, el,} = props;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef();
    const Navi = useNavigate();
    const {Auth, setBuyNowProduct,} = useContext(AuthenticationContext);
    const RedirectLogin = () =>{
        Navi('/Login')
    }
    const BuyNow = () => {
      Navi('/BuyNow')
      setBuyNowProduct(el)
        }
    return (
      <>
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
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
             {category}
            </Text>
            <Stack direction={'row'} align={'center'} bg={rate>4?'green.500':rate<4&&rate>3?'yellow.500':'red.600'} >
              <Text fontWeight={800} fontSize={'xl'}>
              Rating : {rate}/5
              </Text>
              <Text>
                ({count})
              </Text>
            </Stack>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                ${price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                $1999
              </Text>
            </Stack>
            <WrapItem experimental_spaceX={'5%'} >
            <Button colorScheme='whatsapp' onClick={Auth===false?onOpen:BuyNow}>Buy Now</Button>
            {/* <Button colorScheme='cyan'>Add to Cart</Button> */}
            </WrapItem>
            {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {description}
            </Text> */}
          </Stack>
        </Box>
      </Center>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Login Required !
            </AlertDialogHeader>

            <AlertDialogBody>
            Login and enjoy "Buy" and "Add to Cart 🛒 " functionalities
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={onClose&&RedirectLogin} ml={3}>
                Login
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>th
      </AlertDialog>
      </>
    );
  }