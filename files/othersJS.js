$(document).ready(function() {

	$(window).on('load', function () {
   		var $preloader = $('#page-preloader'),
   		$spinner = $preloader.find('.spinner');
    	setTimeout(function(){$('#page-preloader').fadeOut('slow')},1000);
	});

	var answer;

	$('.plus').click(function( ) {
		answer=confirm('Желаете добавить в корзину?');
    });

	$('#all').click(function( ) {
		$('.content_card').css('opacity', '1');		
		$('.content_1').css('opacity', '1');	
		$('.content_2').css('opacity', '1');
		$('.content_3').css('opacity', '1');				
    });

	$('#prin').click(function( ) {		
		$('.content_card').css('opacity', '1');		
		$('.content_1').css('opacity', '1');	
		$('.content_2').css('opacity', '1');
		$('.content_3').css('opacity', '1');	
		$('.content_1').css('opacity', '0.2');
		$('.content_2').css('opacity', '0.2');
		$('.content_3 .content_card:nth-child(1), .content_3 .content_card:nth-child(4)').css('opacity', '0.2');						
    });

    $('#web').click(function( ) {    	
		$('.content_card').css('opacity', '1');		
		$('.content_1').css('opacity', '1');	
		$('.content_2').css('opacity', '1');
		$('.content_3').css('opacity', '1');
		$('.content_1 .content_card:nth-child(1), .content_1 .content_card:nth-child(2), .content_1 .content_card:nth-child(4)').css('opacity', '0.2');
		$('.content_2 .content_card:nth-child(1), .content_2 .content_card:nth-child(2), .content_2 .content_card:nth-child(3)').css('opacity', '0.2');
		$('.content_3 .content_card:nth-child(2), .content_3 .content_card:nth-child(3)').css('opacity', '0.2');						
    				
    });

    $('#photos').click(function( ) {
		$('.content_card').css('opacity', '1');		
		$('.content_1').css('opacity', '1');	
		$('.content_2').css('opacity', '1');
		$('.content_3').css('opacity', '1');
		$('.content_1 .content_card:nth-child(1), .content_1 .content_card:nth-child(3), .content_1 .content_card:nth-child(4)').css('opacity', '0.2');
		$('.content_2 .content_card:nth-child(1), .content_2 .content_card:nth-child(4)').css('opacity', '0.2');
		$('.content_3').css('opacity', '0.2');					
    });

    $('#wordp').click(function( ) {
		$('.content_card').css('opacity', '1');		
		$('.content_1').css('opacity', '1');	
		$('.content_2').css('opacity', '1');
		$('.content_3').css('opacity', '1');
		$('.content_1 .content_card:nth-child(2), .content_1 .content_card:nth-child(3)').css('opacity', '0.2');
		$('.content_2 .content_card:nth-child(2), .content_2 .content_card:nth-child(3), .content_2 .content_card:nth-child(4)').css('opacity', '0.2');
		$('.content_3').css('opacity', '0.2');						
    });

});