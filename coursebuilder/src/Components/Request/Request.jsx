import { Container, Heading, VStack, Box, Button, Input, HStack, FormLabel, Textarea, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { courseRequest } from '../../REDUX/actions/other';
import { toast } from 'react-hot-toast';


const Request = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

    const {loading, error, message} = useSelector(state=>state.other);


    const dispatch = useDispatch();

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(courseRequest(name, email, course));
    }

    
    useEffect(() => {
      if(error){
        toast.error(error);
        dispatch({type: 'clearError'} );
      }
      if(message){
        toast.success(message);
        dispatch({type: 'clearMessage'} );
      }
    
    }, [dispatch, message, error]);


  return (
    <Container h={"92vh"}>
      <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
        <Heading children="REQUEST FROM US" color={"antiquewhite"} />

        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box my={"2"}>
            <FormLabel htmlFor="name" children="NAME" color={"antiquewhite"} />
            <Input required id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='John Doe'
              type={'text'}
              focusBorderColor="purple.500" 
              color={"antiquewhite"}/>

          </Box>
          <Box my={"2"}>
            <FormLabel htmlFor="email" children="Email" color={"antiquewhite"}/>
            <Input required id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='abc@gmail.com'
              type={'email'}
              focusBorderColor="purple.500"
              color={"antiquewhite"} />

          </Box>

          <Box my={"2"}>
            <FormLabel htmlFor="course" children="EXPLAIN THE COURSE" color={"antiquewhite"}/>
            <Textarea required id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder='What explanation or course you want me to provide>>??'
              focusBorderColor="purple.500"
              color={"antiquewhite"} />

          </Box>


          <HStack spacing={"10"} justifyContent={"flex-start"}>

            <Button isLoading={loading} my="4" colorScheme={'purple'} type='submit'>
              SEND
            </Button>

            <Box my={"2"}>
              <Text color={"antiquewhite"}>Available Courses and Explanations{'>>'}{' '}</Text>
              <Link to={"/Main"}>
                <Button colorScheme='purple' variant={"link"}>COURSES</Button> {" "}
              </Link>
            </Box>


          </HStack>



        </form>
      </VStack>

    </Container>
  )
}



export default Request