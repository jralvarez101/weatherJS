class Weather{
    constructor(city, country, state){
        this.apiKey = '5c806fc77b8886482da894fa835bf4d4';
        this.city = city;
        this.state = state;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country},${this.state}&appid=${this.apiKey}&units=imperial`);
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
        
    }

    // Change weather location
    changeLocation(city, state){
        // set location
        this.city = city;
        this.state = state;
    }


}