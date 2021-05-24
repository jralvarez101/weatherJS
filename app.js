
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


