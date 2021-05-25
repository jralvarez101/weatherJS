class UI {
    constructor(){

        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');

    }

    paint(weather){
        let weatherIcon = weather.weather[0].icon;
        let temperature = Math.floor(weather.main.temp);
        let tempFeelsLike = Math.floor(weather.main.feels_like);
        
       
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent =`${temperature}\u00B0C`;
        this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels like: ${tempFeelsLike}\u00B0C`;
        this.wind.textContent = `Winds: ${weather.wind.speed} mph`;

    }
}