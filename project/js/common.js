// gnb
jQuery(function($){
	$('.gnb_wrap').find('li > a.depth01').mouseenter(function(){
		$('.gnb_wrap > li').find('ul.subMenu').show();
	}).focus(function(){
		$('.gnb_wrap > li').find('ul.subMenu').show();
	});
	$('.gnb_wrap').find('li > a.depth01').mouseleave(function(){
		$('.gnb_wrap > li').find('ul.subMenu').hide();
	}).focus(function(){
		$('.gnb_wrap > li').find('ul.subMenu').hide();
	});


	$('#container ').mouseenter(function(){
		$('.gnb_wrap > li').find('ul.subMenu').hide();
	}).focus(function(){
		$('.gnb_wrap > li').find('ul.subMenu').hide();
	});
});


