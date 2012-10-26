	var balance = 1000;
	var checkings = 1000;
	var savings = 500;

$(function(){
	$('#c_amount').focus(); 
	// places cursor in box when page loads
	$('#c_deposit').click(c_deposit);
	$('#c_withdraw').click(c_withdraw);
	$('#s_deposit').click(s_deposit);
	$('#s_withdraw').click(s_withdraw);
});

function c_deposit(){
	var amount = $('#c_amount').val();
	amount = parseInt(amount);
	c_balance = c_balance + amount;
	$('#c_balance').text(c_balance);
}

function c_withdraw(){
	var amount = $('#c_amount').val();
	amount = parseInt(amount);

	//overdraft protection
	if(amount <= c_balance){
		c_balance = c_balance - amount;
	}
		else if(amount <= (c_balance + s_balance)){
			s_balance = (c_balance + s_balance) - amount;
			c_balance = 0;
		}
		$('#c_balance').text(c_balance);
		$('#s_balance').text(s_balance);
}

function s_deposit(){
	var amount = $('#s_amount').val();
	amount = parseInt(amount);
	s_balance = s_balance + amount;
	$('#s_balance').text(s_balance);
}

function s_withdraw(){
	var amount = $('#s_amount').val();
	amount = parseInt(amount);

	if(amount <= s_balance){
		s_balance = s_balance - amount;
		$('#s_balance').text(s_balance);
	}
}