jQuery(document).ready(function () {
	/* Custom code */
	$('#btn-menu').on('click', function(){
		$('#menu').toggleClass('show-menu');
		
		$('html').toggleClass('clicked');
	})
});
