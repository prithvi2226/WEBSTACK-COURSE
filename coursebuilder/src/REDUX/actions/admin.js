import axios from "axios";
import { server } from "../store";


export const createCourse = (formData)=> async dispatch=>{

    try {
        dispatch({type: 'createCourseRequest'});

        const config =  {
            headers: {"Content-type": "multipart/form-data"},
            withCredentials: true,
        }

        const {data} = await axios.post(`${server}/createcourse`, formData, config);

        dispatch({type: 'createCourseSuccess', payload: data.message});
    } catch (error) {
        dispatch({
            type: 'createCourseFail',
            payload: error.response.data.message,
        })

    }
}

