
function loadCities() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let weather = JSON.parse(this.responseText);
        console.log("cities --->", weather);
        displayWeatherInfo(weather)
       }
    };

    xhttp.open("GET", "Http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=da66fc7515debc31c41a38d3427a9500", true);
    xhttp.send();
  }

  function displayWeatherInfo(weatherObj){
    let temp = weatherObj.main.temp
    let lName = weatherObj.name;
    //document.getElementById("results").innerHTML = JSON.stringify(weatherObj);
   document.getElementById("results").innerHTML = `Today temp in ${lName} is ${temp}F`;

  }
