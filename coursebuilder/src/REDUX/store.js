import {configureStore} from "@reduxjs/toolkit"
import { profileReducer, subscriptionReducer, userReducer } from "./reducers/userReducer";
import { courseReducer } from "./reducers/courseReducer";
import { adminReducer } from "./reducers/adminReducer";


const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        courses: courseReducer,
        subscription: subscriptionReducer,
        admin: adminReducer,
    },
});

export default store;
export const server = 'https://course-bundler1.herokuapp.com/api/v1'