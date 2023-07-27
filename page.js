function back(){
    window.location= "Kwitter_room.html";
    
    }
    const firebaseConfig = {
        apiKey: "AIzaSyDKzBtgYeVTlpAlrxh3r5BA16HMSxn6iX0",
        authDomain: "projectchat-202f1.firebaseapp.com",
        databaseURL: "https://projectchat-202f1-default-rtdb.firebaseio.com",
        projectId: "projectchat-202f1",
        storageBucket: "projectchat-202f1.appspot.com",
        messagingSenderId: "363285504902",
        appId: "1:363285504902:web:37b88de50258713f4fc207"
        
    };
    firebase.initializeApp(firebaseConfig);
    
    username = localStorage.getItem("user_name");
    roomname = localStorage.getItem("roomname");
    
    function send() {
        write = document.getElementById("send").value;
        firebase.database().ref(roomname).push({
            message: write,
            like: 0,
            name: username
        });
        document.getElementById("send").value="";
    }