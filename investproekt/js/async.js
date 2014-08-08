/**
 * Created by Svyatoslav Svitlychnyi on 21.06.14.
 */

$(document).ready(function() {
    $('input').ajaxForm(function() {
        $("input").val("");
        alert("Спасибо, вам перезвонят в ближайшее время!");
    });
});