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

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Calling the getWeather function will return a promise so we have to use .then and .catch
function getWeather(){
    weather.getWeather()
    .then(results => {
        console.log(results)
    })
    .catch( err => console.log(err));
}

    
