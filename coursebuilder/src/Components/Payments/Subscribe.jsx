import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { server } from '../../REDUX/store';

const Subscribe = () => {

    const dispatch = useDispatch();
    const [key, setKey] = useState("");

    const subscribeHandler = async()=>{
        const {data} = await axios.get(`${server}/razorpaykey`);
    }

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

                <Button my={"8"} 
                        w={"full"} 
                        variant={"outline"} 
                        colorScheme='purple'
                        onClick={subscribeHandler}>
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