/*
- Event listeners for all links (select all a's and li tags?)
- If Link 1 is clicked:
	- Make background gray (check if CSS already has this as a class etc.)
	- Slide down is displayed (vs. default display: none)
	- All other links are white background
	- Slider visibility toggles on click
	- If slider is already showing when another link is clicked, don't slide up

*/

$(document).ready(function(){

	$('#primary-nav>li').on('click', function(e){
		e.preventDefault();

		if ($(this).hasClass('active')) {
			$('#slide-down').slideUp(250);
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
			$(this).siblings().removeClass('active');

			// Get href of the link
			var sectionName = $(this).find('a').attr('href');
			// Show section with ID of href from link
			$(sectionName).show();
			$(sectionName).siblings().hide();

			// Slide down #slide-down
			$('#slide-down').slideDown(250);
		}
	});
});





















