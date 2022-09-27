
//Variaveis e Seleção de elementos
const apiKey = "f5efb8fb1dbd3febf146ae616cdf96b5"
const apiContryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
var searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const countryIconElement = document.querySelector("#country")
const tempElement = document.querySelector("#temperature span");
const descripElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon")
const humidityIconElement = document.querySelector("#humidity span")
const windIconElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data")


//Funções
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrica&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiWeatherURL)
    const data = await res.json();
    return data
}

const showWeatherData = async (city) => {

    setTimeout(() => {

        const data = await getWeatherData(city);
    })
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descripElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryIconElement.setAttribute("src",apiContryURL + data.sys.country);
    humidityIconElement.innerText = `${data.main.humidity}%`;
   windIconElement.innerText = `${data.wind.speed} km/h`
    weatherContainer.classList.remove("hide")
}

//Eventos
searchBtn.addEventListener('click', (e) => {
    
    e.preventDefault();
    
    const city = cityInput.value
    showWeatherData(city)
}
)
cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter"){
        const city = e.target.value
        showWeatherData(city)
    }
})