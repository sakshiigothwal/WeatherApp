const apiKey = "3034fc6853fe758f3054ed97b77a635b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input") as HTMLInputElement;
const searchBtn = document.querySelector(".search button")!;
const weatherSymbol = document.querySelector(".weathericon") as HTMLImageElement;
const weatherEl = document.querySelector(".weather") as HTMLElement;
const errorEl = document.querySelector(".error") as HTMLElement;

interface WeatherResponse {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    main: string;
  }[];
}

async function checkweather(city : string){
    const response = await fetch(apiUrl + city + '&appid=' +apiKey);
    if(response.status == 404){
        errorEl.style.display="block";
        weatherEl.style.display = "none";

    }else{
        var data = await response.json();

        document.querySelector(".city")!.innerHTML = data.name;
        document.querySelector(".temp")!.innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity")!.innerHTML = data.main.humidity + "%";
        document.querySelector(".wind")!.innerHTML = data.wind.speed + "km/hr";


        const iconMap: Record<string, string> = {
        Clouds: "./img/clouds.png",
        Drizzle: "./img/drizzle.png",
        Mist: "./img/mist.png",
        Rain: "./img/rain.png",
        Clear: "./img/clear.png",
        };

        weatherSymbol.src = iconMap[data.weather[0].main] || "./img/snow.png";

        errorEl.style.display="none";
        weatherEl.style.display = "block";
    }
}
searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (!city) {
    errorEl.style.display = "block";
    errorEl.querySelector("p")!.textContent = "Please enter a city name.";
    weatherEl.style.display = "none";
    return;
  }
  checkweather(city);
});


