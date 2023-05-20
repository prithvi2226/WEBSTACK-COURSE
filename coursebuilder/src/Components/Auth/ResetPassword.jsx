import { Container, Heading, VStack, Input, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const params = useParams();

  return (
    <Container paddingY={"14"} h={"90vh"}>
        <form>
            <Heading children="RESET YOUR PASSWORD"
                    my={"14"}
                    textTransform={"uppercase"}
                    textAlign={"center"}/>

            <VStack spacing={"8"}>
                <Text fontFamily={"consolas"} 
                      children = {"TYPE IN YOUR EMAIL"}
                      fontSize={"xl"} />
                <Input required 
                     value={password} 
                     onChange={e => setPassword(e.target.value)} 
                     placeholder='Enter your New Password'
                     type={'password'}
                     focusBorderColor="purple.500"
                      />
                
                <Button type='button'
                        width={"full"}
                        colorScheme='purple'>
                    
                    UPDATE PASSWORD

                </Button>
            

            </VStack>
        </form>
    </Container>
  )
}

export default ResetPassword