import { Avatar, Container, Heading, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'

const link = "https://avatars.githubusercontent.com/u/43705776?v=4"
const Founder = () => (
    <Stack direction={['column', 'row']}
            spacing={['4', '16']}
            padding={'8'}> 
        
        <VStack>
            <Avatar src={link} 
                    boxSize={['40', '48']} />
            <Text children="Co-Founder" 
                  opacity={0.7} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={["center", "flex-start"]}>
            <Heading children="Prith" size={["md", "xl"]} />
            <Text textAlign={["center", "left"]}
                  children={`IM THE BO$$ BITCH! I make the content `} />
        </VStack>

    </Stack>
)

const About = () => {
  return (
    <Container maxW={"container.lg"}
                padding={"16"}
                boxShadow={'lg'}>
        <Heading children={"About US"} 
                 textAlign={["center", "left"]} />
    
    <Founder />
    </Container>
  )
}

export default About