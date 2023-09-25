const firebaseConfig = {
    apiKey: "AIzaSyCyOgfPibvrWjQJ9VKus8cpxegiMVQMPKc",
    authDomain: "ogin--register--webpage.firebaseapp.com",
    databaseURL: "https://ogin--register--webpage-default-rtdb.firebaseio.com",
    projectId: "ogin--register--webpage",
    storageBucket: "ogin--register--webpage.appspot.com",
    messagingSenderId: "72285358001",
    appId: "1:72285358001:web:73c6fcd0eab88dcb6d9f90"
  };

firebase.initializeApp(firebaseConfig);

var loginformDB= firebase.database().ref("loginform")
// let userDetails=[
//         {
//         email:"ajilj@gmail.com",
//         password:"12345678",
//         name:"Ajil"
//     },
//     {
//         email:"sobith@gmail.com",
//         password:"987654",
//         name:"Sobith"
//     },
//     {
//         email:"ajay@gmail.com",
//         password:"987654",
//         name:"ajay"
//     }
//     ]
    
//     localStorage.setItem("user",JSON.stringify(userDetails))
function loger(){
    alert("Success")
}
function loginCheck(){
    let login_email=document.getElementById("emails").value;
    let login_password=document.getElementById("passwords").value;
    var details=JSON.parse(localStorage.getItem("user"))
    for (var i=0;i<details.length;i++){
        var e=details[i].email
        var p=details[i].password
        var n=details[i].name
        // console.log(details[i].email,details[i].password,details[i].name)
        if (e==login_email&&p==login_password){
            localStorage.setItem("loggedIn",true)
            localStorage.setItem("loginperson",n)
            // document.getElementById("login").style.display="none"
            // document.getElementById("top").style.display="block"
            
            console.log()
            window.location="home.html"
            box()

        // alert("Success")
        }}
        // if(localStorage.getItem("loggedIn")===true){


}
// function loginCheck(){
//     if(localStorage.getItem('loggedIn')){
//          a=localStorage.getItem("logging")
//         document.getElementById('welcome').innerHTML=welcome `${n}`
//         // window.location="home.html"
//         getdata()
        
//     }
// }
function logout(){
    localStorage.removeItem("loggedIn")
    window.location="login.html"
    // document.getElementById("login").style.display="block"
    // document.getElementById("top").style.display="none"
}
// function loging(){
//     if(localStorage.getItem("loggedIn",true)){
//     document.getElementById("login").style.display="none"
//     document.getElementById("top").style.display="block"
//     // document.getElementById("intro").innerHTML=`Welcome ${n}`
// }}
function register(){
    let name_obj= document.getElementById("name").value;
    let email_obj= document.getElementById("email").value;
    let password_obj= document.getElementById("password").value;
    // let profile={};
    // profile.names=name_obj;
    // profile.emails=email_obj;
    // profile.passwords=password_obj;
    // console.log(profile)
    // localStorage.setItem("new_list",profile)
    if(localStorage.getItem("user")){
        parselocaldata= JSON.parse(localStorage.getItem("user"))
    }
    else{
        let parselocaldata=[]
    }
    
    console.log(parselocaldata)
    parselocaldata.push({
        email: email_obj,
        password:password_obj,
        name: name_obj
    })
    localStorage.setItem("user",JSON.stringify(parselocaldata));
    alert("succesfully registred.login")
    window.location="login.html"
}

function regpage(){
    window.location="register.html"
    // document.getElementById("register").style.display="block"
    // document.getElementById("login").style.display="none"
    
}



// let list=["a","b","c"];
function box(){
let person= localStorage.getItem("personin")
document.getElementById("intro").innerHTML=`Welcome ${person}`
let listt=localStorage.getItem("user")
    console.log(listt)
let o_list=JSON.parse(listt) 

   
let htmldata="";
for (let i=0;i<o_list.length;i++){
    htmldata=htmldata+`<tr>
    <td id="newname+'${i}'">${o_list[i].name}</td>
    <td id="newemail+'${i}'">${o_list[i].email}</td>
    <td><button onclick="update('${o_list[i].email}')">update</button></td>
    <td><button onclick="deletes('${o_list[i].email}')">delete</button></td>
    <tr>`
}
document.getElementById("list-table").innerHTML=htmldata;
}

function deletes(mail){
        let a=JSON.parse(localStorage.getItem("user"))
        console.log(a)
        let newdata=[]
        for(i=0;i<a.length;i++){
            if (a[i].email != mail){
                newdata.push(a[i])
                console.log(newdata)
            }
        }
        alert(mail)
        let newlist=JSON.stringify(newdata)
        localStorage.setItem("user",newlist)
        box()

}

function update(mail){
let b=JSON.parse(localStorage.getItem("user"))
console.log(b)

// alert(mail)
for (i=0;i<b.length;i++){
    if (b[i].email===mail){
        let pname =prompt(`name`,`${b[i].name}`)
        let pmail =prompt(`email`,`${b[i].email}`)
        console.log(pname)
        if (pname != b[i].name) {
            document.getElementById(`newname+'${i}'`).innerHTML = pname;
            console.log(pname)               
       }
        if(pmail != b[i].email) {
            document.getElementById(`newemail+'${i}'`).innerHTML = pmail;
            console.log(pmail)
                }console.log(b[i].password)
        b[i]=({
            email: pmail,
            password:b[i].password,
            name: pname
        })
}
}localStorage.setItem("user",JSON.stringify(b))
console.log(b)
}
console.log("hhggf")
function secure(){
    console.log('jjj')
    if(!localStorage.getItem("loggedIn")){
        window.location="login.html"
       
        console("box")
    }
    box()
}

function forpasswordfn(){
    // alert("hi")
    let forpassinput=document.getElementById("forgetemail").value;
    let fpassword=JSON.parse(localStorage.getItem("user"));
    // if (forpassinput in fpassword.email){
    for (let i=0;i<fpassword.length;i++){
        if (forpassinput==fpassword[i].email){
            
            document.getElementById("fpassword").style.display="block";
            paswd=fpassword[i].password
            document.getElementById("fpas").innerHTML=" : "+paswd

        }
    // }

    }}
    function comebackloginpage(){
        alert("ok")
        window.location="login.html"

    }

    












