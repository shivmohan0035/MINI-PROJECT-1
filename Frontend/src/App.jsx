import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";//it uses help to create different routes/pages in our application. It allows us to define different paths and associate them with specific components that should be rendered when the user navigates to those paths. In this code, we are using BrowserRouter as Router to wrap our application and Routes to define the different routes for our application. Each Route component specifies a path and the corresponding component that should be rendered when the user navigates to that path. For example, when the user navigates to "/create-post", the CreatePost component will be rendered, and when the user navigates to "/feed", the Feed component will be rendered. 
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<CreatePost />} />
        
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;