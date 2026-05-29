const express=require('express');
const multer=require('multer');
const uploadImage=require('./services/storage.service');
const app=express();
app.use(express.json());  // middleware to parse JSON request bodies---> when data comes in the form of JSON and raw formate, this middleware will parse it and make it available in req.body
const Postmodel=require('./models/post.model');


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