$(function() {
	console.log($)
	var $tabs = $('.tabs');
	$($tabs).click(function() {
		
		$(this).addClass('tab--active');
		$(this).siblings().removeClass('tab--active');
		var $indexTab = $($tabs).index(this);

		$text = $('.tab-text');

		$($text[$indexTab]).addClass('tab-text--active');
		$($text[$indexTab]).siblings().removeClass('tab-text--active');
	})
})





















