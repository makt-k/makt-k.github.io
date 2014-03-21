$(document).ready(function() {
  $('#frontpage').click(Portfolio.to_home)
  $('#about').click(Portfolio.to_about);
  $('#work').click(Portfolio.to_work);
});

var Portfolio = Portfolio || {}

Portfolio.to_home = function()  {
  $.get("/index.html", function(data) {
    $("body").html(data);
  });
};

Portfolio.to_about = function()  {
  $.get("/html/about.html", function(data) {
    $("#content").html(data);
  });
};

Portfolio.to_work = function() {
  $.get("/html/projects.html", function(data) {
    $("#content").html(data);
  });
};

