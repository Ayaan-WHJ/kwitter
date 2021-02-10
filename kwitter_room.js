
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCKz6YQ8GYH-LvFux3P5TlqHXAmEfv9BPA",
      authDomain: "kwitter-bfc67.firebaseapp.com",
      databaseURL: "https://kwitter-bfc67-default-rtdb.firebaseio.com",
      projectId: "kwitter-bfc67",
      storageBucket: "kwitter-bfc67.appspot.com",
      messagingSenderId: "484969481516",
      appId: "1:484969481516:web:8c7afbc913d31ff9889889",
      measurementId: "G-5BVX84HFPW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
