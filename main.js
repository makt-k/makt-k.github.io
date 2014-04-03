$(document).ready(function(){
  $("a.nav-link").click(function(e){
    e.preventDefault();
    var clickID = $(this).attr("href");
    $("body").animate({scrollTop: $(clickID).offset().top}, 2000);
    return false;
  });
});
