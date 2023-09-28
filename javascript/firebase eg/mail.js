// const firebaseConfig = {
//     //   copy your firebase config informations
//     apiKey: "AIzaSyCnmTkoGJXtEegQl9qa1euI1c98_HZFw6M",

//     authDomain: "contactform-f336b.firebaseapp.com",
//     databaseURL: "https://contactform-f336b-default-rtdb.firebaseio.com",

//     projectId: "contactform-f336b",

//     storageBucket: "contactform-f336b.appspot.com",

//     messagingSenderId: "777516447737",

//     appId: "1:777516447737:web:8996d195022797dadc6f28"

//   };
  
//   // initialize firebase
//   firebase.initializeApp(firebaseConfig);
  
//   // reference your database
//   var contactFormDB = firebase.database().ref("contactform");
  
//   document.getElementById("contactform").addEventListener("submit", submitForm);
  
//   function submitForm(e) {
//     e.preventDefault();
  
//     var name = getElementVal("name");
//     var emailid = getElementVal("emailid");
//     var msgContent = getElementVal("msgContent");
  
//     saveMessages(name, emailid, msgContent);
  
//     //   enable alert
//     document.querySelector(".alert").style.display = "block";
  
//     //   remove the alert
//     setTimeout(() => {
//       document.querySelector(".alert").style.display = "none";
//     }, 3000);
  
//     //   reset the form
//     document.getElementById("contactform").reset();
//   }
  
//   const saveMessages = (name, emailid, msgContent) => {
//     var newContactForm = contactFormDB.push();
  
//     newContactForm.set({
//       name: name,
//       emailid: emailid,
//       msgContent: msgContent,
//     });
//   };
  
//   const getElementVal = (id) => {
//     return document.getElementById(id).value;
//   };

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

var db = firebase.database();

var dataRef = db.ref("registeredUsers");

function register(){
  console.log('register function called');
  let reg_name=document.getElementById("name").value
  let reg_email=document.getElementById("mailid").value
  let reg_password=document.getElementById("password").value

  let reg_data = {
          name : reg_name,
          email : reg_email,
          password : reg_password,
  }

  dataRef.once('value')
      .then(function(snapshot) {
          let data = snapshot.val();
          console.log(data);
          if(data){
              data.push(reg_data);
              db.ref('registeredUsers').set(data);
          }
          else{
              db.ref(`registeredUsers/${0}`).set(reg_data);
          }
      })
}

function login(){

  let user_detail=document.getElementById("mail").value
  let Password=document.getElementById("passcode").value
      dataRef.once('value')
      .then(function(snapshot) {
          let data = snapshot.val();
          console.log(data);
          if(data){
              for(i=0;i<data.length;i++){

                  if ((data[i].email==user_detail) && (data[i].password==Password))
                  {
                      alert("login successfully")
                      localStorage.setItem("loggedin",true)
                      localStorage.setItem("logname",data[i].name)
                      window.location="home.html";
                      break;
                  }
                  else{
                      alert("Please Register First");                
                  }
              }
          }
      })
}
function registerpage(){
    
    window.location=""

}