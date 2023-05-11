import React from 'react';
import {Button} from "@chakra-ui/react";
import {RiMenu5Fill} from "react-icons/ri"


const Header = () => {
  return (
    <>
    <Button 
    colorScheme={"gray"} 
    width={"16"} 
    height={"12"}
    position={"fixed"}
    top={"2"}
    left={"2"}
    >
        <RiMenu5Fill />
    </Button>
    </>
    
  )
}

export default Header