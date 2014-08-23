$(function(){
    var slideTime = 5000,
        numOfSlides = 4;
        currentSlide = numOfSlides;

    $('.nav .more').on('click',function(){
        $(this).closest('.parent').toggleClass('menu-show');
    });

    $('.manager, .button, .window-exit').on('click', function(event) {
        event.preventDefault();
        $('.popup').toggleClass('active');
    });

    $('#button-4').prop("checked", true);
    
    //slider
    var autoplay = function(){
        if(currentSlide != 1) {
            --currentSlide;
        }            
        else {
            currentSlide = numOfSlides;
        }
    
        var button = '#button-' + currentSlide;
        $(button).prop("checked", true);
    }
    $(".slider-button").on('click', function (){
        clearInterval(autosliding);
        currentSlide = $(this).attr('for').substring(7, 8);
        autosliding = setInterval(autoplay, slideTime);
    })
    
    var autosliding = setInterval(autoplay ,slideTime)

    //preview swap

    $('.preview.small').on('click', function(event) {
        event.preventDefault();
        var $this = $(this);
        $('.preview.small').removeClass('selected');
        $this.addClass('selected');
        var src = $this.children('img').attr('src');
        $('.preview.big').attr('src',src);
    })
})