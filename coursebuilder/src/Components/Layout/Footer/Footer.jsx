import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {TiSocialGithub, TiSocialInstagram, TiSocialYoutube, 
        TiSocialInstagramCircular} from "react-icons/ti";    

const Footer = () => {
  return (
    <Box padding={"4"} bg={"blackAlpha.900"} minH={'10vh'}>

        <Stack direction={["column", "row"]}>
            <VStack alignItems={["center", 'flex-start']} width={"full"}>

                <Heading children = "All Rights Reserved" color={'white'}/>
                <Heading fontFamily={"consolas"} size="sm" children = "@PrithviPrathapan" color={'purple.400'}/>

            </VStack>
            <HStack spacing={["2", "10"]} justifyContent={"center"}>
                <a href='https://github.com/prithvi2226' target='blank'>
                    <TiSocialGithub fontSize={"3rem"}/>
                </a>
                <a href='https://www.youtube.com/channel/UCZTWzxALmlZgbG2OcbK_ZcA' target='blank'>
                    <TiSocialYoutube fontSize={"3rem"}/>
                </a>
            </HStack>
        </Stack>

    </Box>
  )
}

export default Footer;