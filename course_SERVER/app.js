import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";

config({
  path: "./config/config.env",
});

const app = express();

// Using middlewares
app.use(express.json()); // Invoke the express.json() middleware to parse JSON data

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Importing and using routes
import course from "./Routes/courseRoutes.js";
import user from "./Routes/userRoutes.js";

app.use("/api/v1", course);
app.use("/api/v1", user);

app.use(ErrorMiddleware);

export default app;
