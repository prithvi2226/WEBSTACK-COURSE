import {Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    
    <Container h={"90vh"}
                p={"16"}>
        
        <Heading my={"8"}
                textAlign={'center'} 
                color={"antiquewhite"}>
            PAGE NOT FOUND {`:(`}
            
        </Heading>

        <VStack>
            <Link to={"/Main"}>
                    <Button variant={"outline"} colorScheme='purple'>
                        GO TO HOME
                    </Button> 
                </Link>
        </VStack>

        

    </Container>
  )
}


export default NotFound