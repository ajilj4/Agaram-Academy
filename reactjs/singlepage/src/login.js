import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function Login(props){

//    useEffect(()=>{
//     login()
//    },[])

    const navigate = useNavigate();

    let [loginuser,setloginuser]=useState({
        email : "ajil@gmail.com",
        password: 123456
    })

    // axios({
    //     method: 'post',
    //     url: ("http://agaram.academy/api/action.php"),
    //     data: {
    //         request : "ajil",
    //         email : loginuser.email,
    //         password: loginuser.password
    //     }
    //   });

    // console.log(props.isLogin.condition)
    // axios({
    //     method: 'get',
    //     url: ("http://agaram.academy/api/action.php"),
    //     // responseType: 'stream'
    //     // headers: {"request":"getAllMembers"},
    //     data:{
    //         request:"getAllMembers"
    //     }
    //   })
    //     .then(function (response) {
    //       console.log(response)
    //     });
    
    const login=()=>{
        if (loginuser.email=="ajil@gmail.com" && loginuser.password==123456 ){
            props.setisLogin({condition:true,email:loginuser.email})
            navigate("/list");
        }
        else{
            // alert("fail")
            props.setisLogin({condition:false})
        }
    }

    return(
        <>
        {JSON.stringify(loginuser)}
            <lable>Email<input type="email" defaultValue={loginuser.email} onKeyUp={(e)=>setloginuser({
                ...loginuser,
                email: e.target.value
            })}/></lable><br></br>
            <lable>Password<input type="password" defaultValue={loginuser.password} onKeyUp={(e)=>setloginuser({
                ...loginuser,
                password: e.target.value
            })}/></lable>
            <br></br>
            <button type="button" onClick={()=>{login();
            axios({
                     method: 'get',
                     url: ("https://jsonplaceholder.typicode.com/posts")
                     .then(function (response) {
                              console.log(response)
                           
                     
                   })})}}>Login</button>
                   
        </>
    )
}


