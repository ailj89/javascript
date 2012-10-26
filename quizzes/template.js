
$(function(){

$('#Add').click(adding);
});
	function adding(){
      var value1 = parseInt($('Number1').val());
      var value2 = parseInt($('Number2').val());
      var sum = value1 + value2;
      $('#Total').val(sum);
   }


