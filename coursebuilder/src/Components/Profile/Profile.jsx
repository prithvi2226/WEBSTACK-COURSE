import { Avatar, Button, Container, HStack, Heading, Image, Stack, Text, VStack, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Input, ModalFooter, useDisclosure, ModalHeader } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { fileUploadCss } from '../Auth/Register'

const Profile = () => {

    const User = {
        name: "Prithvi",
        email: "pri@gmail.com",
        createdAt: String(new Date().toISOString()),
        role: 'User',
        subscription: {
            status: "active",
        },
        playlist: [
            {
                course: "AWS",
                poster: "https://logowik.com/content/uploads/images/aws.jpg",
            },
        ]
    }

    const removeFromPlaylistHandler = id => {
        console.log(id);
    };

    const changeImageSubmitHandler = (e, Image) => {
        e.preventDefault();
        console.log(Image);
    };

    const {isOpen, onClose, onOpen} = useDisclosure();

  return (

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
                        variant={"outline"}
                        onClick={onOpen}>
                    
                    Change Display

                </Button>
            </VStack>

            <VStack spacing={"4"}
                    alignItems={["center", "flex-start"]}>
                
                <HStack>
                    <Text children={"Name:"} fontWeight={'bold'}/>
                    <Text children={User.name} />
                </HStack>{' '}
                <HStack>
                    <Text children={"Email:"} fontWeight={'bold'}/>
                    <Text children={User.email} />
                </HStack>
                <HStack>
                    <Text children={"Created Date:"} fontWeight={'bold'}/>
                    <Text children={User.createdAt.split("T")[0]} />
                </HStack>

                {
                    User.role !== "admin" && (
                    <HStack>
                        <Text children="Subscription:" fontWeight={'bold'} />
                        {User.subscription.status === "active"?(
                            <Button> 
                                Cancel Subscription
                            </Button>
                        ) : (
                            <Link to={"/Subscribe"}>
                                <Button colorScheme='purple'>
                                    Subscribe!
                                </Button>
                            </Link>
                        ) }
                    </HStack>
                    )
                }

                <Stack direction={["column", "row"]}
                        alignItems={"center"}>
                    
                    <Link to={"/UpdateProfile"}>
                        <Button colorScheme='purple'>
                            Update Profile
                        </Button>
                    </Link>

                    <Link to={"/ChangePassword"}>
                        <Button colorScheme='purple'>
                            Change Password
                        </Button>
                    </Link>

                </Stack>


            </VStack>

        </Stack>

        <Heading children={"Playlist"} size={"md"} my={"8"} />

        {
            User.playlist.length > 0 && (
                <Stack justifyContent={"flex-start"}
                        direction={["column", "row"]}
                        alignItems={"center"}
                        spacing={["8", "16"]}
                        padding={"4"}
                        flexWrap={"wrap"}>

                    {
                        User.playlist.map((element)=>(
                            <VStack w={"48"}
                                    m={"2"}
                                    key={element.course} >
                                
                                <Image boxSize={"full"}
                                        objectFit={"contain"} 
                                        src={element.poster} />

                                <HStack>
                                    <Link to={`/Course/${element.course}`}>
                                        <Button variant={"outline"}
                                                colorScheme='purple'>
                                            WATCH NOW!
                                        </Button>
                                    </Link>
                                    <Button onClick={()=>removeFromPlaylistHandler(element.course)}>
                                        <RiDeleteBin7Fill />
                                    </Button>
                                </HStack>

                            </VStack>
                        ))
                    }

                </Stack>
            )
        }

        <ChangePhotoBox isOpen={isOpen}
                        onClose={onClose}
                        changeImageSubmitHandler={changeImageSubmitHandler}/>

    </Container>
    
  )
}

export default Profile;

function ChangePhotoBox({isOpen, onClose, changeImageSubmitHandler}){

    const [Image, setImage] = useState("")
    const [ImagePrev, setImagePrev] = useState("") 
 
    const changeImage = (e) => {
      
        const file = e.target.files[0];
  
        const reader = new FileReader();
        reader.readAsDataURL(file);
  
        reader.onload = () => {
          setImagePrev(reader.result);
          setImage(file);
        }
  
      }
    
    const closeHandler = () => {
        onClose();
        setImagePrev("");
        setImage("");
    }

    return (
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={"blur(10px)"} />
            <ModalContent>
                <ModalHeader>
                    Change Photo
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container>
                        <form onSubmit={(e)=> changeImageSubmitHandler(e, Image)}>
                            <VStack spacing={'8'}>
                                {
                                    ImagePrev && <Avatar src={ImagePrev} boxSize={'48'} />
                                }
                                    <Input 
                                        type={"file"}
                                        css={{"&::file-selector-button": fileUploadCss}}
                                        onChange={changeImage} />
                                    <Button w={"full"}
                                            colorScheme='purple'
                                            type='submit'>
                                        CHANGE
                                    </Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                
                <ModalFooter>
                    <Button mr={"3"} onClick={closeHandler}>
                        CANCEL
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

