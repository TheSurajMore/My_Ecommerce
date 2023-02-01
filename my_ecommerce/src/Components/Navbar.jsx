import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import { SunIcon, Search2Icon, InfoIcon } from '@chakra-ui/icons';
import {BsFillCartPlusFill, BsMoon,} from 'react-icons/bs'

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
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>My E-Commerce Project</Box>

          <Box><Heading>Suraj More</Heading></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <Button onClick={toggleColorMode}>   
                {colorMode === 'light' ? <BsMoon size={'27px'} /> : <SunIcon/>}
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
              <Search2Icon alignSelf={'center'}></Search2Icon>
              <Link alignSelf={'center'}><BsFillCartPlusFill size={'30px'} ></BsFillCartPlusFill></Link>
              <Button colorScheme='blue' size='sm' alignSelf={'center'}>Login</Button>
              <Link color={'green'} fontWeight='bold' alignSelf={'center'}><InfoIcon alignSelf={'center'} /> About Project</Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}