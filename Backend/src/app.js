const express=require('express');
const multer=require('multer');
const uploadImage=require('./services/storage.service');
const app=express();
app.use(express.json());  // middleware to parse JSON request bodies---> when data comes in the form of JSON and raw formate, this middleware will parse it and make it available in req.body
const Postmodel=require('./models/post.model');

//integrate frontend and backend using cors and axios
const cors=require('cors'); // middleware to enable Cross-Origin Resource Sharing (CORS) in the Express application. CORS is a security feature implemented by web browsers that restricts web pages from making requests to a different domain than the one that served the web page. By using the cors middleware, you can allow your frontend application (which may be running on a different domain or port) to access the backend API without encountering CORS errors.
app.use(cors());   //it is used to connect frontend and backend, without it we will get CORS error in the browser when we try to fetch data from the backend API. By using app.use(cors()), we are allowing all origins to access our backend API. In a production environment, you may want to configure CORS more restrictively by specifying allowed origins, methods, and headers.


const upload=multer({ storage:multer.memoryStorage() }); // it is middleware, Configure multer to store uploaded files in memory

app.post('/create-post',upload.single("image"),async(req,res)=>{
    
    
    const result=await uploadImage(req.file.buffer);
     const post=await Postmodel.create({
        image:result.url,
        caption:req.body.caption
    });
    return res.status(201).json({ 
        message: "Post created successfully" ,
        post
    });
});

app.get('/posts',async(req,res)=>{
    const posts=await Postmodel.find();
    return res.status(200).json({   
        message:"Posts fetched successfully",
        posts
    });
});

module.exports=app;