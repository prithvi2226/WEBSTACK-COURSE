import { Avatar, Container, Heading, Stack, VStack, Text, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {RiSecurePaymentFill} from 'react-icons/ri'
import Header from '../Layout/Header/Header'
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
                  opacity={0.7} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={["center", "flex-start"]}>
            <Heading children="Prith" size={["md", "xl"]} />
            <Text textAlign={["center", "left"]}
                  children={`IM THE BO$$ BITCH! I make the content `} />
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
    <><Header /><Container maxW={"container.lg"}
      padding={"16"}
      boxShadow={'lg'}>
      <Heading children={"About US"}
        textAlign={["center", "left"]} />
      <Founder />

      <Stack m={"8"} direction={["column", "row"]} alignItems={"center"}>
        <Text fontFamily={"consolas"} m={"8"} textAlign={["center", "left"]}>
          I got courses that will get the skills for u to pay the bills
        </Text>

        <Link to={"/Subscribe"}>
          <Button variant={"ghost"} colorScheme='purple'>
            CHECK OUR PLANS
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
          textTransform={"uppercase"} />
      </HStack>

    </Container></>
  )
}

export default About