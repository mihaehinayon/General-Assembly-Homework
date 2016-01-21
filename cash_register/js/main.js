var total = 0;
document.getElementById('entry').onsubmit = enter;

function enter(e) {
	e.preventDefault();
  var num = parseFloat(document.getElementById('newEntry').value);
  total = total + num;
  document.getElementById('total').innerHTML = currencyFormat(total);
  document.getElementById('entry').reset();
}

function currencyFormat(number) {
  var currency = parseFloat(number);
  currency = currency.toFixed(2);
  currency = '$' + currency;
  return currency;
}



