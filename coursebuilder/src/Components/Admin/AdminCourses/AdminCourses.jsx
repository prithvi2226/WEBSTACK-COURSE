import React from 'react'
import Header from '../../Layout/Header/Header'
import { Box, Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import Sidebar from '../Sidebar'
import cursor from '../../../Assets/Images/cursor.png'
import { RiDeleteBin4Fill } from 'react-icons/ri'


const AdminCourses = () => {

  const courses=[{
    _id: "PP",
    title: "AWS Course",
    category: "AWS ASSOCIATES ARCHITECT SAA-C03",
    poster: {
      url: "https://logowik.com/content/uploads/images/aws.jpg"
    },
    createdBy: "Prithv!", 
    views: 12,
    numOfVideos: 12,
  }]


  const courseDetailsHandler= userId =>{
    console.log(userId);
  };

  const deleteButtonHandler= userId =>{
    console.log(userId);
  };


  return (
    <>
    <Header />
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
              <Th>Course Image</Th>
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

      </Box>

      <Sidebar />

    </Grid>
    </>
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




