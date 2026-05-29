const dotenv=require('dotenv').config();   // Load environment variables from .env file
const app=require('./src/app');
const connectDB=require('./src/db/db');
const Postmodel=require('./src/models/post.model');

connectDB();


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port :${process.env.PORT}`);
});
