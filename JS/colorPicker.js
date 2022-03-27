  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  
  var firebaseConfig = {
    apiKey: "AIzaSyDljAom0tOknpek18t0XTfzQ4QkLEGbRYM",
    authDomain: "led-project-eb2d5.firebaseapp.com",
    projectId: "led-project-eb2d5",
    storageBucket: "led-project-eb2d5.appspot.com",
    messagingSenderId: "732803747020",
    appId: "1:732803747020:web:540e5747e6eb5095bd0669",
    measurementId: "G-7DNQ7QNCKQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


//   function writedata(){
//       firebase.database().ref("currentColor").set({current: document.getElementById("current").value});
//   }

//  var color = document.getElementById("current");


 var blueCur = 100;
 var greenCur = 100;
 var redCur = 100;
 var offCur = 0;

 const blueConst = 100;
 const greenConst = 100;
 const redConst = 100;
 const offConst = 0;

//gets the current color from firebase
function currentColor(){
  
  // once() method
  firebase.database().ref('Color').child("blueC").on('value',(snap)=>{
    document.getElementById("sliderBlue").value = snap.val();
  });

  firebase.database().ref('Color').child("redC").on('value',(snap)=>{
    document.getElementById("sliderRed").value = snap.val();
  });

  firebase.database().ref('Color').child("greenC").on('value',(snap)=>{
    document.getElementById("sliderGreen").value = snap.val();
  });
}

function upload(){
  blueCur = document.getElementById("sliderBlue").value;
  redCur = document.getElementById("sliderRed").value;
  greenCur = document.getElementById("sliderGreen").value;
  firebase.database().ref("Color").set({redC: redCur, greenC: greenCur, blueC: blueCur});
  document.getElementById("changed").style.display = "block";
  var delayInMilliseconds = 2000; //1000 = 1s

  setTimeout(function() {
    document.getElementById("changed").style.display = "none";

    }, delayInMilliseconds);

}


//set the current color to blue
function blue(){
    firebase.database().ref("Color").set({redC: offConst, greenC: offConst, blueC: blueConst});
}
//set the current color to red
function red(){
    firebase.database().ref("Color").set({redC: redConst, greenC: offConst, blueC: offConst});
}
//set the current color to green
function green(){
    firebase.database().ref("Color").set({redC: offConst, greenC: greenConst, blueC: offConst});
}
//set the current color to purple
function purple(){
  firebase.database().ref("Color").set({redC: redConst, greenC: offConst, blueC: blueConst});
}
//set the current color to cyan
function cyan(){
  firebase.database().ref("Color").set({redC: offConst, greenC: greenConst, blueC: blueConst});
}
//set the current color to yellow
function yellow(){
  firebase.database().ref("Color").set({redC: redConst, greenC: greenConst, blueC: offConst});
}
//set the current color to white
function white(){
  firebase.database().ref("Color").set({redC: redConst, greenC: greenConst, blueC: blueConst});
}
//set the current color to off
function off(){
    firebase.database().ref("Color").set({redC: offConst, greenC: offConst, blueC: offConst});
}
