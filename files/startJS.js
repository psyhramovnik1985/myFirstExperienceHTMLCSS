$(window).on('load', function () {
		var $preloader = $('#page-preloader'),
		$spinner = $preloader.find('.spinner');
		setTimeout(function(){$('#page-preloader').fadeOut('slow')},2000);
});

function formS( ) {
		$('#form1').css('display', 'block');
    };

function push( ) {
		$('.enter').css('display', 'block');
    };

setTimeout(formS, 8000);

setTimeout(push, 8000);