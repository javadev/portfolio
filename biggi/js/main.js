
$(document).ready(function(){
	$('.mainMenu li.mainLine').hover(function(){
		$(this).animate({
    		top: "-=20px"
  		}, {duration:300} );
		$(this).children('.subMenu').slideDown({duration:100,queue:false});

	},function(){
		$(this).children('.subMenu').slideUp({duration:100,queue:false});
		$(this).animate({
    		top: "+=20px"
  		}, {duration:300} );
	});
	var barBasicTop = $('#slideBar').offset().top;
	$(window).scroll(function() { //when window is scrolled
		var windowTop = $(window).scrollTop();
     	var barTop = $('#slideBar').offset().top;   
     	var pos='';
     	var barHeight = document.getElementById('slideBar').offsetHeight;
     	var mainContentHeight = document.getElementById('mainContent').offsetHeight;
     	if(windowTop>barBasicTop){
     		pos='+='+(windowTop-barTop)+'px';
     	} 
     	if (barHeight + (windowTop - barBasicTop) > mainContentHeight) return;	
	$('#slideBar').animate({top:pos},{duration:1000,queue:false});
 	});

})