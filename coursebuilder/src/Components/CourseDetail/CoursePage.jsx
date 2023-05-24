import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import introVideo from "../../Assets/Videos/The Mercedes-AMG G 63_ Stronger Than Time.mp4"
import Header from '../Layout/Header/Header'

const CoursePage = () => {

    const LectureNumber = 0;

    const lectures = [
        {
            _id: 'sada',
            title: 'sample',
            description: 'GAME Up boy',
            video: {
                url: 'sads',
            },
        },
    ];
  return (
    <> <Header />
    <Grid minH={"90vh"}
          templateColumns={["1fr", "3fr 1fr"]}>

          <Box>
            <video
                width={"100%"}
                controls
                controlsList="nodownload  noremoteplayback"
                disableRemotePlayback
                disablePictureInPicture
                src={introVideo}>
            </video>
            <Heading m={"4"} 
                    children={`#${LectureNumber + 1} ${lectures[LectureNumber].title}`} />

            <Heading m={"4"} 
                    children={"Description"} />
            
            <Text m={"4"} children={lectures[LectureNumber].description} />

            

          </Box>

      </Grid></>
  )
}

export default CoursePage