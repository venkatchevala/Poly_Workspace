var searchResult = ["Hyd", "Hublli", "Bang", "bangalure", "belll"];
function displayResult(){
    
    var ul = document.createElement("ul");
   for(i=0;i<searchResult.length; i++){
        var li = document.createElement("li");
        li.innerText= searchResult[i];
        ul.appendChild(li);
    }
   var d2 = document.getElementById('d2');
    d2.innerHTML = '';  
    d2.appendChild(ul)
}

function renderHome(){
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';  
    var home = document.createElement("div");
    home.innerHTML = "<div> home page <p> ads</p> </div> "
    home.style.backgroundcolor=CanvasGradient;

    contentDiv.appendChild(home)
}
   
    
function renderAbout(){
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';  
    var about = document.createElement("div");
    about.innerHTML = `<div> About us page.. <p> ads</p> </div> `
    contentDiv.appendChild(about)
}


function renderContact(){
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';  
    var contact = document.createElement("div");
    contact.innerHTML = `<div> contact us  page <p> ads</p> 
    <p> aslkdjf;lks</p>
    <form>
    <input type="text">
    </form>
    </div> 
    `
    contentDiv.appendChild(contact)
}

