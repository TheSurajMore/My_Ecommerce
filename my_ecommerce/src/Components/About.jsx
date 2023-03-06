import { Heading, Divider, Flex, Spacer, Text, Badge,} from "@chakra-ui/react";
import React from "react";
const About = () => {
    return(
     <>
       <p align='left' ><Badge variant='solid' colorScheme='green'  >surajmbusiness@gmail.com</Badge></p>
       <Heading ml={'1%'} align="left" mt={'2%'}>Hello 👋, Welcome to my E-commerce project !</Heading>

      <Divider borderWidth={1} borderColor={'black'} mt={'1%'} />

      < Heading ml={'1%'} as={'h3'} size='md' mt={'1%'} align="left">Technologies and Tools used in this project :</Heading>
<Flex mt={'1%'} align={'center'} >
   <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML" width="40" height="40"/> </a> 
   <Spacer/>
   <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS" width="40" height="40"/> </a> 
   <Spacer/>
   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40"/> </a> 
   <Spacer/>
   <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="40" height="40"/> </a> 
   <Spacer/>
   <a href="https://chakra-ui.com/getting-started" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true" alt="Chakra UI" width="80" height="50"/> </a> 
   <Spacer/>
   <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noreferrer"> <img src="https://static.javatpoint.com/tutorial/reactjs/images/react-icons.png" alt="React-Icon" width="90" height="50"/> </a> 
   <Spacer/>
   <a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer"> <img src="https://miro.medium.com/max/1200/1*sX8rBJBol5dBp5WIJQrYyw.png" alt="React Router" width="90" height="50"/> </a> 
   <Spacer/>
   <a href="https://axios-http.com/docs/intro" target="_blank" rel="noreferrer"> <img src="https://camo.githubusercontent.com/272811d860f3fab0dd8ff0690e2ca36afbf0c96ad44100b8d42dfdce8511679b/68747470733a2f2f6178696f732d687474702e636f6d2f6173736574732f6c6f676f2e737667" alt="Axios" width="90" height="50"/> </a> 
   <Spacer/>
   <a href="https://fakestoreapi.com/" target="_blank" rel="noreferrer"> <img src="https://fakestoreapi.com/icons/logo.png" alt="Fake Store API" width="40" height="50"/> </a> 
</Flex>
{/* <Divider borderWidth={1} borderColor={'black'} mt={'1%'} />
<Heading align='left' ml={'1%'}  mt={'1%'} as={'h3'} size={'md'} > Step-by-step procedure to explore all functionalities of this project :</Heading>
<div align='left' >
<Text>1) After landing on this website users can switch between dark and light modes by clicking on the moon ☾ icon available in the navbar.</Text>
<p>2) Users can get all information about this project by clicking on the “ⓘ About Project” link available in Navbar.</p>
<p>3) Anytime user can go back to the home page by clicking on the home icon present in the navbar.</p>
<p>4) Below Navbar, we can see the products available to purchase.</p>
<p>5) User can go to the login page using the login button available in the navbar.</p>
<p>6) Without login users can see products available to purchase but the user cant buy or add to the cart any product without login. </p>
</div> */}
<Divider borderWidth={1} borderColor={'black'} mt={'1%'} />
{/* <Heading as={'h3'} ml='1%' size='md' mt={'1%'} align='left' > Functionalities and their methods of creation :</Heading>
<div align='left' >
<p>1) This complete website is a responsive design =  I added responsiveness to this website by using chakra UI.</p> 
<p>2) Users can Switch between dark/light mode from the navbar = I used Navbar from the Chakra UI library which has this dark/light mode functionality.</p>
<Text>3) Products are available on the home page for buy or add to cart = All products are mapped on the home page from a dummy database <Link color={'blue'} href="https://fakestoreapi.com/" >Fake Store API</Link>.</Text>
</div>
<Divider borderWidth={1} borderColor={'black'} mt={'1%'} /> */}
<Heading as={'h3'} ml='1%' size='md' mt={'1%'} align='left' > Dependencies/libraries used in this project :</Heading>
<div align='left' >
<p> 1) Chakra UI </p>
<p> 2) Chakra UI / Icons </p>
<p> 3) React icons </p>
<p> 4) React Router DOM</p>
<p> 5) Axios </p>
</div>
<Divider borderWidth={1} borderColor={'black'} mt={'1%'} />
<Text mt={'1%'} >70% to 80% project is done. Cart and some other functionalities are in progress. </Text>
<Divider borderWidth={1} borderColor={'black'} mt={'1%'} />
<Heading ml={'1%'} align="left" mt={'2%'} >I have worked on this project in a very professional manner by using GitHub branches, issues, and tasks.</Heading>
<Divider borderWidth={1} borderColor={'black'} mt={'1%'} />
<Heading as={'h3'} ml='1%' size='md' mt={'1%'} align='left' >GitHub Branches : </Heading>
<div align='left'>
<p>1) Main</p> 
<p>2) Navbar</p>
<p>3) Landing Page</p> 
<p>4) Authentication</p>
</div>
<Divider borderWidth={1} borderColor={'black'} mt={'1%'} />
<Heading as={'h3'} ml='1%' size='md' mt={'1%'} align='left' >Issue and Task created and completed on GitHub.</Heading>
<div align='left'>
<p>1)Navbar issue with following tasks.</p>
             <p>- [ ] My Name,</p> 
             <p>- [ ] E-Commerce title,</p> 
             <p>- [ ] Login button, </p>
             <p>- [ ] ⓘ About Project, </p>
             <p>- [ ] Search Icon, </p>
             <p>- [ ] Cart Icon.</p>
<p>2) Landing Page issue with following tasks.</p>
             <p>- [ ] Append Products</p>
             <p>- [ ] Add Buttons</p> 
<p>3) Authentication issue with following tasks.</p>
             <p>- [ ]  Login Page Layout Only</p>
             <p>- [ ]  Initial Authentication Status Only</p>
             <p>- [ ] Toggle Login Button</p>
             <p>- [ ] Toggle Buy / Add to cart Buttons</p>
             <p>- [ ] Toggle Cart Page</p>
             <p>- [ ] Login Page Functionality</p>
             <p>- [ ] Alert on wrong user information</p>
             <p>- [ ] Notification on login successful</p>

</div>
<Divider borderWidth={1} borderColor={'black'} mt={'1%'} />
{/* <Heading as={'h3'} ml='1%' size='md' mt={'1%'} align='left' > My Workflow during the creation of this project :</Heading>
<div align='left' >
<p> 1) Created My_Ecommerce repository in GitHub. </p>
<p> 2) Cloned repository in vs code. </p>
<p> 3) Created My E-Commerce project in GitHub.  </p>
<p> 4) Created the first Issue Navbar with the following tasks. </p>
    <p>     - My Name,  E-Commerce title,  Login button, ⓘ About Project, Search Icon, Cart Icon. </p>
<p> 5) In My E-Commerce project board in GitHub, Took the first issue Navbar in progress.</p>
<p> 6) Created a new branch "Navbar" in the My_Ecommerce repository.</p>
<p> 7) Now started working on the first issue in the Navbar branch. </p>
<p> 8) Installed Chakra UI library. </p>
<p> 9) Installed Chakra UI Icon library.  </p>
<p> 10) Importing navbar template from Chakra UI.</p>
<p> 11) Login button created. </p>
<p> 12) Created about project link. </p>
<p> 13) React icon library Installed and Cart logo added.</p>
<p> 14) Search logo added. </p>
<p> 15) My name and title were added. </p>
<p> 16) First issue is completed.  </p>
<p> 17) React Router DOM installed.</p>
<p> 18) React Router DOM applied.</p>
<p> 19) React router applied.</p>
<p> 20) Creating the Landing Page branch in GitHub and started working on it.</p>
<p> 21) Axios installed</p> 
<p> 22) Mapped all products on the home screen using Fake Store API. </p>
<p> 23) Buy now and add to cart buttons were added. </p>
</div>
<Divider borderWidth={1} borderColor={'black'} mt={'1%'} /> */}
<Heading align='left' ml={'1%'} >  Thank you for visiting my project !  </Heading>

    </>)

}

export default About;