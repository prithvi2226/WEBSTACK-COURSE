import { Box, Grid, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Header from '../../Layout/Header/Header'
import cursor from '../../../Assets/Images/cursor.png'
import Sidebar from "../Sidebar"
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'

const Databox = ({title, qty, qtyPercentage, profit}) =>(
  <Box w={["full", "20%"]}
        boxShadow={"-2px 0 10px rgba(107, 70, 193, 0.5)"}
        p={"8"}
        borderRadius={"lg"} >
    
    <Text children={title} />

    <HStack>
      <Text children={`${qtyPercentage}%`} />
      {profit?<RiArrowUpLine color='green' /> : (
        <RiArrowDownLine color='red' />
      )}
    </HStack>
  </Box>
)

const Dashboard = () => {
  return (
    <>
    <Header />
    <Grid minH={"100vh"}
      templateColumns={['1fr', '5fr 1fr']}
      css={{cursor: `url(${cursor}), default`, }}>
      
      <Box boxSizing='border-box'
            py={"16"}
            px={['4', '0']}>
        
        <Text textAlign={'center'}
              opacity={0.5}
              children={`Last Change was on ${String(new Date()).split('G')[0]}`} />
          
          <Heading children="Dashboard"
                    ml={['0', '16']}
                    mb={"16"}
                    textAlign={['center', 'left']} />
          
          <Stack direction={['column', 'row']}
                  minH={"24"}
                  justifyContent={'space-evenly'}>
            
            <Databox title={"Views"}
                      qty={123}
                      qtyPercentage={30}
                      profit = {true} />

          </Stack>


      </Box>

      <Sidebar />

    </Grid>
    </>
  )
}

export default Dashboard