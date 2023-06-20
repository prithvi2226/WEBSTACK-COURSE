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


export const deleteCourse = (id)=> async dispatch=>{

    try {
        dispatch({type: 'deleteCourseRequest'});

        const config =  {
            withCredentials: true,
        }

        const {data} = await axios.delete(`${server}/coursedet/${id}`, config);

        dispatch({type: 'deleteCourseSuccess', payload: data.message});
    } catch (error) {
        dispatch({
            type: 'deleteCourseFail',
            payload: error.response.data.message,
        })

    }
};



export const addLecture = (id, formData)=> async dispatch=>{

    try {
        dispatch({type: 'addLectureRequest'});

        const config =  {
            headers: {"Content-type": "multipart/form-data"},
            withCredentials: true,
        }


        const {data} = await axios.post(`${server}/coursedet/${id}`, formData, config);

        dispatch({type: 'addLectureSuccess', payload: data.message});
    } catch (error) {
        dispatch({
            type: 'addLectureFail',
            payload: error.response.data.message,
        })

    }
};



export const deleteLecture = (courseId, lectureId)=> async dispatch=>{

    try {
        dispatch({type: 'deleteLectureRequest'});

        const config =  {
            withCredentials: true,
        }

        const {data} = await axios.delete(
            `${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`, config);

        dispatch({type: 'deleteLectureSuccess', payload: data.message});
    } catch (error) {
        dispatch({
            type: 'deleteLectureFail',
            payload: error.response.data.message,
        })

    }
};
