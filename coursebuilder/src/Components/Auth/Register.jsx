import { Avatar, Box, Button, Container, FormLabel, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const fileUploadCss = {

    cursor: "pointer",
    marginLeft: "-5%",
    width: "110%",
    border: "none",
    height: "100%",
    color: "#ffff",
    backgroundColor: "blackalpha",
}

const fileUploadStyle = {
  "&::file-selector-button": fileUploadCss,
}


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imagePrev, setImagePrev] = useState('');
    const [image, setImage] = useState('');

    const changeImageHandler = (e) => {
      
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setImagePrev(reader.result);
        setImage(file);
      }

    }
  return (
    <Container h = {'95vh'}>
        <VStack h={'full'} justifyContent={"center"} spacing={'16'}>
            <Heading textTransform={'uppercase'} children={"WELCOME TO THE PRI EXPERIENCE"} />

            <Box justifyContent={"center"} display={"flex"} my={"0.0000001"} >
              <Avatar my={"0.0000001"} 
                      size={"2xl"} 
                      src={imagePrev}
                       />
            </Box>

            <form style={{width: '100%'}}>
                      
            <Box my={"2"}>
              <FormLabel htmlFor = "name" children="Name" />
              <Input required id="name" 
                     value={name} 
                     onChange={e => setName(e.target.value)} 
                     placeholder='Tim'
                     type={'text'}
                     focusBorderColor="purple.500"

                      />

              </Box>
              <Box my={"2"}>
              <FormLabel htmlFor = "email" children="Email" />
              <Input required id="email" 
                     value={email} 
                     onChange={e => setEmail(e.target.value)} 
                     placeholder='abc@gmail.com'
                     type={'email'}
                     focusBorderColor="purple.500"

                      />

              </Box>

              <Box my={"6"}>
              <FormLabel htmlFor = "password" children="Password" />
              <Input required id="password" 
                     value={password} 
                     onChange={e => setPassword(e.target.value)} 
                     placeholder='Enter Your Password'
                     type={'password'}
                     focusBorderColor="purple.500"

                      />
              </Box>

              <Box my={"6"}>
              <FormLabel htmlFor = "chooseAvatar" children="Upload A Profile" />
              <Input required id="chooseAvatar" 
                     type={'file'}
                     focusBorderColor="purple.500"
                     accept="image/*"
                     css={fileUploadStyle}
                     onChange={changeImageHandler}

                      />
              </Box>

              <HStack spacing={"10"}justifyContent={"flex-start"}>
                
              <Button my="4" colorScheme={'purple'} type='submit'>
                REGISTER
              </Button>
              
              <Box my={"2"}>
                
                Already Registered? {' '} <Link to={"/Login"}>
                    <Button colorScheme='purple'variant={"link"}>LOGIN</Button> {" "}
                    here
                     </Link>
              </Box>

              </HStack>     
              

          </form>
        </VStack>
    </Container>

  )
}

export default Register