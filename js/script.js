$(document).ready(function(){
	$('.burger').click(function(){
		$('.header--links').toggleClass('active');
		$('.header').toggleClass('active');
	});
});