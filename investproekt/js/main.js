$(document).ready(function(){
	var current = $("#current");
	var offset;
	setTime();
	setSizeOfFeedbacks();
	window.onresize = function(){
		var feedbacks = [
		$('#feedback-1'),
		$('#feedback-2'),
		$('#feedback-3')
	]
	for (var i in feedbacks){
		feedbacks[i].css('height','auto');
	}
	setSizeOfFeedbacks();
	}
	//setting slider
	$( "#slider" ).slider({
		range:"min",
		value:0,
		min:0,
		max:2950,
		animate:true,
		slide: sliderSlide,
		change: sliderChange 
	});
	 function sliderSlide(e,ui){
			sliderValue = ui.value ;
			current.text(sliderValue * 1000 +50000);
			offset = (100/2950 *sliderValue - 100*100/2950)+ "%";
			current.css({left:offset});
		};
	function sliderChange(e,ui){
			sliderValue = ui.value;
			current.text(sliderValue  * 1000 + 50000);
			offset = (100/2950 *sliderValue - 100*100/2950)+ "%";
			current.css({left:offset});
		}	
	var forms=[
        $("#form-top"),
        $("#form-bot"),
        $("#popupForm")       
    ];
    //form validation
    for (var i in forms){
    	forms[i].on('submit',function(){

    		var form = $(this),
    			url = form.attr("action"),
    			type = form.attr("method"),
    			data = {};

    		form.find('[name]').each(function(){
    			var field = $(this),
    				name = field.attr('name'),
    				value = field.val();
    				data[name] = value;
    		});
    		console.log(data);
    		$.ajax({
    			dataType: "json",
    			url:url,
    			type:type,
    			data:data,
    			success: function(response){
    				/*if(response == 1){
    					succesBlock(true);
    					failedBlock(false);
    				} else {
    					succesBlock(true);
    					failedBlock(false);
    				}*/
    				console.log('sooka');
    				console.log(response);
    			}
    		});

    		return false;
    	});

        forms[i].validate({
        rules:{
            name:{
                required: true
            },
            tel:{
                required: true
            }
       },
       messages:{
	            name:{
	                required: "Это поле обязательно для заполнения"
	            },

	            tel:{
	                required: "Это поле обязательно для заполнения"
	            }
            }

        });

    }
});
//resizing feedback blocks
function setSizeOfFeedbacks(){
	var feedbacks = [
		$('#feedback-1'),
		$('#feedback-2'),
		$('#feedback-3')
	]
	var max = 0;
	console.log(max);
	for (var i in feedbacks){
		var height = feedbacks[i].css('height').substring(0, 3);
		max = (max<height)?height : max;
	}
	for (var i in feedbacks){
		feedbacks[i].css('height',max);
	}
}
//setting time for timer
function setTime(){
	var clocks = [
    	$('#clock-top'),
    	$('#clock-bot')
    ];
	var date = new Date($("#date").text());
	var currentDate = new Date();
	var time = (date.getTime()-currentDate.getTime())/1000;
    console.log(time);
	if(time > 359999 || time < 0)
		time = 0;
	var cl;
	for(var i in clocks){
	    cl = clocks[i].FlipClock({
			countdown:true
		});

		cl.setTime(time);
		cl.start();
	}		

}
function showPopup(){        
		$('#popup').fadeIn('fast');
		$('#popup').on( "click", function(event) {
	            var t=event.target||event.srcElement;
	            if(t.className != "popup") return;
	            hidePopup();
	        });
	}
	function hidePopup(){
		$('#popup').fadeOut('fast');
	}