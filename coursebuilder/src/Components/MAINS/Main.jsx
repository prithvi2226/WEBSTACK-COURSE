import { useState } from 'react';
import React from 'react';
import Header from '../Layout/Header/Header';
import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Course = ({views, 
                 title, 
                 imageSrc, 
                 id, addToPlaylistHandler, 
                creator, description, lecture}) => {
  return (
    <VStack className="course" alignItems={['center']}>
      <Image src={imageSrc} boxSize={"60"} objectFit={'contain'} />
      <Heading textAlign={["center", "left"]} 
               maxW="200px"
               fontFamily={"consolas"}
               noOfLines={3}
               children = {title} />
      
      <Text children = {description}
            noOfLines={3}
            fontFamily={"consolas"}
            fontSize={"large"} />
      
      <HStack>
        <Text fontWeight={'bold'} 
              children = {"CREATOR"}
              fontFamily={"consolas"}
              textTransform='uppercase' />

        <Text fontWeight={'bold'}
              children = {creator}
              fontFamily={"consolas"}
              textTransform='uppercase' />
      </HStack>

      <Heading textAlign={'center'}
               size={'xs'}
               children = {`Hours - ${lecture}`}
               textTransform='uppercase' />
        
      <Heading 
               size={'xs'}
               children = {`VIEWS - ${views}`}
               textTransform='uppercase' />

      <Stack direction={["column", "row"]}
             alignItems="center" >
        
        <Link to={`/course/${id}`}> 
          <Button fontFamily={'consolas'}
                  colorScheme='purple'
                  variant={"outline"}
                  >
            START
          </Button>
        </Link>
        <Button fontFamily={'consolas'}
                  colorScheme='purple'
                  variant={"outline"}
                  onClick={() => addToPlaylistHandler(id)}>
            ADD TO PLAYLIST
          </Button>

      </Stack>


    </VStack>
  )
}

const Main = () => {

  const [Keyword, setKeyword] = useState('');
  const [Category, setCategory] = useState('');

  const addToPlaylistHandler = () => {
    console.log("Added to Playlist")
  }

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

        <HStack direction={['column', 'row']}
                flexWrap={"wrap"}
                justifyContent={['flex-start', 'space-evenly']}
                alignItems={['center', 'flex-start']}
                >
          
          <Course 
            views={"24"}
            description={"Sample"}
            imageSrc={"https://logowik.com/content/uploads/images/aws.jpg"}
            id={"1"}
            creator={"Prithvi"}
            lecture={"1"}
            title={"Sample"}
            addToPlaylistHandler={addToPlaylistHandler}
        
          />

        </HStack>
      

    </Container></>
    
  );
};

export default Main