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


     function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
}

