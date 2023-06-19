import React, { useEffect } from 'react'
import { Box, Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import Sidebar from '../Sidebar'
import cursor from '../../../Assets/Images/cursor.png'
import { RiDeleteBin4Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'
import { useDispatch, useSelector } from 'react-redux'
import {getAllCourses, getCourseLectures} from "../../../REDUX/actions/course"



const AdminCourses = () => {

  const {courses, lectures} = useSelector(state=>state.courses)
  const dispatch = useDispatch();


  const { isOpen, onClose, onOpen } = useDisclosure();


  const courseDetailsHandler= courseId =>{
    dispatch(getCourseLectures(courseId))
    onOpen();   
  };

  const deleteButtonHandler= courseId =>{
    console.log(courseId);
  };

  const deleteLectureButtonHandler= (courseID, lectureID) =>{
    console.log(courseID);
    console.log(lectureID);
  };

  const addLectureHandler = (e, courseID, title, description) =>{
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);
  



  return (
    <Grid minH={"100vh"}
      templateColumns={['1fr', '5fr 1fr']}
      css={{cursor: `url(${cursor}), default`, }}>
      
      <Box p={["0", "8"]}
            overflowX={"auto"}>
        
        <Heading textTransform={'uppercase'}
                    children= "COURSES"
                    my={"16"}
                    textAlign={['center', 'left']} />

        
        <TableContainer w={["100vw", "full"]}>
          <Table variant={'simple'} size={"lg"}>

          <TableCaption>
            All Available Courses in the Database
          </TableCaption>

          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Course Preview</Th>
              <Th>Title</Th>
              <Th>Category</Th>
              <Th>Creator</Th>
              <Th isNumeric>Views</Th>
              <Th isNumeric>Lectures</Th>
              <Th isNumeric>Action</Th>
            </Tr>

          </Thead>

          <Tbody>

            {
              
              courses.map(item=>(
                <Row key={item._id}  
                      item={item}
                      courseDetailsHandler={courseDetailsHandler}
                      deleteButtonHandler={deleteButtonHandler} />
              ))
            }
            
          </Tbody>
        </Table>

        </TableContainer>
        {/* MODAL */}

        <CourseModal isOpen={isOpen} 
                     onClose={onClose} 
                     id = {"PPOp"}
                     courseTitle = "AWS COURSE"
                     deleteButtonHandler = {deleteLectureButtonHandler}
                     addLectureHandler={addLectureHandler}
                     lectures={lectures} />

      </Box>

      <Sidebar />

    </Grid>
  
  )
}

export default AdminCourses;

function Row({item, courseDetailsHandler, deleteButtonHandler}){
  return (
    <Tr>
      <Td >
        #{item._id}
      </Td>
      <Td >
        <Image src={item.poster.url} />
      </Td>
      <Td >
        {item.title}
      </Td>
      <Td textTransform={"uppercase"}>
        {item.category}
      </Td>
      <Td >
        {item.createdBy}
      </Td>

      <Td isNumeric>
        {item.views}
      </Td>

      <Td isNumeric>
        {item.numOfVideos}
      </Td>

      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button onClick={()=>courseDetailsHandler(item._id)} 
                  variant={"outline"} 
                  color={"purple.300"}>
            View Lecture
          </Button>

          <Button onClick={()=>deleteButtonHandler(item._id)} 
                  color={"purple"}>
            <RiDeleteBin4Fill />

          </Button>

        </HStack>
      </Td>
    </Tr>
  )
}




