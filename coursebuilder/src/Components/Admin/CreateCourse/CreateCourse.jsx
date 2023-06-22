import React, { useEffect, useState } from 'react'
import { Container, Grid, Heading, VStack, Input, Select, Image, Button } from '@chakra-ui/react'
import Sidebar from '../Sidebar'
import cursor from '../../../Assets/Images/cursor.png'
import { fileUploadCss } from '../../Auth/Register'
import { createCourse } from '../../../REDUX/actions/admin'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'


const categories = [
  "Interview Prep",
  "INTERVIEW DSA PRACTICE",
  "AWS",
]


const CreateCourse = () => {


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const changeImageHandler = (e) => {
      
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImagePrev(reader.result);
      setImage(file);
    }

  }

  const dispatch = useDispatch();

  const {loading, error, message} = useSelector(state=>state.admin)

  const submitHandler =(e) =>{
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("createdBy", createdBy);
    myForm.append("file", image);

    dispatch(createCourse(myForm));
  }

  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type: 'clearError'} );
    }
    if(message){
      toast.success(message);
      dispatch({type: 'clearMessage'} );
    }
  }, [dispatch, error, message])
  

  return (
  
    <Grid minH={"100vh"}
      templateColumns={['1fr', '5fr 1fr']}
      css={{cursor: `url(${cursor}), default`, }}>
      
      <Container py={"16"}>

        <form action="" onSubmit={submitHandler}>
          <Heading textTransform={'uppercase'}
                    children= "Create Course"
                    my={"16"}
                    textAlign={['center', 'left']}
                    color={"antiquewhite"} />

          <VStack m={"auto"} spacing={"8"}>
            <Input required
                          value={title} 
                          onChange={e => setTitle(e.target.value)} 
                          placeholder='Title'
                          type={'text'}
                          focusBorderColor="purple.300"
                          color={"antiquewhite"}
                          />{' '}
            <Input required
                          value={description} 
                          onChange={e => setDescription(e.target.value)} 
                          placeholder='Description'
                          type={'text'}
                          focusBorderColor="purple.300"
                          color={"antiquewhite"}
                          />            
            <Input required
                          value={createdBy} 
                          onChange={e => setCreatedBy(e.target.value)} 
                          placeholder='Creator'
                          type={'text'}
                          focusBorderColor="purple.300"
                          color={"antiquewhite"}
                          />
            
            <Select focusBorderColor='purple.300'
                    value={category}
                    onChange={e => setCategory(e.target.value)}>
              
              <option value={""} color={"antiquewhite"}>Category</option>
              {categories.map(item=>(
                <option key={item} value={"item"}>
                  {item}
                </option>
              ))}
            </Select>

            <Input required  
                  type={'file'}
                  focusBorderColor="purple.500"
                  accept="image/*"
                  color={"antiquewhite"}
                  css={{
                    "&::file-selector-button": {
                      ...fileUploadCss, 
                      color: "purple",
                    },
                  }}
                  onChange={changeImageHandler}

                      />
            
            {imagePrev && (
              <Image src={imagePrev}
                      boxSize={"64"}
                      objectFit={'contain'} />
            )}

            <Button w={"full"} 
                    colorScheme='purple'
                    isLoading={loading}
                    type='submit'>
              Create
            </Button>



          </VStack>
          
        </form>
        


      </Container>

      <Sidebar />

    </Grid>
  )
}

export default CreateCourse