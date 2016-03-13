$(document).on('ready', function() {

	// Slide toggle for teamtreehouse header
	$('.tth .header').on('click', function() {
		$('.tth .profile').slideToggle();
	});

	// Slide toggle for Code School report card
	$('.cdschool .header').on('click', function() {
		$('.cdschool .profile').slideToggle();
	});
});