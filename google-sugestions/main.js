function showSugg(searchResult){
    var ul = document.createElement("ul");
    ul.classList.add("ul-bg")
    for(i=0;i<searchResult.length; i++){
        var li = document.createElement("li");
        li.innerText= searchResult[i];
        ul.appendChild(li);
    }

    var results = document.getElementById('results');
    results.innerHTML = '';  
    results.appendChild(ul)
}

function loadCities() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       cities = JSON.parse(this.responseText);
       console.log("cities --->", cities);
       showSugg(cities)
      }
    };

    xhttp.open("GET", "http://localhost:3000/cities", true);
    xhttp.send();
  }