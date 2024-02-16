import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setlogin } from "./loginstate";


function Login(){

    // const email = useSelector(state => state.loginuser.email)
    // const password = useSelector(state => state.loginuser.password)

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const [login,setuserlogin]= useState({
        email: "",
        password: ""
    })

    const submit =()=> {
       
       axios({
  method: 'post',
  url: 'https://3939252a-cc9e-4f27-acf7-ffdf7e6ef91d.mock.pstmn.io/postuser',
  data: login
  }).then(function (response){
    if (login.email === "ajil@gmail.com" && login.password === "123456"){
        alert("success")
        localStorage.setItem("authTokn",response.data.user.token)
        dispatch(setlogin(response.data.user))
        navigate('/home')
    }else{
        alert("fail")
    }
        
  })
                
   }

    return(
        <>
        email<input type="text" onKeyUp={(e)=>{setuserlogin({
            ...login,
            email:e.target.value

        })}} /><br/>
        password<input type="password" onKeyUp={(e)=>{setuserlogin({
            ...login,
            password:e.target.value
        })
        }}/>
        <button type="button" onClick={submit} >submit</button>
        </>
    )

    }

export default Login