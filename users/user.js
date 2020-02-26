function createUser(){
    var id = document.getElementById("n1").value;
    var name = document.getElementById("n2").value;

    var payload = {"id":id, "name":name}
    console.log("User payload ==>", payload)

    postUserData(payload);

}

function postUserData(payload){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log("Ready status change==>");
      if (this.readyState == 4 && this.status == 201) {
        console.log(this.responseText)
        document.getElementById("showMsg").innerHTML = "User created successfully"
       }
    };
    xhttp.open("POST", "http://localhost:3000/users/", payload);
    xhttp.send();
  }

function getUserList(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log("Ready status change==>");
      if (this.readyState == 4 && this.status == 200) {
        let users = JSON.parse(this.responseText);
        displayUsers(users);
       }
    };
    xhttp.open("GET", "http://localhost:3000/users/", true);
    xhttp.send();
}

function displayUsers(userList){
    var ul = document.createElement("ul");
    
    for(i=0;i<userList.length; i++){
        let userObj = userList[i];
        console.log("userObj", userObj);
        var li = document.createElement("li");
        li.innerText= userObj.name;
        ul.appendChild(li);
    }

    var results = document.getElementById('userList');
    results.innerHTML = '';  
    results.appendChild(ul)
}