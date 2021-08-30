const searchWeather = () => {
    const searField = document.getElementById("search-field")
    const searchText = searField.value;
    if (searchText == '') {
        document.getElementById("ErrorMsg").classList.remove("d-none")
    }
    else {
        document.getElementById("ErrorMsg").classList.add("d-none")
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=2f829bf3b4e30c2fa26f091856f3ce81`
        fetch(url)
            .then(res => res.json())
            .then(data => showWeather(data))
            .catch(res => alert('please type valid word'))
    }

    //clear search box
    searField.value = '';
}

const showWeather = (weather) => {
    //seleciting
    const cityName = document.getElementById('city')
    const tempature = document.getElementById('temp')
    const condition = document.getElementById('condition')
    const indigator = document.getElementById('indigator')

    if (weather.weather[0].main == 'Haze') {
        indigator.src = "images/haze.png"
    }
    else if (weather.weather[0].main == 'Clouds') {
        indigator.src = "images/clouds.png"
    }
    else if (weather.weather[0].main == 'Rain') {
        indigator.src = "images/rain.png"
    }
    else {
        indigator.src = "https://openweathermap.org/img/wn/02d@2x.png"
    }

    cityName.innerText = weather.name
    tempature.innerHTML = `${(weather.main.temp - 273.15).toFixed(2)}`
    condition.innerText = weather.weather[0].main

}