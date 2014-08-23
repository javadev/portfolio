$(function(){
    var body = $('body'),
        colorDiv = $('.colors'),
        color = localStorage.getItem('color');

    body.attr('class',color);

    var toSmall = function() {
        localStorage.setItem('color',body.attr('class'));

        colorDiv.removeClass('big').addClass('small');

        setTimeout(function(){
            colorDiv.on('click',toBig);
        },50)
        

        $('#green').off();

        $('#yellow').off();

        $('#orange').off();
        
        $('#purple').off();

    }

    var toBig = function() {

        colorDiv.off();

        colorDiv.removeClass('small').addClass('big');

        $('#green').on('click', function() {
            body.attr('class','green');  
            toSmall();     
        });

        $('#yellow').on('click', function() {
            body.attr('class','yellow');
            toSmall();
            
        });

        $('#orange').on('click', function() {
            body.attr('class','orange');
            toSmall();
        });
        
        $('#purple').on('click', function() {
            body.attr('class','purple');
            toSmall();           
        });
    }
    
    colorDiv.on('click',toBig);   

    $(document).click(function (event){
        var element = event.target||event.srcElement;
        if($(element).closest(colorDiv).length)
            return;
        toSmall();
    })
});