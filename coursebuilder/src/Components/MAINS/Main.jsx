import { useState } from 'react';
import React from 'react';
import Header from '../Layout/Header/Header';
import { Button, Container, HStack, Heading, Input, Text } from '@chakra-ui/react';


const Main = () => {

  const [Keyword, setKeyword] = useState('');
  const [Category, setCategory] = useState('');
  const categories = [
    "Interview Prep",
    "INTERVIEW DSA PRACTICE",
    "AWS ASSOCIATES ARCHITECT SAA-C03",
  ]

  return (
    <><Header />
    
    <Container minH={'95vh'} maxW={"container.lg"} paddingY={'8'}>
      <Heading children="ALL THE CONTENT" m={'8'} />

      <Input value={Keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder='WHAT ARE YOU LOOKIN FOR?'
        type={'text'} 
        focusBorderColor= 'gray.500' />

        <HStack padding={'8'}>
          {
            categories.map((item, index)=>(
              <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
                <Text children = {item} />
              </Button>
            ))
          }
        </HStack>
      

    </Container></>
    
  );
};

export default Main