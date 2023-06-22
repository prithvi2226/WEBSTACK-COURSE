import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../REDUX/actions/profile';
import { loadUser } from '../../REDUX/actions/user';
import { useNavigate } from 'react-router-dom';


const UpdateProfile = ({user}) => {

    const [Name, setName] = useState(user.name);
    const [Email, setEmail] = useState(user.email);

    const dispatch = useDispatch()

    // const {loading} = useSelector(state=>state.profile)

    const navigate = useNavigate();
    
    const submitHandler = async e=>{
      e.preventDefault();

      await dispatch(updateProfile(Name, Email));
      dispatch(loadUser());
      navigate('/Profile');
    }

  return (
    
    <Container minH={"90vh"}
                py={"16"}>
        <form onSubmit={submitHandler}>
            <Heading children={"UPDATE PROFILE"}
                     my={"16"}
                     textAlign={['center', 'left']} color={"antiquewhite"}/>
            <VStack spacing={"8"}>
                <Input required
                        value={Name} 
                        onChange={e => setName(e.target.value)} 
                        placeholder='Name'
                        type={'text'}
                        focusBorderColor="purple.500"
                        color={"antiquewhite"}
                        />
                <Input required
                        value={Email} 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder='Email'
                        type={'email'}
                        focusBorderColor="purple.500"
                        color={"antiquewhite"}
                        />
                
                
                <Button w={"full"}
                        colorScheme={'purple'}
                        type='submit'>
                    UPDATE YOUR PROFILE
                </Button>


            </VStack>
        </form>

    </Container>
  )
}

export default UpdateProfile