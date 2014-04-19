$(document).ready(function(){
  $("a.nav-link").click(function(e){
    e.preventDefault();
    var clickID = $(this).attr("href");
    $("html, body").animate({scrollTop: $(clickID).offset().top}, "slow");
    return false;
  });

  $(".thumbnail img").css('opacity', 0.5);

  $(".thumbnail img").hover(function(){
      $(this).animate({opacity: 1}, 1000);},
      function() {
        $(this).animate({opacity: 0.5}, 1000);
  });


});
