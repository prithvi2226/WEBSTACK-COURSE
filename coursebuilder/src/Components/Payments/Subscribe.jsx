import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <Container h={"90vh"} p={"16"}>
        <Heading children="Welcome" 
                 my={"8"}
                 textAlign={"center"} />
        
        <VStack boxShadow={'lg'}
                alignItems={"stretch"}
                borderRadius={'lg'}
                spacing={"0"}>
            
            <Box bg={"purple.200"}
                p={"4"} 
                css = {{borderRadius: "8px 8px 0 0"}}>
                <Text children={`PRO PACK - $1`}
                      color={"blackAlpha.900"} />
            </Box>

            <Box p={"4"} bg={"blackAlpha.400"}>
                <VStack textAlign={'center'} 
                        px={"8"} 
                        mt={"4"}
                        spacing={"8"}>

                    <Text children={`Get Pro Pack and get access to all the courses`} 
                          textColor={"GrayText"}
                          fontFamily={"consolas"}
                          fontSize={"lg"}
                          />
                    
                    <Heading size={"md"} children={"$1 ONLY"} textColor={"whiteAlpha.700"}/>
                </VStack>

                <Button my={"8"} w={"full"} variant={"outline"} colorScheme='purple'>
                    BUY
                </Button>
            </Box>
{/* 
            <Box bg={"blackAlpha.400"}
                p={"4"}
                css= {{borderRadius: "0 0 8px 8px"}}> 

                
                

            </Box>*/}


        </VStack>

    </Container>
  )
}

export default Subscribe