import React, { useEffect, useState } from 'react';
import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../REDUX/actions/course';
import { toast } from 'react-hot-toast';

const Course = ({ views, title, imageSrc, id, addToPlaylistHandler, creator, description, lecture }) => {
  return (
    <VStack className="course" alignItems={['center']}>
      <Image src={imageSrc} boxSize={60} objectFit='contain' />
      <Heading textAlign={["center", "left"]} maxW='200px' fontFamily='consolas' noOfLines={3} children={title} />

      <Text children={description} noOfLines={3} fontFamily='consolas' fontSize='large' />

      <HStack>
        <Text fontWeight='bold' fontFamily='consolas' textTransform='uppercase' children='CREATOR' />
        <Text fontWeight='bold' fontFamily='consolas' textTransform='uppercase' children={creator} />
      </HStack>

      <Heading textAlign='center' size='xs' children={`Hours - ${lecture}`} textTransform='uppercase' />

      <Heading size='xs' children={`VIEWS - ${views}`} textTransform='uppercase' />

      <Stack direction={["column", "row"]} alignItems='center'>
        <Link to={`/Course/${id}`}>
          <Button fontFamily='consolas' colorScheme='purple' variant='outline'>
            START
          </Button>
        </Link>
        <Button fontFamily='consolas' colorScheme='purple' variant='outline' onClick={() => addToPlaylistHandler(id)}>
          ADD TO PLAYLIST
        </Button>
      </Stack>
    </VStack>
  );
};

const Main = () => {
  const [Keyword, setKeyword] = useState('');
  const [Category, setCategory] = useState('');
  const dispatch = useDispatch();

  const addToPlaylistHandler = (courseId) => {
    console.log('Added to Playlist', courseId);
  };

  const categories = ["Interview Prep", "INTERVIEW DSA PRACTICE", "AWS"];

  const { loading, courses, error } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getAllCourses(Category, Keyword));

    if (error) {
      toast.error(error);
      dispatch({ type: 'course/clearError' });
    }
  }, [Category, Keyword, dispatch, error]);

  return (
    <Container minH='95vh' maxW='container.lg' paddingY='8'>
      <Heading children='ALL THE CONTENT' m='8' />

      <Input
        value={Keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='WHAT ARE YOU LOOKIN FOR?'
        type='text'
        focusBorderColor='gray.500'
      />

      <HStack padding='8'>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW='60'>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap='wrap'
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {courses.length > 0 ?
          courses.map((item) => (
            <Course
              key={item._id}
              views={item.views}
              description={item.description}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lecture={item.numOfVideos}
              title={item.title}
              addToPlaylistHandler={addToPlaylistHandler}
            />
          )) : <Heading children="COURSE NOT FOUND" fontFamily={'consolas'} />}
      </Stack>
    </Container>
  );
};

export default Main;
