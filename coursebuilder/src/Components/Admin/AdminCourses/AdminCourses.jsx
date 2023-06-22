import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import Sidebar from '../Sidebar'
import cursor from '../../../Assets/Images/cursor.png'
import { RiDeleteBin4Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'
import { useDispatch, useSelector } from 'react-redux'
import {getAllCourses, getCourseLectures} from "../../../REDUX/actions/course"
import { addLecture, deleteCourse, deleteLecture } from '../../../REDUX/actions/admin'
import { toast } from 'react-hot-toast'



const AdminCourses = () => {

  const {courses, lectures} = useSelector(state=>state.courses);

  const {loading, error, message} = useSelector(state=>state.admin);

  const [courseId, setCourseId] = useState("");
  const [courseTitle, setCourseTitle] = useState("");

  const dispatch = useDispatch();


  const { isOpen, onClose, onOpen } = useDisclosure();


  const courseDetailsHandler= (courseId, title) =>{
    dispatch(getCourseLectures(courseId));
    onOpen();   
    setCourseId(courseId);
    setCourseTitle(title);
  };

  const deleteButtonHandler= courseId =>{
    dispatch(deleteCourse(courseId));
  };

  const deleteLectureButtonHandler= async (courseId, lectureId) =>{
    await dispatch(deleteLecture(courseId, lectureId));
    dispatch(getCourseLectures(courseId));
  };

  const addLectureHandler = async (e, courseId, title, description, video) =>{
    
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);

    await dispatch(addLecture(courseId, myForm));
    dispatch(getCourseLectures(courseId));
  };

  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type: 'clearError'} );
    }
    if(message){
      toast.success(message);
      dispatch({type: 'clearMessage'} );
    }
    dispatch(getAllCourses());
  }, [dispatch, message, error, onClose]);
  



  return (
    <Grid minH={"100vh"}
      templateColumns={['1fr', '5fr 1fr']}
      css={{cursor: `url(${cursor}), default`, }}>
      
      <Box p={["0", "8"]}
            overflowX={"auto"}>
        
        <Heading textTransform={'uppercase'}
                    children= "COURSES"
                    my={"16"}
                    textAlign={['center', 'left']} color={"antiquewhite"}/>

        
        <TableContainer w={["100vw", "full"]}>
          <Table variant={'simple'} size={"lg"}>

          <TableCaption color={"antiquewhite"}>
            All Available Courses in the Database
          </TableCaption>

          <Thead>
            <Tr>
              <Th color={"antiquewhite"}>Id</Th>
              <Th color={"antiquewhite"}>Course Preview</Th>
              <Th color={"antiquewhite"}>Title</Th>
              <Th color={"antiquewhite"}>Category</Th>
              <Th color={"antiquewhite"}>Creator</Th>
              <Th isNumeric color={"antiquewhite"}>Views</Th>
              <Th isNumeric color={"antiquewhite"}>Lectures</Th>
              <Th isNumeric color={"antiquewhite"}>Action</Th>
            </Tr>

          </Thead>

          <Tbody>

            {
              
              courses.map(item=>(
                <Row key={item._id}  
                      item={item}
                      courseDetailsHandler={courseDetailsHandler}
                      deleteButtonHandler={deleteButtonHandler}
                      loading={loading} />
              ))
            }
            
          </Tbody>
        </Table>

        </TableContainer>
        {/* MODAL */}

        <CourseModal isOpen={isOpen} 
                     onClose={onClose} 
                     id = {courseId}
                     courseTitle = {courseTitle}
                     deleteButtonHandler = {deleteLectureButtonHandler}
                     addLectureHandler={addLectureHandler}
                     lectures={lectures}
                     loading={loading} />

      </Box>

      <Sidebar />

    </Grid>
  
  )
}

export default AdminCourses;

function Row({item, courseDetailsHandler, deleteButtonHandler, loading}){
  return (
    <Tr>
      <Td color={"antiquewhite"}>
        #{item._id}
      </Td>
      <Td color={"antiquewhite"}>
        <Image src={item.poster.url} />
      </Td>
      <Td color={"antiquewhite"}>
        {item.title}
      </Td>
      <Td textTransform={"uppercase"} color={"antiquewhite"}>
        {item.category}
      </Td>
      <Td color={"antiquewhite"}>
        {item.createdBy}
      </Td>

      <Td isNumeric color={"antiquewhite"}>
        {item.views}
      </Td>

      <Td isNumeric color={"antiquewhite"}>
        {item.numOfVideos}
      </Td>

      <Td isNumeric color={"antiquewhite"}>
        <HStack justifyContent={"flex-end"}>
          <Button onClick={()=>courseDetailsHandler(item._id, item.title)} 
                  variant={"outline"} 
                  color={"purple.300"}
                  isLoading={loading}>
            View Lecture
          </Button>

          <Button onClick={()=>deleteButtonHandler(item._id)} 
                  color={"purple"}
                  isLoading={loading}>
            <RiDeleteBin4Fill />

          </Button>

        </HStack>
      </Td>
    </Tr>
  )
}




