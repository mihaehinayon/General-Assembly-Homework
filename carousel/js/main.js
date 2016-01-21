
var imagesArray = [
	"food1.jpg",
	"food2.jpg",
	"food3.jpg",
	"food4.jpg",
	"food5.jpg",
	"food6.jpg",
	"food7.jpg",
	"food8.jpg"
];

var counter = 0;

$(document).ready(function(){


	$("#back").on("click",function() {
		counter--;
		if (counter >= 0) {
			$("img").attr("src", "images/" + imagesArray[counter]);
		}
		else {counter = 0};
		console.log(counter);
	});

	$("#skip").on("click",function() {
		counter++;
		if (counter == imagesArray.length) {
			counter = 0;
		}
		$('img').attr('src', "images/" + imagesArray[counter]);
		console.log(counter);
	});


});
