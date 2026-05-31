import React, {useState, useEffect} from "react";
import axios from "axios"; // Axios is a popular JavaScript library used to make HTTP requests from the browser or Node.js. It provides an easy-to-use API for sending asynchronous HTTP requests to REST endpoints and performing CRUD operations. In this code, we are using Axios to fetch posts from the backend API at "http://localhost:5000/posts". The get method of Axios is used to send a GET request to the specified URL, and it returns a promise that resolves with the response data. We then update the state of the posts using setPost with the data received from the backend.

const Feed = () => {
   const [posts, setPost] = useState([]);


   // useEffect is a hook in React that allows you to perform side effects in functional components. It takes two arguments: a function that contains the side effect logic and an optional dependency array. The function will be executed after the component renders, and it can be used to fetch data, set up subscriptions, or manipulate the DOM.
   useEffect(()=>{ 
    axios.get("http://localhost:5000/posts")
    .then((res)=>{
        setPost(res.data.posts);
    })
    .catch((error)=>{
        console.error("Error fetching posts:", error);
    })},[])
    
    return (
        <section className="feed-section">
            {  
                 posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className="post-card">
                            <img src={post.image} alt={post.caption}  />
                            <p>{post.caption}</p>
                        </div>  
                    ))
                ) : (
                    <h1>No posts available.</h1>
                )   
            } 
        </section>
        
    );
};

export default Feed;