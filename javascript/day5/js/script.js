const firebaseConfig = {


    apiKey: "AIzaSyA95ihC-LnszUkBiBHjbDFobzlAO7yIz4o",

    authDomain: "login-register-ae0a0.firebaseapp.com",

    databaseURL: "https://login-register-ae0a0-default-rtdb.firebaseio.com",

    projectId: "login-register-ae0a0",

    storageBucket: "login-register-ae0a0.appspot.com",

    messagingSenderId: "409114406393",

    appId: "1:409114406393:web:cf66315662dc3669126128"

};

firebase.initializeApp(firebaseConfig);

// let alldata = []
let db = firebase.database();
let auth= firebase.auth();
let dataes = db.ref("user");

// // let loginform=db.ref("user")
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
//     let a=db.ref("user").set(userDetails)
//     console.log(a)
// //     // let ref = firebase.database().ref("/userProfile/"+this.userId);

// //     loginformDB.child("workouts").push(userDetails);
//     // localStorage.setItem("user",JSON.stringify(userDetails))
function loger() {
    alert("Success")
}

// function validation(){
//     let emailfmt= /^[a-zA-Z0-9]+@gamil\.com$/
// }

function loginCheck() {
    let login_email = document.getElementById("emails").value;
    let login_password = document.getElementById("passwords").value;
     
    auth.signInWithEmailAndPassword(login_email,login_password).then(function(){
        let user=currentuser;
    })

    dataes.once(`value`).then(shot => {
        let data = shot.val();
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            var e = data[i].email
            var p = data[i].password
            var n = data[i].name
            // console.log(details[i].email,details[i].password,details[i].name)
            if (e == login_email && p == login_password) {
                localStorage.setItem("loggedIn", true)
                localStorage.setItem("loginperson", n)

                window.location = "home.html"
                box()

                alert("Success")

            }
        }
    })
}


function logout() {
    localStorage.removeItem("loggedIn")
    window.location = "login.html"
}
function register() {
    let name_obj = document.getElementById("name").value;
    let email_obj = document.getElementById("email").value;
    let password_obj = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email_obj,password_obj).then(function(){
        let user= auth.currentuser;

    })

    dataes.once(`value`).then(shot => {
        let data = shot.val();
        console.log(data)

        for (i = 0; i < data.length; i++) {
            if (email_obj != data[i].email) {
                reg_data = {
                    email: email_obj,
                    password: password_obj,
                    name: name_obj
                }

                if (data) {
                    data.push(reg_data);
                    db.ref('user').set(data);
                }
                else {
                    db.ref(`user/${0}`).set(reg_data);
                }

                alert("succesfully registred.login")
                window.location = "login.html"
            }
            else if (email_obj === data[i].email) {
                alert("your email is already registered")
                break
            }
        }
    })
}

function regpage() {
    window.location = "register.html"
}



// // let list=["a","b","c"];
function box() {
    let person = localStorage.getItem("loginperson")
    document.getElementById("intro").innerHTML = `Welcome ${person}`

    dataes.once(`value`).then(shot => {
        let data = shot.val();

        // let o_list=data;

        // console.log(o_list)

        let htmldata = "";
        for (let i = 0; i < data.length; i++) {
            htmldata = htmldata + `<tr>
    <td id="newname+'${i}'">${data[i].name}</td>
    <td id="newemail+'${i}'">${data[i].email}</td>
    <td align="center"><button onclick="update('${data[i].email}')">update</button></td>
    <td align="center"><button onclick="deletes('${data[i].email}')">delete</button></td>
    <tr>`
        }
        document.getElementById("list-table").innerHTML = htmldata;
    })
}

function deletes(mail) {

    dataes.once(`value`).then(shot => {
        let data = shot.val();

        let a = data;
        console.log(a)
        let newdata = []
        for (i = 0; i < a.length; i++) {
            if (a[i].email != mail) {
                newdata.push(a[i])
                console.log(newdata)
            }
        }
        alert(mail)
        // let newlist=JSON.stringify(newdata)
        // localStorage.setItem("user",newlist)
        db.ref("user").set(newdata)
        box()
    })
}

function update(mail) {

    dataes.once("value").then(snapahot => {
        let b = snapahot.val()


        for (i = 0; i < b.length; i++) {
            if (b[i].email === mail) {
                let pname = prompt(`name`, `${b[i].name}`)
                let pmail = prompt(`email`, `${b[i].email}`)
                console.log(pname)
                if (pname != null) {
                    document.getElementById(`newname+'${i}'`).innerHTML = pname;
                    console.log(pname)
                }
                if (pmail != null) {
                    document.getElementById(`newemail+'${i}'`).innerHTML = pmail;
                    console.log(pmail)
                } console.log(b[i].password)
                b[i] = ({
                    email: pmail,
                    password: b[i].password,
                    name: pname
                })
            }
        } db.ref("user").set(b)
        console.log(b)
    })
}
// console.log("hhggf")

function secure() {

    if (!localStorage.getItem("loggedIn")) {
        window.location = "login.html"

        console("box")
    }
    box()
}

function forpasswordfn() {
    // alert("hi")
    dataes.once(`value`).then(shot => {
        let data = shot.val();

        let forpassinput = document.getElementById("forgetemail").value;
        let fpassword = data;
        // if (forpassinput in fpassword.email){
        for (let i = 0; i < fpassword.length; i++) {
            if (forpassinput == fpassword[i].email) {

                document.getElementById("fpassword").style.display = "block";
                paswd = fpassword[i].password
                document.getElementById("fpas").innerHTML = " : " + paswd
            }
            else if (forpassinput != fpassword[i].email) {
                alert("email not registered")
                break
            }
        }
    })
}

function comebackloginpage() {
    alert("ok")
    window.location = "login.html"

}














