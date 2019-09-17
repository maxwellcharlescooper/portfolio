$(document).ready(function() {
  $("#max").click(function() {
    $('html, body').animate({scrollTop:0}, 'slow');
  });

  $("#about-nav").click(function() {
    const distanceFromTop = $("#about").offset().top;
    const headerHeight = $("#header").height();
    const total = distanceFromTop - headerHeight;
    $('html, body').animate({scrollTop: total}, 'slow');
  });

  $("#education-nav").click(function() {
    const distanceFromTop = $("#education").offset().top;
    const headerHeight = $("#header").height();
    const total = distanceFromTop - headerHeight;
    $('html, body').animate({scrollTop: total}, 'slow');
  });

  $("#future_experience_nav").click(function() {
    alert("coming soon!");
  });

  $("#future_projects_nav").click(function() {
    alert("coming soon!");
  });
});