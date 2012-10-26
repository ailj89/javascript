//var response = ;
var counter = 0;

$(function(){

	//setTimeout(display_text, 3000); //function first then time in milliseconds
	setInterval(display_more, 0.0001);

});

// function display_text(){

// 	alert('hello world');
// 	// prompt('Would you like to change the text? (Y/N)');

// 	// if(response != 'n'){
// 	// 	$('#test').text('hello world');
// 	// }	

// 	// else{
// 	// 	display_more = 0;
// 	// }
// }

function display_more(){
	var d = $('<div>');
	// d.text(counter);
	d.addClass('funky');
	$('#test').prepend(d);
	counter++;
	var color1 = counter % 255;
	var color2 = (counter + counter) % 255;
	var color3 = (counter * counter) % 255;
	var color_string = 'rgb('+ color1 +', ' + color2 +', ' + color3 + ')';
	d.css('background-color', color_string);
}