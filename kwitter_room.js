//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAg7tYd4Z-nm4zKPkOsDhClmmT0SzNuT90",
      authDomain: "kwitterclass-3eee0.firebaseapp.com",
      databaseURL: "https://kwitterclass-3eee0-default-rtdb.firebaseio.com",
      projectId: "kwitterclass-3eee0",
      storageBucket: "kwitterclass-3eee0.appspot.com",
      messagingSenderId: "1025011412704",
      appId: "1:1025011412704:web:67b7b52b3b09bd2ee0aa85",
      measurementId: "G-97YBBF5H8T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();