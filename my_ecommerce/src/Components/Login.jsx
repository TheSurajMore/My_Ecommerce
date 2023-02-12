import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    useBreakpointValue,
    IconProps,
    Icon,
    useToast,
    AlertDialogOverlay,
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    useDisclosure,
  } from '@chakra-ui/react';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../Contexts/Authentication';
  
  // const avatars = [
  //   {
  //     name: 'Ryan Florence',
  //     url: 'https://bit.ly/ryan-florence',
  //   },
  //   {
  //     name: 'Segun Adebayo',
  //     url: 'https://bit.ly/sage-adebayo',
  //   },
  //   {
  //     name: 'Kent Dodds',
  //     url: 'https://bit.ly/kent-c-dodds',
  //   },
  //   {
  //     name: 'Prosper Otemuyiwa',
  //     url: 'https://bit.ly/prosper-baba',
  //   },
  //   {
  //     name: 'Christian Nwamba',
  //     url: 'https://bit.ly/code-beast',
  //   },
  // ];

// Suraj More  React projects
  
  export default function Login() {
    const {Login} = useContext(AuthenticationContext);
    const [user_ID, setuser_ID] = useState('');
    const [Password, setPassword] = useState('');
    const Toast = () =>{
      toast({
        title: 'Login Successful !',
        description: "Enjoy Buy and Add to Cart 🛒 functionalities!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
    const Navi= useNavigate();
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef();
    const HomeLink = () =>{
      Navi('/')
      console.log('HomeLink')
    }
    const Handleuser_ID = (e) =>{
      setuser_ID(e.target.value);
    }
    console.log(user_ID);
    const HandlePassword = (e) =>{
      setPassword(e.target.value);
    }
    console.log(Password);
    const HandleSubmit = () =>{
      if(user_ID==='Suraj More' && Password==='React project'){
        Login();
        HomeLink();
        Toast();
      }else{
        onOpen();
        /* alert('Please enter the correct Username and Password mentioned in the green section.')*/
      }
    }
    return (
      <Box position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
              <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'gray.800'}
                color={'white'}
                rounded={'full'}
                minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(to-bl, green.400,blue.400)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}>
                IMPORTANT
              </Flex>
              Use only following username{' '}
              <Text
                as={'span'}
                bgGradient="linear(to-r, green.400,blue.400)"
                bgClip="text">
                &
              </Text>{' '}
              password
            </Heading>
            <Box bg={'green'} fontWeight='bold' borderRadius={100}>
              <Text> Username = Suraj More </Text>
              <Text> Password = React project </Text>
            </Box>
            {/* <Stack direction={'row'} spacing={4} align={'center'}> */}
              {/* <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    // size={useBreakpointValue({ base: 'md', md: 'lg' })}
                    position={'relative'}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      bgGradient: 'linear(to-bl, green.400,blue.400)',
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                +
              </Text> */}
              {/* <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'gray.800'}
                color={'white'}
                rounded={'full'}
                minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(to-bl, green.400,blue.400)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}>
                YOU
              </Flex> */}
            {/* </Stack> */}
          </Stack>
          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Login and enjoy "Buy" and "Add to Cart 🛒 " functionalities
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, green.400,blue.400)"
                  bgClip="text">
                  !
                </Text>
              </Heading>
              {/* <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                We’re looking for amazing engineers just like you! Become a part
                of our rockstar engineering team and skyrocket your career!
              </Text> */}
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={4}>
                <Input
                  placeholder="Username"
                  bg={'gray.100'}
                  border={0}
                  color={'Black'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  value={user_ID}
                  onChange={Handleuser_ID}
                />
                <Input
                  type={'password'}
                  placeholder="Password"
                  bg={'gray.100'}
                  border={0}
                  color={'Black'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  value={Password}
                  onChange={HandlePassword}
                />
                {/* <Input
                  placeholder="+1 (___) __-___-___"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                /> */}
                {/* <Button fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}>
                  Upload CV
                </Button> */}
              </Stack>
              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, green.400,blue.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, green.400,blue.400)',
                  boxShadow: 'xl',
                }}
                onClick={HandleSubmit}
                >
                Login
              </Button>
            </Box>
            form
          </Stack>
        </Container>
        <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
        />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold' color={'red'}>
            Login Failed
            </AlertDialogHeader>

            <AlertDialogBody color={'green'} >
            Please enter the correct Username and Password mentioned in the green section.
            </AlertDialogBody>

            <AlertDialogFooter>
              {/* <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button> */}
              <Button colorScheme='red' onClick={onClose} ml={3}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      </Box>
    );
  }
  
  export const Blur = (props: IconProps) => {
    return (
      <Icon
        width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <circle cx="71" cy="61" r="111" fill="green" />
        <circle cx="244" cy="106" r="139" fill="skyblue" />
        <circle cy="291" r="139" fill="green" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="skyblue" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="green.400" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="skyblue" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="green.400" />
      </Icon>
    );
  };