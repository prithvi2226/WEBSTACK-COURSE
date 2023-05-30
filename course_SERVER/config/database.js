import mongoose from "mongoose";


export const connectDB = async ()=>{
    const {conection} = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Mongodb connected with ${conection.host}`)
}
