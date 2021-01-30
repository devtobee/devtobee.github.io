window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')
    let countryClass = document.querySelector(".country-class")
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude

            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const api = `http://api.weatherapi.com/v1/current.json?key=7f4dff2f820e48a7848143511213001&q=${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    let icon = document.querySelector(".icon")
                    const { temp_c, humidity } = data.current
                    const text = data.current.condition.text
                    const iconWeb = data.current.condition.icon
                    const nameox = data.location.name
                    const region = data.location.region
                    const countryx = data.location.country
                    console.log(iconWeb)
                        //set DOM elements from the API
                    icon.src = `https:${iconWeb}`
                    countryClass.textContent = countryx
                    temperatureDegree.textContent = temp_c
                    locationTimezone.textContent = nameox
                    temperatureDescription.textContent = text
                })
        })
    } else {
        h1.textContent = "I need Your Location Bitch :("
    }

    /* temperatureDegree.addEventListener('click', (data) => {
        const yekaa = document.getElementById('yekaa')
        temperatureDegree.textContent = data.current.temp_f
        yekaa.textContent = '°F'
    }) */

})

// data.weather[0].icon
// 7f4dff2f820e48a7848143511213001
// http://api.weatherapi.com/v1/current.json?key=&q=
// https://api.weatherapi.com/v1/current.json?key=KEYREDACTED&q=London