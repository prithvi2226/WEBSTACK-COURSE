import React from 'react';
import {Heading, Stack, VStack, Text, Button, Image, Box, HStack} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import "./home.css"
import vg from "../Assets/Images/gilles-de-muynck-PtJDCD4fTI4-unsplash.jpg"
import {CgGoogle} from "react-icons/cg"
import {SiCodeforces, SiLeetcode} from "react-icons/si"
import {DiAws } from "react-icons/di"

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

                    <VStack width={"full"} alignItems={["center", "flex-end"]}>

                        <Heading children = "LEARN WITH PR1THV!" size={'2xl'} />
                        <Text children = "" />
                        <Link to = "/Courses">
                            <Button size = {"lg"} colorScheme='blackAlpha'>
                                EXPLORE HERE
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
                <CgGoogle />
                <SiLeetcode />
                <SiCodeforces />
                <DiAws />

            </HStack>
        </Box>
    </section>
  )
}

export default Home