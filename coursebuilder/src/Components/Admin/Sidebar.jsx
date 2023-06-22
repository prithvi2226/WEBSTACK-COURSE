import { Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddBoxLine, RiDashboard2Fill, RiEye2Fill, RiUser2Fill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    
    const Location = useLocation();
  return (

    <VStack spacing={'8'}
          p={"16"}
          boxShadow={"-2px 0 10px rgba(107, 70, 193, 0.5)"}>

          <LinkButton Icon={RiDashboard2Fill} text={"Dashboard"} url={"Dashboard"} active={Location.pathname === "/Admin/Dashboard"} />
          <LinkButton Icon={RiAddBoxLine} text={"Create Course"} url={"CreateCourse"} active={Location.pathname === "/Admin/CreateCourse"} />
          <LinkButton Icon={RiEye2Fill} text={"All Courses"} url={"AdminCourses"} active={Location.pathname === "/Admin/AdminCourses"} />
          <LinkButton Icon={RiUser2Fill} text={"Users"} url={"Users"} active={Location.pathname === "/Admin/Users"} />


      </VStack>
  )
}

export default Sidebar

function LinkButton({url, Icon, text, active}) {
    return (
        
        <Link to={`/Admin/${url}`}>
            <Button colorScheme={active ? "purple" : ""} fontSize={'larger'} variant={"ghost"}>
                <Icon style={{ margin: "4" }} />
                <Text color={"antiquewhite"}>{text}</Text>
            </Button>
        </Link>
    )
}
