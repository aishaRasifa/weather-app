const apiKey = "3456bab8c30517529f17d1ad7a75c887";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
    }
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "/images/clouds.png"
    }
    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "/images/clear.png"
    }
    if (data.weather[0].main == "Rain") {
        weatherIcon.src = "/images/rain.png"
    }
    if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "/images/drizzle.png"
    }
    if (data.weather[0].main == "Mist") {
        weatherIcon.src = "/images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
