import { Container, Heading, VStack, Input, Button, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../REDUX/actions/profile';
import { toast } from 'react-hot-toast';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const params = useParams();

  const navigate = useNavigate();

  const { loading, message, error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'profile/clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'profile/clearMessage' });
      navigate('/Login');
    }
  }, [dispatch, error, message]);

  return (
    <Container paddingY={14} h="90vh">
      <form onSubmit={submitHandler}>
        <VStack spacing={8}>
          <Heading children="RESET YOUR PASSWORD" my={14} textTransform="uppercase" textAlign="center" color={"antiquewhite"} />

          <Text fontFamily="consolas" fontSize="xl" color={"antiquewhite"}>
            TYPE IN YOUR NEW PASSWORD
          </Text>
          <Input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your New Password"
            type="password"
            focusBorderColor="purple.500"
          />

          <Button isLoading={loading} type="submit" width="full" colorScheme="purple">
            UPDATE PASSWORD
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
