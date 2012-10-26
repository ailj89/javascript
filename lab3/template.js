$(function(){

	$('#b1').click(popup);

});

function popup()

{
	var t1 = $('#t1').val();
	alert('you entered ' + t1);
	$('#i2').text(t1);

	var n = parseInt(t1);
	var z = cube(n)
	$('#i2').text(z);

	if (z > 100)
		$('#i2').css('color', 'red');
	else
		$('#i2').css('color', 'blue');

	for(var i = 0; i < z; i++)
		console.log('counting: ' + i);
}

function cube(x){
	return x * x * x;
}