$(window).on('load', function () {
  setTimeout(function () {
    $(".loader-page").css({
      visibility: "hidden",
      opacity: "0"
    })
  }, 2000);

});
$(document).ready(function () {
  $("#b1").click(function () {
    $(".c1").fadeIn(3000);
  });
});
$(document).ready(function () {
  $("#b2").click(function () {
    $(".c2").fadeIn(3000);
  });
});
