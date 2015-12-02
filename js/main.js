$(function(){

  $('#recipes').mixItUp();

  $(".icon").click(hamburger);


  function hamburger(){
    $(".mealcontrols").slideDown();
  }


  function randomlinks(){
    var randomrecipe = Math.round(Math.random()*20)
    var links = new Array()
    links[0] = "lambchops.html"
    links[1] = "tomatosoup.html"
    links[2] = "pumpkinbread.html"
    links[3] = "pullapartbread.html"
    links[4] = "honeysoybraisedribs.html"
    links[5] = "crispysweetpotato.html"
    links[6] = "pumpkinbakedoatmeal.html"
    links[7] = "sausagekalegnocchi.html"
    links[8] = "ropavieja.html"
    links[9] = "pumpkinbreadfrenchtoast.html"
    links[10] = "turkeystuffedspaghettisquash.html"
    links[11] = "slowcookercreolechicken.html"
    links[12] = "chocolatechipcookie.html"
    links[13] = "peanutbuttercookiedoughball.html"
    links[14] = "shrimpgarlicbreadsauce.html"
    links[15] = "sausagestratta.html"
    links[16] = "doublechocolatecake.html"
    links[17] = "shakshuka.html"
    links[18] = "crabcakes.html"
    links[19] = "yellowtailcrudo.html"
    links[20] = "unirisotto.html"

    window.location=links[randomrecipe]
  }
  
    $(".surprise").click(randomlinks);

});