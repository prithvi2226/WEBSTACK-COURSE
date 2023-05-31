import express from "express";
import {config} from "dotenv"
import ErrorMiddleware from "./middlewares/Error.js"


config({
    path:"./config/config.env"
})

const app = express();

//importing and using routes
import course from "./Routes/courseRoutes.js";
import user from "./Routes/userRoutes.js";


app.use("/api/v1", course)
app.use("/api/v1", user)

export default app;

app.use(ErrorMiddleware);
