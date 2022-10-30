class UI {
    constructor() {
        this.description = document.querySelector("#description")
        this.temp = document.querySelector("#temp")
        this.city = document.querySelector("#location")
        this.deg = document.querySelector("#deg")
        this.speed = document.querySelector("#speed")
        this.humidity = document.querySelector("#humidity")
        this.pressure = document.querySelector("#pressure")
        this.visibility = document.querySelector("#visibility")

    }

    drawWeather(data){
        let celcius = Math.round(parseFloat(data.main.temp)-273.15);
        let description = data.weather[0].description;

        this.description.innerHTML = description;
        this.humidity.innerHTML = data.main.humidity
        this.pressure.innerHTML = data.main.pressure
        this.temp.innerHTML = celcius + "&deg;";
        this.visibility.innerHTML = data.visibility
        this.deg.innerHTML = data.wind.deg
        this.speed.innerHTML = data.wind.speed
        this.city.innerHTML = data.name;
    }
}