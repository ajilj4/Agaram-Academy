
const firebaseConfig = {

  apiKey: "AIzaSyAzaQDyqoEObv6PWxKJbbsfMcoEYSpbfRA",

  authDomain: "dummy-7b608.firebaseapp.com",

  databaseURL: "https://dummy-7b608-default-rtdb.firebaseio.com",

  projectId: "dummy-7b608",

  storageBucket: "dummy-7b608.appspot.com",

  messagingSenderId: "147261255448",

  appId: "1:147261255448:web:9cb1cc04612f906a03b86d"

};


firebase.initializeApp(firebaseConfig);

let dummyDB = firebase.database();
let auth = firebase.auth();
let db = dummyDB.ref("dummy");



function register(){
  const names = document.getElementById("name").value ;
const emails = document.getElementById("mailid").value ;
const passwords = document.getElementById("password").value ;
  console.log(names)
  auth.createUserWithEmailAndPassword(emails, passwords).then(function(){
    let user= auth.currentuser
  
    let user_data ={
      name: names, 
      email: emails,
      password: passwords
    }
    dummyDB.ref.child('dummy' + user.uid).set(user_data)
  
  })
  alert("successfully redistered")
}

//   let userDetails=[
//             {
//             email:"ajilj@gmail.com",
//             password:"12345678",
//             name:"Ajil"
//         },
//         {
//             email:"sobith@gmail.com",
//             password:"987654",
//             name:"Sobith"
//         },
//         {
//             email:"ajay@gmail.com",
//             password:"987654",
//             name:"ajay"le.log(res.val())
//         }
//         ]

// db.once("value").then(function (res) {
//   console.log(res.val());
//   b = res.val();
//   console.log(b)
// })
// console.log(db.once(`dummy/${0}`))

