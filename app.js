

// THIS IS TO MAKE MODAL WORK MANUALLY
$('#trigger').click(function () {
	$('#locModal').modal({show : true});
});

let x = $('#closex');
let modalShown = $('#locModal');
let closeButton = $('#close');

x.click( function () {
    modalShown.modal('hide')
});

closeButton.click( function (){
    modalShown.modal('hide')
})

// Init weather object
const weather  = new Weather('Seattle','us','wa');

// Init ui object
const ui =  new UI();

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city,country,state);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');

})

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Calling the getWeather function will return a promise so we have to use .then and .catch
function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch( err => console.log(err));
}

    
