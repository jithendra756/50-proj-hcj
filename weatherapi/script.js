// const apiKey = "a78cab18ce7eb8d50ec1c57f09740506";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const weatherBox = document.getElementById("weatherBox");


function search(){
    const city = cityInput.value.trim();
    if(city==""){
        alert("city name should not be empty!");
        return;
    }

    getWeather(city);
}

async function getWeather(city){
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const result = await fetch("weather.json");
        if(!result.ok){
            alert("City not found");
            return;
        }
        const data = await result.json();
        console.log(data);

    }catch(error){
        alert("Error fetching weather data");
    }
}

searchBtn.addEventListener("click",search);

cityInput.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        console.log(e.key)
        search();
    }
})

