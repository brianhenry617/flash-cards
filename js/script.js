$(document).ready(function() {

  $("a#show").click(function() {

    $("#cards").slideToggle();
    $("#cards").css({display: "flex"});
 });

  $("a#europe").click(function() {
    $("#europe-info").slideToggle();
  });

  $("a#asia").click(function() {
    $("#asia-info").slideToggle();

  });

  $("a#africa").click(function() {
    $("#africa-info").slideToggle();
  });
});
