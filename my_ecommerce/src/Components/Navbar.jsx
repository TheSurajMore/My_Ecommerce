import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import { SunIcon, InfoIcon } from '@chakra-ui/icons';
import { BsMoon, BsFillCartPlusFill } from 'react-icons/bs'
import {HiOutlineHome} from 'react-icons/hi'
import {Link as RouteLink,} from 'react-router-dom'
import { useContext } from 'react';
import { AuthenticationContext } from '../Contexts/Authentication';

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Navbar() {
  const {Auth,Logout} = useContext(AuthenticationContext)
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(Auth);

  // const { isOpen, onOpen, onClose } = useDisclosure(); 39 px={5}
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} mr={'2%'} >
          <Box ml={'0.2%'}>Suraj's E-Commerce Project</Box>

          {/* <Box><Heading>Suraj More</Heading></Box> */}

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={3}>
              <Button alignSelf={'center'} onClick={toggleColorMode} px={'-8%'} >   
                {colorMode === 'light' ? <BsMoon size={'25px'}/> : <SunIcon />}
            </Button>
              {/* <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu> */}
              <Box alignSelf={'center'} ><RouteLink to={'/'}><HiOutlineHome size={'30px'}></HiOutlineHome></RouteLink></Box>
              {/* <Box alignSelf={'center'} ><Search2Icon  boxSize={6} ></Search2Icon></Box> */}
              <Box alignSelf={'center'}><RouteLink to={'/Cart'} ><BsFillCartPlusFill size={'30px'} ></BsFillCartPlusFill></RouteLink></Box>
              <Box alignSelf={'center'}><RouteLink to={'/Login'} ><Button onClick={Logout} colorScheme='blue' size='sm' >
                {Auth===false?"Login":"Logout"}
                </Button></RouteLink></Box>
              <Box alignSelf={'center'} color='green' fontWeight={'bold'} ><RouteLink to={'/About'}><InfoIcon boxSize={6} /> About Project</RouteLink></Box> 
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}