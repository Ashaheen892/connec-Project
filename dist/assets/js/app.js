/*=============================================
=            Section ready            =
=============================================*/

$(document).ready(function () {
  $(".tst a").click(function (e) {
    e.preventDefault();
  });
  $(".slider_one_all .tst a").text(" ");
});

/*=====  End of Section ready  ======*/
/*=============================================
=            Section Languages            =
=============================================*/

$(".Languages_link ,.Languages_icon").click(function (e) {
  e.preventDefault();
  $(".Languages_div").toggleClass("Languages_open");
});

/*=====  End of Section Languages  ======*/

/*=============================================
=            Section slider_one            =
=============================================*/

$(".slider_one").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  pauseOnDotsHover: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  swipe: false,
  customPaging: function (slider, i) {
    var title = $(slider.$slides[i]).data("title");
    return '<a class="pager__item" href="#"> ' + title + " </a>";
  },
  appendDots: ".dots-test",
  dotsClass: "tst",
});

/*=====  End of Section slider_one  ======*/

/*=============================================
=            Section nav bar small            =
=============================================*/

$(".nav_bar_toggle a , .center_small_close").click(function (e) {
  e.preventDefault();
  $('.nav_bar_center_small').toggleClass('bar_toggle-opne')
});

/*=====  End of Section nav bar small  ======*/

/*=============================================
=            Section digital sliders            =
=============================================*/

$('.digital-slider-1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});

/*=====  End of Section digital sliders  ======*/
