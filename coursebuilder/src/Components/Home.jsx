import React from 'react';
import {Heading, Stack, VStack, Text, Button, Box, HStack} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import "./home.css"
import {CgGoogle} from "react-icons/cg"
import {SiCodeforces, SiLeetcode} from "react-icons/si"
import {DiAws } from "react-icons/di"
import Header from './Layout/Header/Header';
// import {Image} from "@chakra-ui/react"
// import vg from "../Assets/Images/gilles-de-muynck-PtJDCD4fTI4-unsplash.jpg"
// import introVideo from "../Assets/Videos/The Mercedes-AMG G 63_ Stronger Than Time.mp4"

const Home = () => {
  return (
    
    <section className='home'>
        <div className='container'>
            <Stack 
                direction={["column", "row"]}
                height={"100%"}
                justifyContent={['center', 'space-between']}
                alignItems="center"
                spacing={['16', '56']}
                >
                   
                    <VStack width={"full"} alignItems={["center", "center"]}>

                        <Heading children = "LEARN WITH PRITHV!" size={'2xl'} color={"antiquewhite"} />
                        <Text children = "" />
                        <Link to = "/Main">
                            <Button size = {"lg"} colorScheme='whiteAlpha'>
                                <Text children =  "EXPLORE HERE" color={"whiteAlpha.800"}/>
                            </Button>
                        </Link>


                    </VStack>

                    {/* <Image boxSize={"md"} src={vg} objectFit={"contain"}/> */}
             </Stack>

        </div> 

        <Box padding={'8'} bg = "blackAlpha.700">
            <Heading 
            // children = "TEXT SOMETHING" 
            textAlign={'center'}
            fontFamily={"body"}
            />

            <HStack 
            className="experienceBanner" 
            justifyContent={'space-evenly'}
            marginTop={"1"}>
                <Link to={"/InterviewStudy"}>      
                    <CgGoogle />
                </Link>
                <Link to={"/Leetcode"}>      
                    <SiLeetcode />
                </Link>
                <Link to={"/Codeforces"}>      
                    <SiCodeforces />
                </Link>
                <Link to={"/AWS-Guide"}>      
                    <DiAws />
                </Link>
    
            </HStack>
        </Box>

        {/* <div className="container2">
            <video 
            autoPlay 
            controls 
            controlsList="nodownload nofullscreen noremoteplayback" 
            disableRemotePlayback
            disablePictureInPicture
            src = {introVideo}>

            </video>
        </div> */}



    </section>
  )
}

export default Home