const options = {
       method: 'GET',
       headers: {
               'rapid-api-key': 'your key',
	       'rapid-api-host': 'weather-by-api-ninjas.p.rapidapi.com'
       }
}

const getWeather = (city) => {
	city_head.innerHTML = city
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		.then(response => response.json())
		.then((response) => {
	    // console.log(response)
			temp.innerHTML = response.temp + " C"
			min_temp.innerHTML = response.min_temp + " C"
			max_temp.innerHTML = response.max_temp + " C"
			humidity.innerHTML = response.humidity + " %"
			wind_degree.innerHTML = response.wind_degrees
			feels_like.innerHTML = response.feels_like
			wind_speed.innerHTML = response.wind_speed
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}

submit.addEventListener('click', (e) => {
	e.preventDefault()
	getWeather(searchValue.value)
})

getWeather('Swabi')
