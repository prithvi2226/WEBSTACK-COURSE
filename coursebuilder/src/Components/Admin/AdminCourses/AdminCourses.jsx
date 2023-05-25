import React from 'react'
import cursor from '../../../Assets/Images/cursor.png'
import Sidebar from '../Sidebar'
import { Box, Grid } from '@chakra-ui/react'
import Header from '../../Layout/Header/Header'

const AdminCourses = () => {
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

export default AdminCourses