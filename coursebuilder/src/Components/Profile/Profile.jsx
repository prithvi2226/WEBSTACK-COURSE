import { Avatar, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Header from '../Layout/Header/Header'

const Profile = () => {

    const User = {
        name: "Prithvi",
        email: "pri@gmail.com",
        createdAt: String(new Date().toISOString()),
    }

  return (
    <><Header />
    <Container minH={"95vh"}
               maxW={"container.lg"}
               py={"8"}>
        <Heading children={"PROFILE"}
                 m={"8"}
                 textTransform={'uppercase'} />

        <Stack justifyContent={"flex-start"}
                direction={["column", "row"]}
                alignItems={"center"}
                spacing={["8", "16"]}
                padding={"8"}>
            
            <VStack>
                <Avatar boxSize={"48"}/>

                <Button colorScheme={"purple"}
                        variant={"outline"}>
                    
                    Change Display

                </Button>
            </VStack>

            <VStack spacing={"4"}
                    alignItems={["center", "flex-start"]}>
                
                <HStack>
                    <Text children={"Name"} fontWeight={'bold'}/>
                    <Text children={User.name} />
                </HStack>{' '}
                <HStack>
                    <Text children={"Email"} fontWeight={'bold'}/>
                    <Text children={User.email} />
                </HStack>
                <HStack>
                    <Text children={"CreatedAt"} fontWeight={'bold'}/>
                    <Text children={User.createdAt.split("T")[0]} />
                </HStack>


            </VStack>

        </Stack>
    </Container>
    </>
  )
}

export default Profile