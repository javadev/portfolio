$(document).ready(function(){
	$('#dropdown_nav li').hover(function(){
		$(this).children('.sub_nav').slideDown('fast');
	},function(){
		$(this).children('.sub_nav').slideUp('fast');
	});
})