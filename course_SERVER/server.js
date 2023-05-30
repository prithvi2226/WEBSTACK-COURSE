import app from "./app.js";
import { connectDB } from "./config/database.js";

connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`SERVER IS UP ON PORT: ${process.env.PORT}`)
})