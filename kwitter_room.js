
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
  apiKey: "AIzaSyCPLvW-jwSplebLdcYwIY784LxP2ccKvc4",
  authDomain: "lets-chat-3ca15.firebaseapp.com",
  projectId: "lets-chat-3ca15",
  storageBucket: "lets-chat-3ca15.appspot.com",
  messagingSenderId: "261484146348",
  appId: "1:261484146348:web:905e3396be226d713a3909",
  measurementId: "G-EMSDLPFNWH"
};
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   var user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML - 'welcome' + user_name + "!"
   
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

