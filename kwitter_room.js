
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyC1OpT1rRfEqGdF5CxNzXvRMbRHf_CLKHI",
      authDomain: "kwitter-2a8b9.firebaseapp.com",
      databaseURL: "https://kwitter-2a8b9-default-rtdb.firebaseio.com",
      projectId: "kwitter-2a8b9",
      storageBucket: "kwitter-2a8b9.appspot.com",
      messagingSenderId: "248820936280",
      appId: "1:248820936280:web:217ad1678664f0b8d9a42d"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome   " + username  ;


function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
         porpuse : "adding room name"   
      });

      localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
  function redirectToRoomName(name) 
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

