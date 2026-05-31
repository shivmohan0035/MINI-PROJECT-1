import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        
        e.preventDefault();  //jab form submit hota hai to page reload hota hai, isse rokne ke liye e.preventDefault() ka use kiya jata hai. Isse form submit hone par page reload nahi hoga aur hum apne custom logic ko execute kar sakte hain.
        const formData = new FormData(e.target);
         axios.post("http://localhost:5000/create-post", formData)
        .then((res)=>{
            alert("Post created successfully");
            navigate("/feed");
        })
        .catch((error)=>{
            console.error("Error creating post:", error);
        });
    };

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} >
        <input type="file" name="image" accept="image/*" />
        <input type="text" placeholder="Enter a caption..." name="caption" required />
        
        <button type="submit" >Submit</button>
      </form>   


    </section>
  );
};

export default CreatePost;