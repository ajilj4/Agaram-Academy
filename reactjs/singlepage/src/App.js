// import React, { useEffect } from "react";
import Login from "./login";
import List from "./todos/List";
import Members from "./todos/member";
import { useState, useEffect } from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


export default function App(){

  useEffect(()=>{
    alert("hi")
  })

    let [isLogin,setisLogin]=useState({
      condition:false,
    email:""});

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Login isLogin={isLogin} setisLogin={setisLogin}/>,
        },
        {
          path: "/list",
          element: <List isLogin={isLogin} setisLogin={setisLogin}/>,
        },
        {
          path: "/member",
          element: <Members isLogin={isLogin} setisLogin={setisLogin}/>,
        },
      ]);

      return(
        <RouterProvider router={router} />
      )
      
    
}

  