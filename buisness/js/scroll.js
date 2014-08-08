$(function(){
	//scroll to target hash alement
	var smoothScroll = function(target, speed){
		var $target = $(target);
		this.speed = speed || 300;
		$('html, body').stop().animate({
				'scrollTop': $target.offset().top,
				queue: false
			}, this.speed, 'linear', function () {
				window.location.hash = target;
				$(window).on('scroll',define);
				$('nav a[href^="#"]').removeClass('selected');
				$('nav a[href^="'+target+'"]').addClass('selected');
			});
	}
	var hashes = new Array();
	$('nav a[href^="#"]').each(function (index,element){
		hashes[index] = {
			offset: $(element.hash).offset().top,
			pos: element.hash
		}
	});
	/*autodefine has*/
	var define = function(){
		for (var i = hashes.length-1; i>=0;i--){
			if($(this).scrollTop() >= hashes[i].offset-75){
				$('nav a[href^="#"]').removeClass('selected');
				$('nav a[href^="'+hashes[i].pos+'"]').addClass('selected');
				break;
			}
		}
	}
	
	$('nav a[href^="#"]').on('click',function(){
		$(window).off('scroll');
		$('nav a[href^="#"]').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$(window).on('scroll',define);

	//binding scroll to hash-links
	$('a[href^="#"]').on('click.smoothscroll',function (e) {
			e.preventDefault();		
			//$(window).off('scroll'); 
			var target = this.hash;		
		 	smoothScroll(target);
			
		});

})

