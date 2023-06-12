import React from 'react'
import { Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import Sidebar from '../Sidebar'
import cursor from '../../../Assets/Images/cursor.png'
import { RiDeleteBin4Fill } from 'react-icons/ri'


const Users = () => {

  const users=[{
    _id: "PP",
    name: "Prithvi",
    role: "Admin",
    subscription: {
      status: "active"
    },
    email: "bc@gmail.com", 
  }]


  const updateHandler= userId =>{
    console.log(userId);
  };

  const deleteButtonHandler= userId =>{
    console.log(userId);
  };


  return (
    
    <Grid minH={"100vh"}
      templateColumns={['1fr', '5fr 1fr']}
      css={{cursor: `url(${cursor}), default`, }}>
      
      <Box p={["0", "16"]}
            overflowX={"auto"}>
        
        <Heading textTransform={'uppercase'}
                    children= "All Users"
                    my={"16"}
                    textAlign={['center', 'left']} />

        
        <TableContainer w={["100vw", "full"]}>
          <Table variant={'simple'} size={"lg"}>

          <TableCaption>
            All Available Users in the Database
          </TableCaption>

          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Subscription</Th>
              <Th isNumeric>Action</Th>
            </Tr>

          </Thead>

          <Tbody>

            {
              users.map(item=>(
                <Row key={item._id}  
                      item={item}
                      updateHandler={updateHandler}
                      deleteButtonHandler={deleteButtonHandler} />
              ))
            }
            
          </Tbody>
        </Table>

        </TableContainer>

      </Box>

      <Sidebar />

    </Grid>
  )
}

export default Users

function Row({item, updateHandler, deleteButtonHandler}){
  return (
    <Tr>
      <Td >
        #{item._id}
      </Td>
      <Td >
        {item.name}
      </Td>
      <Td >
        {item.email}
      </Td>
      <Td >
        {item.role}
      </Td>
      <Td >
        {item.subscription.status === "active" ? "Active": "Not Active"}
      </Td>

      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button onClick={()=>updateHandler(item._id)} 
                  variant={"outline"} 
                  color={"purple.300"}>
            Change Role
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



