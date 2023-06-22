import { Container, Heading, VStack, Box, Button, Input, HStack, FormLabel, Textarea, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { contactUs } from '../../REDUX/actions/other';
import { toast } from 'react-hot-toast';


const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const {loading, error, message: ContactMessage} = useSelector(state=>state.other);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(contactUs(name, email, message));
    }

    useEffect(() => {
      if(error){
        toast.error(error);
        dispatch({type: 'clearError'} );
      }
      if(ContactMessage){
        toast.success(ContactMessage);
        dispatch({type: 'clearMessage'} );
      }
    
    }, [dispatch, ContactMessage, error]);
    

  return (
    <Container h={"92vh"}>
      <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
        <Heading children="CONTACT US" color={"antiquewhite"} />
        
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box my={"2"}>
            <FormLabel htmlFor="name" children="NAME" color={"antiquewhite"}/>
            <Input required id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='John Doe'
              type={'text'}
              focusBorderColor="purple.500" 
              color={"antiquewhite"}/>

          </Box>
          <Box my={"2"}>
            <FormLabel htmlFor="email" children="Email" color={"antiquewhite"} />
            <Input required id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='abc@gmail.com'
              type={'email'}
              focusBorderColor="purple.500"
              color={"antiquewhite"} />

          </Box>

          <Box my={"2"}>
            <FormLabel htmlFor="message" children="DROP A MESSAGE FOR US" color={"antiquewhite"} />
            <Textarea required id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder='Speak Your Mind'
              focusBorderColor="purple.500" 
              color={"antiquewhite"}/>

          </Box>


          <HStack spacing={"10"} justifyContent={"flex-start"}>

            <Button isLoading={loading} my="4" colorScheme={'purple'} type='submit'>
              SEND
            </Button>

            <Box my={"2"}>
              <Text color={"antiquewhite"}>NEED a course or explanation?? {' '}</Text>
              <Link to={"/Request"}>
                <Button colorScheme='purple' variant={"link"}>REQUEST HERE</Button> {" "}
                For new content
              </Link>
            </Box>


          </HStack>



        </form>
      </VStack>

    </Container>
  )
}

export default Contact;