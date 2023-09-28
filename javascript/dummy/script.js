
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

  let dummyDB= firebase.database();
  let db =dummyDB.ref("dummy");

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

db.once("value").then(function(res){
    console.log(res.val());
    b=res.val();
    console.log(b)
})
console.log(db.once(`dummy/${0}`))

