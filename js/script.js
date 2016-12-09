$(function() {
	var $tabs = $('.tabs');
	$($tabs).click(function() {
		
		$(this).addClass('tab--active');
		$(this).siblings().removeClass('tab--active');
		var $indexTab = $($tabs).index(this);

		$text = $('.tab-text');

		$($text[$indexTab]).addClass('tab-text--active');
		$($text[$indexTab]).siblings().removeClass('tab-text--active');
	});

	//TASK2
	var $input = $('input');
	$($input).mouseover(function() {
		$(this).siblings('div').fadeIn(400);
	});

	$($input).mouseout(function() {
		$(this).siblings('div').fadeOut(50);
	});	
	
	$($input).focus(function() {
		$(this).siblings('div').fadeIn(400);
	})

	$($input).blur(function() {
		$(this).siblings('div').fadeOut(50);
	});	

	//ADD ALL TOOLTIPS ON BUTTONCLICK
	$('.helpbutton').click(function() {
		$('.tooltips').css('display', 'inline-block');
	})	

	
})





















