// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCQNBTA5zQdyfPzg2j5ImtYcYhDA9DmkZ4",
      authDomain: "kwitter-f7762.firebaseapp.com",
      databaseURL: "https://kwitter-f7762-default-rtdb.firebaseio.com",
      projectId: "kwitter-f7762",
      storageBucket: "kwitter-f7762.appspot.com",
      messagingSenderId: "10197515844",
      appId: "1:10197515844:web:057da0d47ff1f5f7d0c611"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
