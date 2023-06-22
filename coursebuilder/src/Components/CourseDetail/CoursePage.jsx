import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { getCourseLectures } from '../../REDUX/actions/course'
import Loader from '../Layout/Loader/Loader'

const CoursePage = ({user}) => {

    const [LectureNumber, setLectureNumber] = useState(0);

    const {lectures, loading} = useSelector(state=>state.courses)
 
    const dispatch = useDispatch();
    const params = useParams();
    
    useEffect(() => {
        dispatch(getCourseLectures(params.id))
    }, [dispatch, params.id])


    if(user.role !== "admin" && 
        (user.subscription === undefined || user.subscription.status !== "active")){
            return(
                <Navigate to={"/Subscribe"} />
            );
    };


  return (
    
    loading ? <Loader /> : (
        <Grid minH={"90vh"}
          templateColumns={["1fr", "3fr 1fr"]}>

          {
            lectures && lectures.length > 0 ? (
                <>
                <Box>
            <video
                width={"90%"}
                controls
                controlsList="nodownload  noremoteplayback"
                disableRemotePlayback
                disablePictureInPicture
                src={lectures[LectureNumber].video.url}>
            </video>
            <Heading m={"4"} 
                    children={`#${LectureNumber + 1} ${lectures[LectureNumber].title}`} color={"antiquewhite"}/>

            <Heading m={"4"} 
                    children={"Description"} color={"antiquewhite"} />
            
            <Text m={"4"} children={lectures[LectureNumber].description} color={"antiquewhite"}/>

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
                        <Text noOfLines={1} color={"antiquewhite"}>
                            #{index + 1} {item.title}
                        </Text>
                    </button>
                ))
            }
          </VStack>

                </>
            ) : <Heading children="LECTURES YET TO BE UPLOADED" fontFamily={"consolas"} fontWeight={"bold"} color={"antiquewhite"} />
          }
      </Grid>
    )
    
  )
}

export default CoursePage