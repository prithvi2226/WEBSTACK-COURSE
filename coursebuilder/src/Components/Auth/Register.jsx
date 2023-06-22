import { Avatar, Box, Button, Container, FormLabel, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../REDUX/actions/user';

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

    const dispatch = useDispatch();

    const changeImageHandler = (e) => {
      
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setImagePrev(reader.result);
        setImage(file);
      }

    }

    const submitHandler = (e)=>{
      e.preventDefault();
      const myForm = new FormData();

      myForm.append("name", name);
      myForm.append("email", email);
      myForm.append("password", password);
      myForm.append("file", image);

      dispatch(register(myForm));
    }
  return (
    <Container h = {'110vh'}>
        <VStack h={'fit-content'} justifyContent={"center"} spacing={'16'}>
            <Heading textTransform={'uppercase'} children={"WELCOME TO THE PRI EXPERIENCE"} color={"antiquewhite"}/>

            <Box justifyContent={"center"} display={"flex"} my={"0.000001"} >
              <Avatar my={"0.0000001"} 
                      size={"2xl"} 
                      src={imagePrev}
                       />
            </Box>

            <form onSubmit={submitHandler} style={{width: '100%'}}>
                      
            <Box my={"1"}>
              <FormLabel htmlFor = "name" children="Name" color={"antiquewhite"}/>
              <Input required id="name" 
                     value={name} 
                     onChange={e => setName(e.target.value)} 
                     placeholder='Tim'
                     type={'text'}
                     focusBorderColor="purple.500"
                     color={"antiquewhite"}
                      />

              </Box>
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

              <Box my={"6"}>
              <FormLabel htmlFor = "chooseAvatar" children="Upload A Profile" color={"antiquewhite"} />
              <Input required id="chooseAvatar" 
                     type={'file'}
                     focusBorderColor="purple.500"
                     accept="image/*"
                     css={fileUploadStyle}
                     onChange={changeImageHandler}
                     color={"antiquewhite"}
                      />
              </Box>

              <HStack spacing={"10"}justifyContent={"flex-start"}>
                
              <Button my="4" colorScheme={'purple'} type='submit'>
                REGISTER
              </Button>
              
              <Box my={"2"}>
                
                <Text color={"antiquewhite"}>Already Registered? {' '}</Text> <Link to={"/Login"}>
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