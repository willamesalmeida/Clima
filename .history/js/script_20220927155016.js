/* import * as dotenv from 'dotenv';
dotenv.config()
console.log(process.env.API_KEY)
 */

//Variaveis e Seleção de elementos
/* const apiKey = process.API_KEY */
const apiContryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
var searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const countryIconElement = document.querySelector("#country")
const tempElement = document.querySelector("#temperature span");
const descripElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon")
const humidityIconElement = document.querySelector("#umidity span")
const windIconElement = document.querySelector("#wind span")

//Funções
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrica&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiWeatherURL)
    const data = await res.json();
    return data
}

const showWeatherData = async (city) => {
   const data = await getWeatherData(city);
   cityElement.innerText = data.name;
   tempElement.innerText = parseInt(data.main.temp);
   descripElement.innerText =data.weather[0].description;
   weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
   countryIconElement.setAttribute("src",apiContryURL + data.sys.country);
   humidityIconElement.innerText = `${data.main.humidity}%`;
   windIconElement.innerText = `${data.wind.speed} km/h`
}

//Eventos
searchBtn?.addEventListener('click', (e) => {

    e.preventDefault();

    const city = cityInput.value
    showWeatherData(city)
}
)
