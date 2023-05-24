import React from 'react';
import { Link } from 'react-router-dom';
import {Button, 
        Drawer, 
        DrawerBody, 
        DrawerContent, 
        DrawerHeader, 
        DrawerOverlay,
        HStack,
        VStack,
        useDisclosure} from "@chakra-ui/react";
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri";



const LinkButton = ({url = '/', title = 'Home', onClose}) => (
  <Link onClick={onClose}  to={url}>
    <Button variant={'ghost'}>
      {title}
    </Button>

  </Link>

);

const Header = () => {

  const{isOpen, onOpen, onClose} = useDisclosure();

  const isAuthenticated = true;
  
  const user = {
    role: 'admin',
  }

  const logoutHandler = () => {
    console.log("Logout");
    onClose();
  }

  return (
    <>

    <Button 
    onClick={onOpen}
    colorScheme={"gray"} 
    width={"15"} 
    height={"12"}
    position={"fixed"}
    top={"2"}
    zIndex={"overlay"}
    left={"2"}
    >
        <RiMenu5Fill />
    </Button>
    <Drawer placement="left" onClose={onClose} isOpen= {isOpen}>
      <DrawerOverlay backdropFilter={'blur(2px)'} />
      <DrawerContent>
        <DrawerHeader>STUDY CONTENT</DrawerHeader>

        <DrawerBody>
        
          <VStack spacing={"4"} alignItems={"flex-start"}>
            <LinkButton url = "/MAIN" title = "HOME" onClick={onClose}/>
            <LinkButton url = "/Leetcode" title = "LEETCODE PRACTICE & OTHERS" onClick={onClose}/>
            <LinkButton url = "/AWS-Guide" title = "AWS ASSOCIATE ARCHITECT GUIDE" onClick={onClose}/>
            <LinkButton url = "/InterviewStudy" title = "INTERVIEW PREP" onClick={onClose}/>
            <LinkButton url = "/Contact" title = "FEEDBACK" onClick={onClose}/>
            <LinkButton url = "/Request" title = "REQUEST A COURSE??" onClick={onClose}/>
            <LinkButton url = "/About" title = "ABOUT US" onClick={onClose}/>

            <HStack justifyContent={"space-evenly"}
                    position={"absolute"}
                    bottom={'2rem'}
                    width={"80%"}>
              {isAuthenticated ? (
                <>
                <VStack>
                  <HStack>
                  
                  <LinkButton url = "/Profile" title = "PROFILE" onClick={onClose}></LinkButton>
                  <Button variant={'ghost'} onClick={logoutHandler}>
                    <RiLogoutBoxLine />
                    LOGOUT
                    </Button>

                  </HStack>

                  {
                    user && user.role === "admin" && <Link onClick={onClose} to={"/admin/dashboard"}>
                      <Button colorScheme="facebook">
                        <RiDashboardFill style={{margin: '3px'}}/> Dashboard
                      </Button>
                    </Link>
                  }

                </VStack>
                </>
              ) : (
                <>
                  <LinkButton url = "/Login" title = "LOG IN" onClick={onClose}>
                  </LinkButton>

                  <LinkButton url = "/register" title="REGISTER" onClick={onClose}>
                  </LinkButton>
                </>
              )}
            </HStack>
  


          </VStack>          

          

        </DrawerBody>

      </DrawerContent>

    </Drawer>
    </>
    
  )
}

export default Header
