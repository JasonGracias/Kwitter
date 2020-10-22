
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDHNf1A1G1KGfjJw-HjqTrTmYyb2yPH9qc",
      authDomain: "kwitter-ebee6.firebaseapp.com",
      databaseURL: "https://kwitter-ebee6.firebaseio.com",
      projectId: "kwitter-ebee6",
      storageBucket: "kwitter-ebee6.appspot.com",
      messagingSenderId: "777543741685",
      appId: "1:777543741685:web:56ea8b1b51634721c595bc",
      measurementId: "G-6X2NPJVS68"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    document.getElementById("username").innerHTML="welcome:"+username;
   function addroom() {
roomname=document.getElementById("roomname").value;
localStorage.setItem("roomname",roomname);
firebase.database().ref("/").child(roomname).update({
      purpose:"adding room name"
});
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
