const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    image:String,
    caption:String
});

const Postmodel=mongoose.model('Post',postSchema);

module.exports=Postmodel;