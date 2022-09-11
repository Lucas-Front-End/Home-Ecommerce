const largura = $(window).width();
$('section.master.tipBar .container').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:'<button type="button" class="slick-prev"></button>',
  nextArrow:'<button type="button" class="slick-next"></button>',
});

$('.sub-menu .prateleira > ul').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:'<button type="button" class="slick-prev"></button>',
  nextArrow:'<button type="button" class="slick-next"></button>',
});

$('#departaments svg').click(function(){
  $(this).parent('#departaments').toggleClass('active');
  $(this).siblings('.menu-departaments').slideToggle(500);
});

$('#departaments .menu-departaments .container>ul>li span').click(function(){
  $(this).parents('li').toggleClass('active').children('.sub-departaments').toggle("slide", { direction: "left" }, 1000)
  .parent('li.active').siblings().removeClass('active').children('.sub-departaments').hide("slide", { direction: "left" }, 1000)
});

if(largura > 800){
  $('section.master.full-banner-desktop .container').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
  });
}else{
  $('section.master.full-banner-mobile .container').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
}
