document.querySelector('form').addEventListener('submit', fetchWeatherData)

function fetchWeatherData(ev) {
    ev.preventDefault()
    //get what the user typed in:
    let city = ev.target.city.value;
    city = city.trim()
    const formattedCity = city.replace(" ", "%20")
    //form the query to the Weather API:
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&appid=d91f911bcf2c0f925fb6535547a5ddc9&units=imperial`;
    
    if (!formattedCity) {
        return;
    }
    //use Fetch to get the current Weather Data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            console.log(temp);
            let temperatureEl = document.createElement('p');
            temperatureEl.textContent = temp;
            document.getElementById('Results').append(temperatureEl)
        })
}

//.then(...)//fetch the forecast