import React, { useEffect } from 'react'
import { Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import Sidebar from '../Sidebar'
import cursor from '../../../Assets/Images/cursor.png'
import { RiDeleteBin4Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUsers, UpdateUserRole } from '../../../REDUX/actions/admin'
import { toast } from 'react-hot-toast'


const Users = () => {

  const {users, loading, error, message} = useSelector(state=>state.admin)

  const dispatch = useDispatch();


  const updateHandler= userId =>{
    dispatch(UpdateUserRole(userId));
  };

  const deleteButtonHandler= userId =>{
    dispatch(deleteUser(userId));
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
    dispatch(getAllUsers());
  }, [dispatch, error, message])
  


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
              users && users.map(item=>(
                <Row key={item._id}  
                      item={item}
                      updateHandler={updateHandler}
                      deleteButtonHandler={deleteButtonHandler}
                      loading={loading} />
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

function Row({item, updateHandler, deleteButtonHandler, loading}){
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
        {item.subscription && item.subscription.status === "active" ? "Active": "Not Active"}
      </Td>

      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button onClick={()=>updateHandler(item._id)} 
                  variant={"outline"} 
                  color={"purple.300"}
                  isLoading={loading}>
            Change Role
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



