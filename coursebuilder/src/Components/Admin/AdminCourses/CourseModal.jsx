import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin4Fill } from 'react-icons/ri'
import { fileUploadCss } from '../../Auth/Register'

const CourseModal = ({isOpen, 
                     onClose, 
                     id,
                     deleteButtonHandler, 
                     courseTitle,
                     addLectureHandler,
                     lectures = [],
                     loading}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [video, setVideo] = useState("")
    const [videoPrev, setVideoPrev] = useState("")
    
    const changeVideoHandler = (e) => {
      
        const file = e.target.files[0];
    
        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onload = () => {
          setVideoPrev(reader.result);
          setVideo(file);
        }
    
      }

      const handleClose = ()=> {

        setTitle("");
        setDescription("");
        setVideo("");
        setVideoPrev("");
        onClose();
      }
  return (
    <Modal isOpen={isOpen}
            size={"full"}
            onClose={handleClose}
            scrollBehavior="outside">
        
        <ModalOverlay />

        <ModalContent>
            <ModalHeader>
                {courseTitle}
            </ModalHeader>

            <ModalCloseButton />

            <ModalBody p={"16"}>
                <Grid templateColumns={["1fr", "3fr 1fr"]}>
                    <Box px={["0", "16"]}>

                        <Box my={'5'}>
                            <Heading children={courseTitle} />
                            <Heading children={`#${id}`}
                                     size={"sm"}
                                     opacity={0.4} />
                        </Box>

                        <Heading children={"Videos"} size={"lg"} />

                        {/* VideoCard */}
                        
                        {
                            lectures.map((item, i)=>(
                                <VideoCard title= {item.title}
                                    key={i}
                                    description = {item.description}
                                    num = {i+1}
                                    lectureID = {item._id}
                                    courseID = {id}
                                    deleteButtonHandler = {deleteButtonHandler}
                                    loading={loading}
                                     /> 
                            ))
                        }

                    </Box>

                    <Box>
                        <form onSubmit={e=>addLectureHandler(e, id, title, description, video)}>
                            <VStack spacing={"4"}>
                                <Heading children={"Add Lecture"}
                                         size={"md"}
                                         textTransform={"uppercase"} />
                                
                                <Input focusBorderColor='purple.300'
                                        placeholder='Title'
                                        value={title}
                                        onChange={(e)=>setTitle(e.target.value)} />

                                <Input focusBorderColor='purple.300'
                                        placeholder='Description'
                                        value={description}
                                        onChange={(e)=>setDescription(e.target.value)} />
                                
                                <Input required  
                                        type={'file'}
                                        focusBorderColor="purple.500"
                                        accept="video/mp4"
                                        css={{
                                            "&::file-selector-button": {
                                            ...fileUploadCss, 
                                            color: "purple",
                                            },
                                        }}
                                        onChange={changeVideoHandler} />
                                {
                                    videoPrev && (
                                        <video controlsList='nodownload'
                                                controls src={videoPrev}> </video>
                                    )
                                }
                                
                                <Button w={'full'}
                                        colorScheme='purple'
                                        type='submit'
                                        variant={"outline"}
                                        isLoading={loading}>
                                    UPLOAD
                                </Button>
                            </VStack>
                        </form>
                    </Box>
                </Grid>

            </ModalBody>

            <ModalFooter>
                <Button onClick={handleClose}>
                    CLOSE
                </Button>
            </ModalFooter>
        </ModalContent>

    </Modal>
  )
}

export default CourseModal

function VideoCard({title, description, num, lectureID, courseID, deleteButtonHandler, loading}){
    return(
        <Stack direction={["column", "row"]} 
                my={"8"}
                borderRadius={"lg"}
                boxShadow={"0 0 10px rgba(107, 70, 193, 0.5"}
                justifyContent={['flex-start', 'space-between']}
                p={['4', '8']}>
            <Box>
                <Heading size={"sm"}
                         children={`#${num} ${title}`} />
                <Text children={description} />
            </Box>

            <Button isLoading={loading} 
                    color={"purple.400"} 
                    onClick={()=>deleteButtonHandler(courseID, lectureID)}>
                <RiDeleteBin4Fill />
            </Button>
        </Stack>
    )
}




