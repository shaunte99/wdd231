document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "34db1a97d77c75aafda45d497c012444";  // Your actual API key
    const city = "Krugersdorp";  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("temp").textContent = Math.round(data.main.temp);
            document.getElementById("condition").textContent = data.weather[0].description;

            return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=24&appid=${apiKey}`);
        })
        .then(response => response.json())
        .then(data => {
            let forecastList = document.getElementById("forecast");
            forecastList.innerHTML = "";

            for (let i = 0; i < 3; i++) {
                let item = data.list[i * 8]; // Picks one entry per day
                let listItem = document.createElement("li");
                listItem.textContent = `${item.dt_txt.split(" ")[0]} - ${Math.round(item.main.temp)}°C`;
                forecastList.appendChild(listItem);
            }
        })
        .catch(error => console.log("Error fetching weather data:", error));
});
