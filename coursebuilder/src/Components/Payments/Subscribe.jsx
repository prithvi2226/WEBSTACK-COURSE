import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { server } from '../../REDUX/store';
import { buySubscription } from '../../REDUX/actions/user';
import { toast } from 'react-hot-toast';
import logo from "../../Assets/Images/logo.png";


const Subscribe = ({user}) => {

    const dispatch = useDispatch();
    const [key, setKey] = useState("");

    const {loading, error, subscriptionId} = useSelector(state=>state.subscription);

    const {error: courseError} = useSelector(state=>state.courses);

    const subscribeHandler = async()=>{
        const {data: { key }} = await axios.get(`${server}/razorpaykey`);
        setKey(key);
        dispatch(buySubscription());
    }

    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch({type: 'clearError'});
        }

        if(courseError){
            toast.error(courseError);
            dispatch({type: 'clearError'});
        }

        if(subscriptionId){
            const openPopUp = ()=>{
                const options= {
                    key,
                    name: "Prithvi Course",
                    description: "Get access to all premium content",
                    image: logo,
                    subscription_id: subscriptionId,
                    callback_url: `${server}/paymentverification`,
                    prefill: {
                        name: user.name,
                        email: user.email,
                        contact: ""
                    },
                    notes:{
                        address: "PRITHV! at Github"
                    },
                    theme: "#77367d"                    
                };

                const razor = new window.Razorpay(options);
                razor.open();
            }
            openPopUp()
        }
    }, [dispatch, error, user.name, user.email, key, subscriptionId, courseError])
    

  return (
    <Container h={"90vh"} p={"16"}>
        <Heading children="Welcome" 
                 my={"8"}
                 textAlign={"center"} 
                 color={"antiquewhite"}/>
        
        <VStack boxShadow={'lg'}
                alignItems={"stretch"}
                borderRadius={'lg'}
                spacing={"0"}>
            
            <Box bg={"purple.200"}
                p={"4"} 
                css = {{borderRadius: "8px 8px 0 0"}}>
                <Text children={`PRO PACK - $1`}
                      color={"blackAlpha.900"} />
            </Box>

            <Box p={"4"} bg={"blackAlpha.400"}>
                <VStack textAlign={'center'} 
                        px={"8"} 
                        mt={"4"}
                        spacing={"8"}>

                    <Text children={`Get Pro Pack and get access to all the courses`} 
                          textColor={"GrayText"}
                          fontFamily={"consolas"}
                          fontSize={"lg"}
                          
                          />
                    
                    <Heading size={"md"} children={"$1 ONLY"} textColor={"whiteAlpha.700"}/>
                </VStack>

                <Button my={"8"} 
                        w={"full"} 
                        variant={"outline"} 
                        colorScheme='purple'
                        onClick={subscribeHandler}
                        isLoading = {loading} >
                    BUY
                </Button>
            </Box>
{/* 
            <Box bg={"blackAlpha.400"}
                p={"4"}
                css= {{borderRadius: "0 0 8px 8px"}}> 

                
                

            </Box>*/}


        </VStack>

    </Container>
  )
}

export default Subscribe