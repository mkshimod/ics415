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


$(document).ready(function() {
  $("#submit").click(function() {
    var myUrl = document.getElementById('index.');
    $.ajax({
      url: 'index.html', // NOTE: apparently you cannot access urls that are not relative to current directory with AJAX, so i had to use a local url
      success: function(data) {
        document.getElementById('result').innerHTML= "Number of links are: " + $(data).find('a').length;
      }
    })
  })
});