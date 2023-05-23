import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    
    <Container h={"90vh"}
                p={"16"}>
        
        <Heading my={"8"}
                textAlign={'center'}>
            CONGRATULATIONS!!
            You Have The Pro Pack {`;)`}
            
        </Heading>

        <VStack boxShadow={"lg"}
                pb={"16"}
                alignItems={"center"}
                borderRadius={"lg"}>
            
            <Box w={"full"}
                 bg={"purple.400"}
                 p={"4"}
                 css={{borderRadius: "8px 8px 0 0"}}>
                
                <Text textColor={"Black"}
                        fontFamily={"consolas"}>
                    PAYMENT SUCCESS
                </Text>

            </Box>

            <Box p={"4"}>
                <VStack textAlign={"center"}
                        px={"8"}
                        mt={"4"}
                        spacing={"8"}>

                    <Text textColor={"wheat"}
                          fontFamily={"consolas"}>
                        Congratulations, Now you are a pro member
                        Meaning, you will have access to all the learning resources
                        provided by me in the course stack.
                    </Text>

                </VStack>

            </Box>

            <Link to={"/Profile"}>
                <Button variant={"outline"} colorScheme='purple'>
                    GO TO PROFILE
                </Button> 
            </Link>

            <Heading size={"xs"}>
                Reference: xxxxx 
            </Heading>

        </VStack>

    </Container>
  )
}

export default PaymentSuccess