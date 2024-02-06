import { Avatar, Container, Heading, Stack, VStack, Text, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {RiSecurePaymentFill} from 'react-icons/ri'

// import introVideo from "../../Assets/Videos/The Mercedes-AMG G 63_ Stronger Than Time.mp4"
// import termsandCondition from "../../Assets/DOCS/termsandCondtion"

// const TandC = ({termsandCondition}) =>(
//   <Box>
//     <Heading size={"md"} 
//             children={"Terms & Conditions"}
//             textAlign={["center", "left"]}
//             my={"4"} />
//       <Box h={"sm"} p={"4"} overflowY={"scroll"}>

//         <Text textAlign={["center", "left"]}
//               letterSpacing={"widest"}
//               fontFamily={"heading"}>
//           {termsandCondition}
//         </Text>
//         <Heading my={"4"} size={"xs"} children="Full cash refunds within 7 days of purchase"/>

//       </Box>
//   </Box>
// )

const link = "https://avatars.githubusercontent.com/u/43705776?v=4"
const Founder = () => (
    <Stack direction={['column', 'row']}
            spacing={['4', '16']}
            padding={'8'}> 
        
        <VStack>
            <Avatar src={link} 
                    boxSize={['40', '48']} />
            <Text children="Co-Founder" 
                  opacity={0.7} color={"antiquewhite"} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={["center", "flex-start"]}>
            <Heading children="PRITHVI PRATHAP" size={["md", "xl"]} color={"antiquewhite"}/>
            <Text textAlign={["center", "left"]}
                  children={`Courses for Software development!`} color={"antiquewhite"} />
        </VStack>

    </Stack>
)

// const VideoPlayer = () => (
//   <Box>
//     <video
//       autoPlay 
//       loop
//       muted
//       controls 
//       controlsList="nodownload nofullscreen noremoteplayback" 
//       disableRemotePlayback
//       disablePictureInPicture
//       src = {introVideo}>

//     </video>
//   </Box>
// )

const About = () => {
  return (
    
    <Container maxW={"container.lg"}
      padding={"16"}
      boxShadow={'lg'}
      bg={"blackAlpha.300"}
      h={"90vh"}>
      <Heading children={"About US"}
        textAlign={["center", "left"]}
        color={"antiquewhite"} />
      <Founder />

      <Stack m={"8"} direction={["column", "row"]} alignItems={"center"}>
        <Text fontFamily={"consolas"} m={"8"} textAlign={["center", "left"]} color={"antiquewhite"}>
          Different types of courses to level up your software engineering skills with courses from AI Infrastructure
          to Leetcode preparation.
        </Text>

        <Link to={"/Subscribe"}>
          <Button variant={"ghost"} colorScheme='purple' >
            GET THE PRO PLAN
          </Button>
        </Link>

      </Stack>

      {/* <VideoPlayer /> */}
      {/*
        <TandC termsandCondition={termsandCondition} /> */}

      <HStack my={"4"} p={"4"}>
        <RiSecurePaymentFill />
        <Heading size={"xs"}
          fontFamily={"sans-serif"}
          children={"Payment is secured by VISA"}
          textTransform={"uppercase"} 
          color={"antiquewhite"}/>
      </HStack>

    </Container>
  )
}

export default About