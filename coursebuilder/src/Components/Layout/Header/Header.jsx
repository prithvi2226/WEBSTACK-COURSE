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
import { useDispatch } from 'react-redux';
import { logout } from '../../../REDUX/actions/user';
import Helmet from 'react-helmet';


const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link to={url}>
    <Button variant="ghost" onClick={onClose} color={"antiquewhite"}>
      {title}
    </Button>
  </Link>
);


const Header = ({isAuthenticated = false, user}) => {

  const{isOpen, onOpen, onClose} = useDisclosure();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    onClose();
    dispatch(logout());
  }

  return (
    <>

    <Helmet bodyAttributes={{ style: 'background-color : #1A202C' }} />
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
      <DrawerContent bg="#1a202c">
        <DrawerHeader color={"antiquewhite"}>STUDY CONTENT</DrawerHeader>

        <DrawerBody>
        
          <VStack spacing={"4"} alignItems={"flex-start"}>
            <LinkButton url = "/MAIN" title = "HOME" onClose={onClose}/>
            {/* <LinkButton url = "/Leetcode" title = "LEETCODE PRACTICE & OTHERS" onClose={onClose}/>
            <LinkButton url = "/AWS-Guide" title = "AWS ASSOCIATE ARCHITECT GUIDE" onClose={onClose}/>
            <LinkButton url = "/InterviewStudy" title = "INTERVIEW PREP" onClose={onClose}/> */}
            <LinkButton url = "/Contact" title = "FEEDBACK" onClose={onClose}/>
            <LinkButton url = "/Request" title = "REQUEST A COURSE??" onClose={onClose}/>
            <LinkButton url = "/About" title = "ABOUT US" onClose={onClose}/>

            <HStack justifyContent={"space-evenly"}
                    position={"absolute"}
                    bottom={'2rem'}
                    width={"80%"}>
              {isAuthenticated ? (
                <>
                <VStack>
                  <HStack>
                  
                  <LinkButton url = "/Profile" title = "PROFILE" onClose={onClose}></LinkButton>
                  <Button color={"antiquewhite"} variant={'ghost'} onClick={logoutHandler}>
                    <RiLogoutBoxLine />
                    LOGOUT
                    </Button>

                  </HStack>

                  {
                    user && user.role === "admin" && <Link onClick={onClose} to={"/Admin/Dashboard"}>
                      <Button colorScheme="facebook">
                        <RiDashboardFill style={{margin: '3px'}}/> Dashboard
                      </Button>
                    </Link>
                  }

                </VStack>
                </>
              ) : (
                <>
                  <LinkButton url = "/Login" title = "LOG IN" onClose={onClose}>
                  </LinkButton>

                  <LinkButton url = "/register" title="REGISTER" onClose={onClose}>
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
