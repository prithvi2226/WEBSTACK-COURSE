import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import Header from '../../Layout/Header/Header'
import cursor from '../../../Assets/Images/cursor.png'
import Sidebar from "../Sidebar"

const Dashboard = () => {
  return (
    <>
    <Header />
    <Grid minH={"100vh"}
      templateColumns={['1fr', '5fr 1fr']}
      css={{cursor: `url(${cursor}), default`, }}>
      
      <Box>

      </Box>

      <Sidebar />

    </Grid>
    </>
  )
}

export default Dashboard