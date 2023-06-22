import React, { useEffect, useState } from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import { changePassword } from '../../REDUX/actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const ChangPassword = () => {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e)=>{
      e.preventDefault();

      dispatch(changePassword(oldPassword, newPassword));
    }

    const {loading, message, error} = useSelector(state=>state.profile);

    
    useEffect(() => {
      if(error){
        toast.error(error);
        dispatch({type: 'clearError'});
      }

      if(message){
        toast.success(message);
        dispatch({type: 'clearMessage'});
      }
    }, [dispatch, error, message])
    



  return (
    <Container minH={"90vh"}
      py={"16"}>
      <form onSubmit={submitHandler}>
        <Heading children={"CHANGE PASSWORD"}
          my={"16"}
          textAlign={['center', 'left']} color={"antiquewhite"} />

        <VStack spacing={"8"}>
          <Input required id="password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder='Old Password'
            type={'password'}
            focusBorderColor="purple.500"
            color={"antiquewhite"} />

          <Input required id="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder='New Password'
            type={'password'}
            focusBorderColor="purple.500"
            color={"antiquewhite"} />

          <Button isLoading={loading}
            w={"full"}
            colorScheme={'purple'}
            type='submit'>
            Change Password

          </Button>


        </VStack>
      </form>

    </Container>
    
    

  )
}

export default ChangPassword