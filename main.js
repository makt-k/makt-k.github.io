$(document).ready(function(){
  $("a.nav-link").click(function(event){
    event.preventDefault();
    var clickID = $(this).attr("href");
    $("body").animate({scrollTop: $(clickID).offset().top}, "slow");
    return false;
  });
});
