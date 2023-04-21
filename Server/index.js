import express from 'express';
import dotenv from 'dotenv'
import blogRouter from './Routes/blog-routes';
import router from './Routes/user-routes';
import cors from 'cors'
import mongoose from 'mongoose';



dotenv.config();


const PORT = 5001 || process.env.PORT;
const  MONGO_URL = process.env.MONGO_URL
const app = express();
app.use(cors())
app.use (express.json())
app .use ("/api/user",router)
app.use("/api/blog",blogRouter)


mongoose
.connect(MONGO_URL)
.then(()=>
console.log("connect to the database"))
.catch((err) => console.log(err))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });