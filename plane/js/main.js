$(function (){
    $('#popup').on( "click", function (event){
        var t=event.target||event.srcElement;
        if(t.className != "popup") return;
        hidePopup();
    });

    setTime();
    
    $('.timer').on('click',function (e){
        e.preventDefault();
    })

    
});

/*form validation*/
var app = angular.module('plane',[]);

    app.controller('formController',function ($scope){
        $scope.user = {};
        $scope.invalidNumber="error";
        $scope.isPhoneInvalid = function(){
            return isNaN($.trim($scope.user.phone));
        }
        $scope.you = function(){
            alert('you');
        }
    });

/*timer setting*/
function setTime() {
    var date = new Date($("#date").text());
    var currentDate = new Date();
    var time = (date.getTime()-currentDate.getTime())/1000;
    if(time<85536000 && time > 0){
        $('.timer').each(function (index,elemet){
            $(elemet).FlipClock(time, {
                clockFace: 'DailyCounter',
                countdown: true
            });
        });
    }
    
}

/*showing and hiding popups*/
function showPopup (purple) {
        if(purple) {
            $('#popupButton').text('Заказать полет').addClass('purple');
        } else {
            $('#popupButton').text('Заказать звонок').removeClass('purple');
        }
        $('#popup').show();
    }

function hidePopup () {
    $('#popup').hide();
}

