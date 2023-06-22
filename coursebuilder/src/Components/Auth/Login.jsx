import { Box, Button, Container, FormLabel, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { login } from '../../REDUX/actions/user';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const submitHandler = (e)=>{

    e.preventDefault();
    dispatch(login(email, password))
  }

  return (
    <Container h = {'95vh'}>
        <VStack h={'full'} justifyContent={"center"} spacing={'16'}>
            <Heading children={"WELCOME BACK TO PRITHVI"} color={"antiquewhite"}/>

            <form onSubmit={submitHandler} style={{width: '100%'}}>
              <Box my={"2"}>
              <FormLabel htmlFor = "email" children="Email" color={"antiquewhite"}/>
              <Input required id="email" 
                     value={email} 
                     onChange={e => setEmail(e.target.value)} 
                     placeholder='abc@gmail.com'
                     type={'email'}
                     focusBorderColor="purple.500"
                     color={"antiquewhite"}
                      />

              </Box>

              <Box my={"6"}>
              <FormLabel htmlFor = "password" children="Password" color={"antiquewhite"}/>
              <Input required id="password" 
                     value={password} 
                     onChange={e => setPassword(e.target.value)} 
                     placeholder='Enter Your Password'
                     type={'password'}
                     focusBorderColor="purple.500"
                     color={"antiquewhite"}
                      />
              </Box>

              <HStack spacing={"10"}justifyContent={"flex-start"}>
                
              <Button my="4" colorScheme={'purple'} type='submit' variant={"ghost"}>
                Login 
              </Button>
              
              <Box my={"2"}>
                
                New USER? <Link to={"/Register"}>
                    <Button colorScheme='purple'variant={"link"}>SIGN UP</Button> {" "}
                    here
                     </Link>
              </Box>

              </HStack>

              
              <Box height={"6"}>
                <Link to="/ForgotPassword">
                  <Button fontSize={'sm'} variant="link" >
                    I FORGOT MY PASSWORD
                  </Button>
                </Link>


              </Box>
              
              

              

          </form>
        </VStack>
    </Container>

  )
}
export default Login