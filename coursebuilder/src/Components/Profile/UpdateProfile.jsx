import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");

  return (
    <Container minH={"90vh"}
                py={"16"}>
        <form>
            <Heading children={"UPDATE PROFILE"}
                     my={"16"}
                     textAlign={['center', 'left']}/>
            <VStack spacing={"8"}>
                <Input required
                        value={Name} 
                        onChange={e => setName(e.target.value)} 
                        placeholder='Name'
                        type={'text'}
                        focusBorderColor="purple.500"
                        />
                <Input required
                        value={Email} 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder='Email'
                        type={'email'}
                        focusBorderColor="purple.500"
                        />
                
                
                <Button w={"full"}
                        colorScheme={'purple'}
                        type='submit'>
                    UPDATE YOUR PROFILE
                </Button>


            </VStack>
        </form>

    </Container>
  )
}

export default UpdateProfile