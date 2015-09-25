/**
 * Created by Michele on 9/24/15.
 */;

$(document).ready(function () {

  $(".faq").hide();

  $("#q1").click(function(){
    $("#faq1").toggle();
  });

  $("#q2").click(function(){
    $("#faq2").toggle();
  });

  $("#q3").click(function(){
    $("#faq3").toggle();
  });

  $("#q4").click(function(){
    $("#faq4").toggle();
  });

  $("#q5").click(function(){
    $("#faq5").toggle();
  });

  $(".q").mouseover(function(){
    $(this).css("background-color", "pink");
  });

  $(".q").mouseout(function(){
    $(this).css("background-color", "transparent");
  });

});