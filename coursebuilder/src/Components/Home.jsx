import React from 'react';
import {Heading, Stack, VStack, Text, Button, Image} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import "./home.css"
import vg from "../Assets/Images/gilles-de-muynck-PtJDCD4fTI4-unsplash.jpg"

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

                    <Image boxSize={"md"} src={vg} />
             </Stack>

        </div> 
    </section>
  )
}

export default Home