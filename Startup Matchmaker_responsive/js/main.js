
function showNav() {
	var nav = $('nav, .navPages');
	if (nav.is(':hidden')) {
		nav.slideDown('slow');
	} else {
		nav.slideUp('slow');
	}
}

$(document).ready(function() {
	$('.mobileNav').on('click', showNav);
});



