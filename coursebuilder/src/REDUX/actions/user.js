import axios from "axios";
import { server } from "../store";

export const login = (email, password)=> async(dispatch)=>{
    try {
        dispatch({type: 'loginRequest'});
        const {data} = await axios.post(`${server}/Login`, {email, password}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        });
        console.log(data);

        dispatch({type: 'loginSuccess', payload: data});

    } catch (error) {
        dispatch({type: 'loginFail', payload: error.response.data.message});
    }
}

export const loadUser = ()=> async(dispatch)=>{
    try {
        dispatch({type: 'loadUserRequest'});
        const {data} = await axios.get(`${server}/me`, {//not sure if me or profile!!
            withCredentials: true
        });
        console.log(data);

        dispatch({type: 'loadUserSuccess', payload: data.user});

    } catch (error) {
        dispatch({type: 'loadUserFail', payload: error.response.data.message});
    }
}


export const logout = ()=> async(dispatch)=>{
    try {
        dispatch({type: 'logoutRequest'});
        const {data} = await axios.get(`${server}/Logout`, {
            withCredentials: true
        });
        console.log(data);

        dispatch({type: 'logoutSuccess', payload: data.message});

    } catch (error) {
        dispatch({type: 'logoutFail', payload: error.response.data.message});
    }
}


export const register = (formdata)=> async(dispatch)=>{
    try {
        dispatch({type: 'registerRequest'});
        const {data} = await axios.post(`${server}/Register`, formdata, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true
        });
    

        dispatch({type: 'registerSuccess', payload: data});

    } catch (error) {
        dispatch({type: 'registerFail', payload: error.response.data.message});
    }
}