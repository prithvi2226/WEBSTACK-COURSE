import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`SERVER IS UP ON PORT: ${process.env.PORT}`)
})