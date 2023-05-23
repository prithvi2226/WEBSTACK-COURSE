import { Container, Heading, VStack, Box, Button, Input, HStack, FormLabel, Textarea } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Header from '../Layout/Header/Header';

const Request = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

  return (
    <><Header /><Container h={"92vh"}>
      <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
        <Heading children="REQUEST FROM US" />
        <form style={{ width: '100%' }}>
          <Box my={"2"}>
            <FormLabel htmlFor="name" children="NAME" />
            <Input required id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='John Doe'
              type={'text'}
              focusBorderColor="purple.500" />

          </Box>
          <Box my={"2"}>
            <FormLabel htmlFor="email" children="Email" />
            <Input required id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='abc@gmail.com'
              type={'email'}
              focusBorderColor="purple.500" />

          </Box>

          <Box my={"2"}>
            <FormLabel htmlFor="course" children="EXPLAIN THE COURSE" />
            <Textarea required id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder='What explanation or course you want me to provide>>??'
              focusBorderColor="purple.500" />

          </Box>


          <HStack spacing={"10"} justifyContent={"flex-start"}>

            <Button my="4" colorScheme={'purple'} type='submit'>
              SEND
            </Button>

            <Box my={"2"}>
              Available Courses and Explanations{'>>'}{' '}
              <Link to={"/Main"}>
                <Button colorScheme='purple' variant={"link"}>COURSES</Button> {" "}
              </Link>
            </Box>


          </HStack>



        </form>
      </VStack>

    </Container></>
  )
}



export default Request