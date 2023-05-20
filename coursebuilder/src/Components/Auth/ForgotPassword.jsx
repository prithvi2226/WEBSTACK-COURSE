import { Container, Heading, VStack, Input, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
  return (
    <Container paddingY={"14"} h={"90vh"}>
        <form>
            <Heading children="FORGOT YOUR PASSWORD??"
                    my={"14"}
                    textTransform={"uppercase"}
                    textAlign={"center"}/>

            <VStack spacing={"8"}>
                <Text fontFamily={"consolas"} 
                      children = {"TYPE IN YOUR EMAIL"}
                      fontSize={"xl"} />
                <Input required 
                     value={email} 
                     onChange={e => setEmail(e.target.value)} 
                     placeholder='abc@gmail.com'
                     type={'email'}
                     focusBorderColor="purple.500"
                      />
                
                <Button type='button'
                        width={"full"}
                        colorScheme='purple'>
                    
                    SEND RESET LINK

                </Button>
            

            </VStack>
        </form>
    </Container>
  )
}

export default ForgotPassword