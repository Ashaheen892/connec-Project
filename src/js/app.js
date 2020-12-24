// Section ready
$(document).ready(function () {
  $(".tst a").click(function (e) {
    e.preventDefault();
  });
  $(".slider_one_all .tst a").text(" ");
  $(".tst li").click(function (e) {
    e.preventDefault();
   $('.tst li').removeClass("active")
   $(this).addClass("active")
  });
});
// Section Languages 
$(".modal .icon").click(function (e) {
  e.preventDefault();
  $(".modal").trigger( "click" );
  
});
$(".nav_bar_center_small .dropdown ,.nav_bar_center_small .nav-link").click(function (e) {
  e.preventDefault();
  $(".dropdown-menu").toggleClass("dropdown-menu-show");
});
// slider_one
$(".slider_one").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  pauseOnDotsHover: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  swipe: false,
  infinite:false,
  customPaging: function (slider, i) {
    var title = $(slider.$slides[i]).data("title");
    return '<a class="pager__item" href="#"> ' + title + " </a>";
  },
  dotsClass: "tst",
  appendDots: ".dots-test",
  
});
// nav bar small
$(".nav_bar_toggle a , .center_small_close").click(function (e) {
  e.preventDefault();
  $('.nav_bar_center_small').toggleClass('bar_toggle-opne')
});
// digital sliders 
$('.digital-slider-1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});
// scroll to
$(".app-site .btn-link").click(function(e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $('.app-site').offset().top
},
'slow'
);
});
$(".digital-content .btn-link").click(function(e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $('.digital-content').offset().top
},
'slow'
);
});