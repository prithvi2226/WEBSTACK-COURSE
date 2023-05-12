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


const LinkButton = ({url = '/', title = 'Home'}) => (
  <Link to={url}>
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
  }

  return (
    <>

    <Button 
    onClick={onOpen}
    colorScheme={"gray"} 
    width={"16"} 
    height={"12"}
    position={"fixed"}
    top={"2"}
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
            <LinkButton url = "/" title = "LANDING" />
            <LinkButton url = "/Leetcode" title = "LEETCODE PRACTICE & OTHERS" />
            <LinkButton url = "/AWS-Guide" title = "AWS ASSOCIATE ARCHITECT GUIDE" />
            <LinkButton url = "/InterviewStudy" title = "INTERVIEW PREP" />
            <LinkButton url = "/Feedback" title = "LET ME KNOW" />
            <LinkButton url = "/About" title = "ABOUT US" />

            <HStack justifyContent={"space-evenly"}
                    position={"absolute"}
                    bottom={'2rem'}
                    width={"80%"}>
              {isAuthenticated ? (
                <>
                <VStack>
                  <HStack>
                  
                  <LinkButton url = "/profile" title = "PROFILE"></LinkButton>
                  <Button variant={'ghost'} onClick={logoutHandler}>
                    <RiLogoutBoxLine />
                    LOGOUT
                    </Button>

                  </HStack>

                  {
                    user && user.role === "admin" && <Link to={"/admin/dashboard"}>
                      <Button colorScheme="facebook">
                        <RiDashboardFill style={{margin: '3px'}}/> Dashboard
                      </Button>
                    </Link>
                  }

                </VStack>
                </>
              ) : (
                <>
                  <LinkButton url = "/login" title = "LOG IN">
                  </LinkButton>

                  <LinkButton url = "/register" title="REGISTER">
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