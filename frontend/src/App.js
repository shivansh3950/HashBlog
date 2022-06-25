import Header from "./components/Header";
import React, { useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function App() {
  const dispath=useDispatch();
  const isLoggendIn=useSelector(state=>state.isLoggendIn);
  console.log(isLoggendIn);

  return <React.Fragment>
    <header>
    <Header />
    </header>
    <main>
      <Routes>
        {!isLoggendIn ? <Route path="/auth" element={<Auth/>}/> :
        <>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/add" element={<AddBlog/>}/>
        <Route path="/myBlogs" element={<UserBlogs/>}/>
        <Route path="/myBlogs/:id" element={<BlogDetail/>}/>
      </>}
      </Routes>
    </main>
    </React.Fragment>
}

export default App;
