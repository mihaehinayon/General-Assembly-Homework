
var countFaceUpCards = 0;

function turnCardFaceUp(card) {
	card.addClass('faceUp');
	if (card.hasClass('queen')) {
		card.attr('src', 'img/queen.png');
	} else {
		card.attr('src', 'img/king.png');
	}
} 

function compareCards(card1, card2) {
	if (card1.attr('class') === card2.attr('class')) {
		$('.message').text('You win!');
	} else {
		$('.message').text('Nope. Try again.');
	}
}

function resetGame() {
	$('img').attr('src', 'img/back-of-card.png').removeClass('faceUp');
	$('.message').text('');
	countFaceUpCards = 0;
}

// Fisher–Yates shuffle
function randomize(array) {
    var currentIndex = array.length; 
    var temporaryValue;
   	var randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
  };

function shuffleCards() {
  	var cardsArray = ['queen', 'king', 'king', 'queen']
  	var counter = 0;
	
	randomize(cardsArray);

	while (counter < cardsArray.length) {
		$('img').eq(counter).attr('class', cardsArray[counter]).attr('data-suit', cardsArray[counter]);
		counter++;
  	}
}

function show2ndCard() {
	if (countFaceUpCards === 1) {
		var card1 = $('.faceUp');
		var card1Suit = card1.data('suit');
		var card2 = card1.siblings("[data-suit='" + card1Suit + "']");

		turnCardFaceUp(card2);
		$('.message').text('You win by cheating! Congrats.');
	}
}

$(document).ready(function() {

	shuffleCards();

	$('img').on('click', function(e){

		var card = $(this);
	
		turnCardFaceUp(card);
		countFaceUpCards++;

		if ($('.checkbox').is(':checked')) {
			show2ndCard();
		}

		if (countFaceUpCards === 2){

			var faceUpCards = $('.faceUp');
			var card1 = $(faceUpCards[0]);
			var card2 = $(faceUpCards[1]);

			compareCards(card1, card2);

		} else if (countFaceUpCards === 3) {
			resetGame();
		}
	});

	$('.resetButton').on('click', resetGame);

	$('.shuffleButton').on('click', function() {
		resetGame();
		shuffleCards();
	});

	$('.checkbox').on('click', function() {
		if ($(this).is(':checked')) {
			console.log('checked')
			show2ndCard();
		}
	});
		
});



