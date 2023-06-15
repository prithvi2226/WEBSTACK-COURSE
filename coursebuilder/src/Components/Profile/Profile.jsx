import { Avatar, Button, Container, HStack, Heading, Image, Stack, Text, VStack, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Input, ModalFooter, useDisclosure, ModalHeader } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { fileUploadCss } from '../Auth/Register'
import { removeFromPlaylist, updateProfilePicture } from '../../REDUX/actions/profile'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../REDUX/actions/user'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Profile = ({user}) => {

    const dispatch = useDispatch();
    const {loading, message, error} = useSelector(state=>state.profile);

    const removeFromPlaylistHandler = async id => {
        await dispatch(removeFromPlaylist(id));
        dispatch(loadUser());
    };

    

    const changeImageSubmitHandler = async (e, Image) => {
        e.preventDefault();
        const myForm = new FormData();
  
        myForm.append("file", Image);
  
        await dispatch(updateProfilePicture(myForm));
        dispatch(loadUser());
    };

    useEffect(() => {
        if(error){
          toast.error(error);
          dispatch({type: 'clearError'});
        }
  
        if(message){
          toast.success(message);
          dispatch({type: 'clearMessage'});
        }
      }, [dispatch, error, message])

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
                <Avatar boxSize={"48"} src={user.avatar.url} />

                <Button colorScheme={"purple"}
                        variant={"outline"}
                        onClick={onOpen}
                        isLoading={loading}>
                    
                    Change Display

                </Button>
            </VStack>

            <VStack spacing={"4"}
                    alignItems={["center", "flex-start"]}>
                
                <HStack>
                    <Text children={"Name:"} fontWeight={'bold'}/>
                    <Text children={user.name} />
                </HStack>{' '}
                <HStack>
                    <Text children={"Email:"} fontWeight={'bold'}/>
                    <Text children={user.email} />
                </HStack>
                <HStack>
                    <Text children={"Created Date:"} fontWeight={'bold'}/>
                    <Text children={user.createdAt.split("T")[0]} />
                </HStack>

                {
                    user.role !== "admin" && (
                    <HStack>
                        <Text children="Subscription:" fontWeight={'bold'} />
                        {user.subscription && user.subscription.status === "active"?(
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
                        <Button colorScheme='purple' isLoading={loading}>
                            Update Profile
                        </Button>
                    </Link>

                    <Link to={"/ChangePassword"}>
                        <Button colorScheme='purple' isLoading={loading}>
                            Change Password
                        </Button>
                    </Link>

                </Stack>


            </VStack>

        </Stack>

        <Heading children={"Playlist"} size={"md"} my={"8"} />

        {
            user.playlist.length > 0 && (
                <Stack justifyContent={"flex-start"}
                        direction={["column", "row"]}
                        alignItems={"center"}
                        spacing={["8", "16"]}
                        padding={"4"}
                        flexWrap={"wrap"}>

                    {
                        user.playlist.map((element)=>(
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
                                    <Button isLoading={loading} 
                                            onClick={()=>removeFromPlaylistHandler(element.course)}>
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

