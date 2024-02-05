import React, { useEffect, useState } from 'react';
import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../REDUX/actions/course';
import { toast } from 'react-hot-toast';
import { addToPlaylist } from '../../REDUX/actions/profile';
import { loadUser } from '../../REDUX/actions/user';

const Course = ({ views, title, imageSrc, id, addToPlaylistHandler, creator, description, lecture, loading }) => {
  return (
    <VStack className="course" alignItems={['center']} border='2px solid lightgray' p={4} borderRadius='md'>
      <Image src={imageSrc} boxSize={60} objectFit='contain' />
      <Heading textAlign={"center"} maxW='200px' noOfLines={3} children={title} color='antiquewhite' />

      <Text maxW='200px' textAlign='center' fontSize='large' color='antiquewhite' noOfLines={3} children={description} />

      <HStack>
        <Text fontWeight='bold' textTransform='uppercase' children='CREATOR' color='antiquewhite' />
        <Text fontWeight='bold' textTransform='uppercase' children={creator} color='antiquewhite' />
      </HStack>

      <Heading textAlign='center' size='xs' children={`Hours - ${lecture}`} textTransform='uppercase' color='antiquewhite' />

      <Heading size='xs' children={`VIEWS - ${views}`} textTransform='uppercase' color='antiquewhite' />

      <Stack direction={["column", "row"]} alignItems='center'>
        <Link to={`/Course/${id}`}>
          <Button fontFamily='consolas' colorScheme='purple' variant='outline'>
            STARTE
          </Button>
        </Link>
        <Button fontFamily='consolas' colorScheme='purple' isLoading={loading} variant='outline' onClick={() => addToPlaylistHandler(id)}>
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

  const addToPlaylistHandler = async courseId => {

    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser());
  };

  const categories = ["Leetcode", "Health", "AWS"];

  const { loading, courses, error, message } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getAllCourses(Category, Keyword));

    if (error) {
      toast.error(error);
      dispatch({ type: 'course/clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'course/clearMessage' });
    }

  }, [Category, Keyword, dispatch, error, message]);

  return (
    <Container minH='95vh' maxW='container.lg' paddingY='8'>
      <Heading children='ALL THE CONTENT' m='8' color={"antiquewhite"} />

      <Input
        value={Keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='WHAT ARE YOU LOOKIN FOR?'
        type='text'
        focusBorderColor='gray.500'
        color='antiquewhite'
      />

      <HStack padding='8'>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW='60' colorScheme="blackAlpha">
            <Text children={item} color={"antiquewhite"} />
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
              loading={loading}
            />
          )) : <Heading children="COURSE NOT FOUND" fontFamily={'consolas'} color={"antiquewhite"} />}
      </Stack>
    </Container>
  );
};

export default Main;
