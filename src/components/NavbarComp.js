import React from 'react'
import {Navbar,Nav,NavDropdown ,FormControl,Button,Form} from 'react-bootstrap'


import { StickyContainer, Sticky } from 'react-sticky';
const NavbarComp = () => {
  return (
    <div>
 <StickyContainer>
<Navbar bg="dark" expand="sm" variant='dark'>
  <Navbar.Brand href="#home"><h4>Rockspro</h4></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>
  </Navbar.Collapse>

</Navbar>
</StickyContainer>
    </div>
  )
}

export default NavbarComp


// import { useState } from 'react'
// import {
//   useColorMode,
//   Switch,
//   Flex,
//   Button,
//   IconButton
// } from '@chakra-ui/react'
// // import { Link } from '@chakra-ui/react'

// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
// // import NextLink from 'next/link'


// export const NavbarComp = () => {
//   const { colorMode, toggleColorMode } = useColorMode()
//   const isDark = colorMode === 'dark'
//   const [display, changeDisplay] = useState('none')
//   return (
//     <Flex>
//       <Flex
//         position="fixed"
//         top="1rem"
//         right="1rem"
//         align="center"
//       >
//         {/* Desktop */}
//         <Flex
//           display={['none', 'none', 'flex','flex']}
//         >
          
//             <Button
//               as="a"
//               variant="ghost"
//               aria-label="Home"
//               my={5}
//               w="100%"
//             >
//               Home
//                     </Button>
         

          
//             <Button
//               as="a"
//               variant="ghost"
//               aria-label="About"
//               my={5}
//               w="100%"
//             >
//               About
//                     </Button>
          

        
//             <Button
//               as="a"
//               variant="ghost"
//               aria-label="Contact"
//               my={5}
//               w="100%"
//             >
//               Contact
//                     </Button>
         
//         </Flex>

//         {/* Mobile */}
//         <IconButton
//           aria-label="Open Menu"
//           size="lg"
//           mr={2}
//           icon={
//             <HamburgerIcon />
//           }
//           onClick={() => changeDisplay('flex')}
//           display={['flex', 'flex', 'none', 'none']}
//         />
//         <Switch
//           color="green"
//           isChecked={isDark}
//           onChange={toggleColorMode}
//         />
//       </Flex>

//       {/* Mobile Content */}
//       <Flex
//         w='100vw'
//         display={display}
//         bgColor="gray.50"
//         zIndex={20}
//         h="100vh"
//         pos="fixed"
//         top="0"
//         left="0"
//         // zIndex={20}
//         overflowY="auto"
//         flexDir="column"
//       >
//         <Flex justify="flex-end">
//           <IconButton
//             mt={2}
//             mr={2}
//             aria-label="Open Menu"
//             size="lg"
//             icon={
//               <CloseIcon />
//             }
//             onClick={() => changeDisplay('none')}
//           />
//         </Flex>

//         <Flex
//           flexDir="column"
//           align="center"
//         >

//             <Button
//               as="a"
//               variant="ghost"
//               aria-label="Home"
//               my={5}
//               w="100%"
//             >
//               Home
//                     </Button>
          
          
//             <Button
//               as="a"
//               variant="ghost"
//               aria-label="About"
//               my={5}
//               w="100%"
//             >
//               About
//                     </Button>
        

         
//             <Button
//               as="a"
//               variant="ghost"
//               aria-label="Contact"
//               my={5}
//               w="100%"
//             >
//               Contact
//             </Button>
          
//         </Flex>
//       </Flex>
//     </Flex>
//   )
// }

