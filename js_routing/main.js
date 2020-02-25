/*var searchResult = ["Hyd", "Hublli", "Bang", "bangalure", "belll"];
function displayResult(){
    
    var ul = document.createElement("ul");
    ul.classList.add("ul-bg")
   for(i=0;i<searchResult.length; i++){
        var li = document.createElement("li");
        li.innerText= searchResult[i];
        ul.appendChild(li);
    }
   var d2 = document.getElementById('d2');
    d2.innerHTML = '';  
    d2.appendChild(ul)
}*/

function renderHome(){
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';  
    var home = document.createElement("div");
    home.innerHTML = `<div class="div1"> <h1>Home Information </h1> 
    <p> Ads content: </p> 
    <form>
 <input type= "text" name= "fname" placeholder="Firstname"><br><br>
 <input type= "pattran" name= "passward" placeholder="Password"><br>
 <input type ="submit" value="submit">
    </form>
    </div> `
    home.style.backgroundColor="red";
    home.style.color="white";
    home.style.fontStyle="italic";
    home.style.height="450px";
    home.style.paddingLeft="40px";
    home.style.paddingTop="40px";
contentDiv.appendChild(home)
}
   
    
function renderAbout(){
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';  
    var about = document.createElement("div");
    about.innerHTML = `<div> <h3>About us page..:</h2> <p> ads</p> 
    <p> Websit page:</p> 
    <p>About Informatio: </p> 
    <p> Choices:</p> 
    <p>Conclusion: </p> 
    <form>
 <input type= "text" name= "fname" placeholder="Firstname"><br><br>
 <input type= "pattran" name= "passward" placeholder="Password"><br>
 <input type ="submit" value="submit">
    </form>
    </div> </div> `
    about.style.backgroundColor="yellow";
    about.style.color="red";
    about.style.fontStyle="italic";
    about.style.height="450px";
    about.style.paddingLeft="40px";
    about.style.paddingTop="40px";
    contentDiv.appendChild(about)
}


function renderContact(){
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';  
    var contact = document.createElement("div");
    contact.innerHTML = `<div ><h3> contact us  page</h3> <p> ads</p> 
    <p> aslkdjf;lks</p>
    <form>
<input type="text" placeholder="Firstname"><br><br>
 <input type= "text" name= "fname" placeholder="Lastname"><br><br>
 <input type= "password" name= "passward" placeholder="Password"><br>
 <input type ="submit" value="submit">
    </form>
    </div>` 
     contact.style.backgroundColor="green";
    contact.style.color="yellow";
    contact.style.fontStyle="italic";
   contact.style.height="450px";
   contact.style.paddingLeft="40px";
   contact.style.paddingTop="40px";

 contentDiv.appendChild(contact);
}

