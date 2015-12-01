$(function(){
  $('#recipes').mixItUp();
});

$(function(){

  function hamburger(){
    $(".mealcontrols").slideToggle();
  }

  $(".icon").click(hamburger);

});