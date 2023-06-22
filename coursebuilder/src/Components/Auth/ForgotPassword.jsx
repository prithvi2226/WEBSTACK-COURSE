import { Container, Heading, VStack, Input, Button, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../REDUX/actions/profile';
import { toast } from 'react-hot-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const { loading, message, error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'profile/clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'profile/clearMessage' });
    }
  }, [dispatch, error, message]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  return (
    <Container paddingY={14} h="90vh">
      <form onSubmit={submitHandler}>
        <VStack spacing={8}>
          <Heading
            children="FORGOT YOUR PASSWORD??"
            my={14}
            textTransform="uppercase"
            textAlign="center"
            color={"antiquewhite"}
          />

          <Text fontFamily="consolas" fontSize="xl" color={"antiquewhite"}>
            TYPE IN YOUR EMAIL
          </Text>
          <Input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            type="email"
            focusBorderColor="purple.500"
            color={"antiquewhite"}
          />

          <Button isLoading={loading} type="submit" width="full" colorScheme="purple">
            SEND RESET LINK
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgotPassword;
