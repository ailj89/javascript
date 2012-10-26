//Lab 7

$(function(){
	$('.box').mouseenter(color_the_box);
	$('.box').mouseleave(make_it_white);
	$('.box').hover(color_the_box);
	$('#add').click(add_node);

});

function add_node(){
	var element = $('#element').val();
	var node = $('<' + element + '>');
	var css = $('#css').val();
	var text = $('#text').val();
	node.addClass(css);
	node.text(text);
	$('#elements').prepend(node);
}

function color_the_box(){
	
	var color = $(this).text();
	$(this).css('background-color', color);
	// $(this).css
	// $(this).addClass('alert');
	// $(this).removeClass('alert');
	// $(this).toggleClass('alert');
}

function make_it_white(){
	$(this).css('background-color', 'white');
}
