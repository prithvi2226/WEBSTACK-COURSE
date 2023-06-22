import {Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const PaymentFail = () => {
  return (
    
    <Container h={"90vh"}
                p={"16"}>
        
        <Heading my={"8"}
                textAlign={'center'} color={"antiquewhite"}>
            PAYMENT UNSUCCESSFUL {`:(`}
            
        </Heading>

        <VStack>
            <Link to={"/SUBSCRIBE"}>
                    <Button variant={"outline"} colorScheme='purple'>
                        TRY AGAIN
                    </Button>
                </Link>
                
            <Link to={"/MAIN"}>
                <Button my={"4"} variant={"outline"} colorScheme='purple'>
                    GO TO HOME
                </Button> 
            </Link>
        </VStack>

        

    </Container>
  )
}




export default PaymentFail