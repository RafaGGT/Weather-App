const apiKey = //"aqui va la secuencia del codigo que se te otorga"//;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else { 
        let data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity.toFixed(1) + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        weatherIcon.src = `/images/${data.weather[0].main}.png`;
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
};

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
