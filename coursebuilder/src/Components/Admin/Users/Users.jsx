import React from 'react'
import Header from '../../Layout/Header/Header'
import { Box, Grid } from '@chakra-ui/react'
import Sidebar from '../Sidebar'
import cursor from '../../../Assets/Images/cursor.png'


const Users = () => {
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

export default Users