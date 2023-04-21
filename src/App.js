import Header from "./component/Header";
import Blogs from "./component/Blogs";
import UserBlogs from "./component/UserBlogs";
import BlogDetail from "./component/BlogDetail";
import AddBlog from "./component/AddBlog";
import './App.css';
import React,{useEffect} from "react";
import {Route,Routes} from "react-router-dom"
import Auth from "./component/Auth";
import { useDispatch, useSelector } from "react-redux";
import {authActions } from "./store";



function App() {
  const dispath =useDispatch()
  const isLoggedIn =useSelector((state)=>state.isLoggedIn)
  console.log(isLoggedIn)
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispath(authActions.login())
    }
  },[dispath])
  return (
    <React.Fragment>
      <header><Header/></header>
      <main>
        <Routes>
          {!isLoggedIn ? ( 
            <Route path="/auth" element={<Auth/>}/>

          ):(<>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blogs/add" element={<AddBlog/>}/>
          <Route path="/myBlogs" element={<UserBlogs/>}/>
          <Route path="/myBlogs/:id" element={<BlogDetail/>}/>

          </>)}
        </Routes>
      </main>
    </React.Fragment>
    
      
      
  );
}

export default App;
