import React, { useState } from 'react'
import Header from '../Layout/Header/Header'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'

const ChangPassword = () => {

    const [OldPassword, setOldPassword] = useState("");
    const [NewPassword, setNewPassword] = useState("");

  return (
    <>
    <Header />
    <Container minH={"90vh"}
                py={"16"}>
        <form>
            <Heading children={"CHANGE PASSWORD"}
                     my={"16"}
                     textAlign={['center', 'left']}/>
            <VStack spacing={"8"}>
                <Input required id="password" 
                        value={OldPassword} 
                        onChange={e => setOldPassword(e.target.value)} 
                        placeholder='Old Password'
                        type={'password'}
                        focusBorderColor="purple.500"
                        />
                <Input required id="password" 
                        value={NewPassword} 
                        onChange={e => setNewPassword(e.target.value)} 
                        placeholder='New Password'
                        type={'password'}
                        focusBorderColor="purple.500"
                        />
                
                <Button w={"full"}
                        colorScheme={'purple'}
                        type='submit'>
                    Change Password

                </Button>


            </VStack>
        </form>

    </Container>
    </>

  )
}

export default ChangPassword