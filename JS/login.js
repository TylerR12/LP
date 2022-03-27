var fireUser;
var firePassword;


function load(){



      // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfigs = {
    apiKey: "AIzaSyDljAom0tOknpek18t0XTfzQ4QkLEGbRYM",
    authDomain: "led-project-eb2d5.firebaseapp.com",
    projectId: "led-project-eb2d5",
    storageBucket: "led-project-eb2d5.appspot.com",
    messagingSenderId: "732803747020",
    appId: "1:732803747020:web:540e5747e6eb5095bd0669",
    measurementId: "G-7DNQ7QNCKQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfigs);
  firebase.analytics();


  firebase.database().ref('Account').child("Username").on('value',(snap)=>{
    //console.log(snap.val());
    fireUser = snap.val();
  });

  firebase.database().ref('Account').child("Password").on('value',(snap)=>{
    //console.log(snap.val());
    firePassword = snap.val();
  });
}

function displayLogin(){
  document.getElementById("incorrect").style.display = "none";
  document.getElementById("username").style.border = "none";
  document.getElementById("password").style.border = "none";
  document.getElementById("username").style.borderBottom = "1px solid black";
  document.getElementById("password").style.borderBottom = "1px solid black";
  document.getElementById("login-container").style.display = "flex";
  document.getElementById("create-container").style.display = "none";


}

function displayCreate(){
    document.getElementById("create-container").style.display = "flex";
    document.getElementById("login-container").style.display = "none";
}

function options(){
  document.getElementById("create-container").style.display = "none";
  document.getElementById("login-container").style.display = "none";
}

//for submitting login
function signIn(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // console.log(username);
    // console.log(password);

    if(username == fireUser && password == firePassword){
        console.log("Login Successful");
        window.open("/colors.html");
    }
    else{
      if(username == ""){
        document.getElementById("username").style.border = "1px solid red";
      }
      else{
        document.getElementById("username").style.border = "none";
        document.getElementById("username").style.borderBottom = "1px solid black";
      }
      if(password == ""){
        document.getElementById("password").style.border = "1px solid red";
      }
      else{
        document.getElementById("password").style.border = "none";
        document.getElementById("password").style.borderBottom = "1px solid black";
      }
      document.getElementById("incorrect").style.display = "flex";
    }

}

//for submitting login
function create(){
    let username = document.getElementById("username-create").value;
    let password = document.getElementById("password-create").value;

    if(username == ""){
      document.getElementById("username-create").style.border = "1px solid red";
    }
    else{
      document.getElementById("username-create").style.border = "none";
      document.getElementById("username-create").style.borderBottom = "1px solid black";
    }
    if(password == ""){
      document.getElementById("password-create").style.border = "1px solid red";
    }
    else{
      document.getElementById("password-create").style.border = "none";
      document.getElementById("password-create").style.borderBottom = "1px solid black";
    }

    if (username != "" && password != ""){
      window.open("/colors.html");
    }


}



