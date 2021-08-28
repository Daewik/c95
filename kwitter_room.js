
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBJTwiBNpfK5Gnxbp8as0bQsglVo3cKCpU",
      authDomain: "twitter-418ab.firebaseapp.com",
      databaseURL: "https://twitter-418ab-default-rtdb.firebaseio.com",
      projectId: "twitter-418ab",
      storageBucket: "twitter-418ab.appspot.com",
      messagingSenderId: "769316192250",
      appId: "1:769316192250:web:afe90ca69b7f7d118fee43",
      measurementId: "G-W4YWKH5MXG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    

    function addRoom()
{
  room_name= document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("r_name", room_name );
  window.location= "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log(Room_names);
        row= "<div class='room_name' id="+Room_names+"  onclick='redirectToRoomName(this.id)'> </div><hr> ";
        document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);

  localStorage.setItem("r_name", name)

  window.location="kwitter_page.html";
}

function Logout()
{
  localStorage.removeItem("r_name");

  window.location="index.html";
}



