import { Heading, Divider, Flex, Spacer, Text, Badge } from "@chakra-ui/react";
import React from "react";
const About = () => {
    return(
     <>
       <p align='left' ><Badge variant='solid' colorScheme='green'  >surajmbusiness@gmail.com</Badge></p>
       <Heading ml={'1%'} align="left" mt={'2%'}>Hello 👋, Welcome to my E-commerce project</Heading>

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
</Flex>
<Divider borderWidth={1} borderColor={'black'} mt={'1%'} />
<Heading align='left' ml={'1%'}  mt={'1%'} as={'h3'} size={'md'} > Step by step procedure to explore all functionalities of this project :</Heading>
<div align='left' >
<Text>1) After landing on this website users can switch between dark and light mode by clicking on moon ☾ icon available in navbar.</Text>
<p>2) User can get all information about this project by clicking on “ⓘ About Project” link available in Navbar.</p>
<p>3) Users can go back to the home page by clicking on the home icon present in the navbar.</p>
</div>
<Divider borderWidth={1} borderColor={'black'} mt={'1%'} />
<Heading as={'h3'} ml='1%' size='md' mt={'1%'} align='left' > Functionalities and their methods of creation :</Heading>
<div align='left' >
<p>1) This complete website is a responsive design = I am using chakra UI library such that its built-in responsiveness is not disturbing.</p> 
<p>2) Users can Switch between dark / light mode from the navbar = I used Navbar from the Chakra UI library which has this dark / light mode functionality.</p>
</div>
<Divider borderWidth={1} borderColor={'black'} mt={'1%'} />
<Heading as={'h3'} ml='1%' size='md' mt={'1%'} align='left' > Dependencies / libraries used in this project :</Heading>
<div align='left' >
<p> 1) Chakra UI </p>
<p> 2) Chakra UI / Icons </p>
<p> 3) React icons </p>
<p> 4) React Router DOM</p>
</div>
<Divider borderWidth={1} borderColor={'black'} mt={'1%'} />
<Heading as={'h3'} ml='1%' size='md' mt={'1%'} align='left' > My Workflow during creation of this project :</Heading>
<div align='left' >
<p> 1) Created My_Ecommerce repository in github. </p>
<p> 2) Clone repository in vs code. </p>
<p> 3) Created My E-Commerce project in github.  </p>
<p> 4) Created first Issue Navbar with following tasks. </p>
    <p>     - My Name,  E-Commerce title,  Login button, ⓘ About Project, Search Icon, Cart Icon. </p>
<p> 5) In My E-Commerce project board in github, Taking first issue Navbar in progress.</p>
<p> 6) Created a new branch "Navbar" in My_Ecommerce repository.</p>
<p> 7) Now starting working on the first issue in Navbar branch. </p>
<p> 8) Installed Chakra UI library. </p>
<p> 9) Installed Chakra UI Icon library.  </p>
<p> 10) Importing navbar template from Chakra UI.</p>
<p> 11) Login button created. </p>
<p> 12) Created about project link. </p>
<p> 13) React icon library Installed and Cart logo added.</p>
<p> 14) Search logo added. </p>
<p> 15) My name and title added. </p>
<p> 16) First issue completed. </p>
<p> 17) React Router DOM installed.</p>
<p> 18) React Router DOM applied.</p>
</div>
<Divider borderWidth={1} borderColor={'black'} mt={'1%'} />
<Heading align='left' ml={'1%'} > Thank you for visiting my project ! </Heading>

    </>)

}

export default About;