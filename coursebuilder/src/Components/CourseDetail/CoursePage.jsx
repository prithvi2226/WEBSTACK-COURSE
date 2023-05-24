import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from "../../Assets/Videos/The Mercedes-AMG G 63_ Stronger Than Time.mp4"
import Header from '../Layout/Header/Header'

const CoursePage = () => {

    const [LectureNumber, setLectureNumber] = useState(0);

    const lectures = [
        {
            _id: 'sada',
            title: 'sample',
            description: 'GAME Up boy',
            video: {
                url: 'sads',
            },
        },
        {
            _id: 'sada2',
            title: 'sample2',
            description: 'GAME Up boy',
            video: {
                url: 'sads',
            },
        },
        {
            _id: 'sada3',
            title: 'sample3',
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
                width={"90%"}
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

          <VStack>
            {
                lectures.map((item, index)=>(
                    <button key={item._id}
                            onClick={() => setLectureNumber(index)}
                            style={{
                                width: "100%",
                                padding: "1rem",
                                textAlign: "center",
                                margin: 0,
                                borderBottom: '1px solid rgba(0, 0, 0, 0.2)',    
                                marginLeft: "-50px"
                            }}>
                        <Text noOfLines={1}>
                            #{index + 1} {item.title}
                        </Text>
                    </button>
                ))
            }
          </VStack>

      </Grid></>
  )
}

export default CoursePage