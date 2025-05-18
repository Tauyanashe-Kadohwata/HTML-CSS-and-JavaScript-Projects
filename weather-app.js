const apiKey = "bcd343c9dc82658d9438386301b7b9f0";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=warsaw&appid=bcd343c9dc82658d9438386301b7b9f0&units=metric`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        const data = await response.json();

        console.log("Weather API Response", data);

        console.log(data);

document.querySelector(".city").innerHTML = data.name;
const tempCelsius = Math.round(data.main.temp)
document.querySelector(".temp").innerHTML = tempCelsius + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "Weather images/cloudy.png";
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "Weather images/clear.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "Weather images/rainy-day.png";
}
else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "Weather images/snow.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "Weather images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "Weather images/mist.png";
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.data = "none";
    }
  
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

});

