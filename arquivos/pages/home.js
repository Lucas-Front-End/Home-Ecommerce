"use strict";

var largura = $(window).width();
$('section.master.tipBar .container').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>'
});
$('.sub-menu .prateleira > ul').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>'
});
$('#departaments svg').click(function () {
  $(this).parent('#departaments').toggleClass('active');
  $(this).siblings('.menu-departaments').slideToggle(500);
});
$('#departaments .menu-departaments .container>ul>li span').click(function () {
  $(this).parents('li').toggleClass('active').children('.sub-departaments').toggle("slide", {
    direction: "left"
  }, 1000).parent('li.active').siblings().removeClass('active').children('.sub-departaments').hide("slide", {
    direction: "left"
  }, 1000);
});

if (largura > 800) {
  $('section.master.full-banner-desktop .container').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  });
} else {
  $('section.master.full-banner-mobile .container').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hvbWUuanMiXSwibmFtZXMiOlsibGFyZ3VyYSIsIiQiLCJ3aW5kb3ciLCJ3aWR0aCIsInNsaWNrIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImNsaWNrIiwicGFyZW50IiwidG9nZ2xlQ2xhc3MiLCJzaWJsaW5ncyIsInNsaWRlVG9nZ2xlIiwicGFyZW50cyIsImNoaWxkcmVuIiwidG9nZ2xlIiwiZGlyZWN0aW9uIiwicmVtb3ZlQ2xhc3MiLCJoaWRlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE9BQU8sR0FBR0MsQ0FBQyxDQUFDQyxNQUFELENBQUQsQ0FBVUMsS0FBVixFQUFoQjtBQUNBRixDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ0csS0FBdEMsQ0FBNEM7QUFDMUNDLEVBQUFBLElBQUksRUFBRSxLQURvQztBQUUxQ0MsRUFBQUEsUUFBUSxFQUFFLElBRmdDO0FBRzFDQyxFQUFBQSxLQUFLLEVBQUUsR0FIbUM7QUFJMUNDLEVBQUFBLFlBQVksRUFBRSxDQUo0QjtBQUsxQ0MsRUFBQUEsY0FBYyxFQUFFLENBTDBCO0FBTTFDQyxFQUFBQSxNQUFNLEVBQUUsSUFOa0M7QUFPMUNDLEVBQUFBLFNBQVMsRUFBQyxvREFQZ0M7QUFRMUNDLEVBQUFBLFNBQVMsRUFBQztBQVJnQyxDQUE1QztBQVdBWCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ0csS0FBaEMsQ0FBc0M7QUFDcENDLEVBQUFBLElBQUksRUFBRSxLQUQ4QjtBQUVwQ0MsRUFBQUEsUUFBUSxFQUFFLElBRjBCO0FBR3BDQyxFQUFBQSxLQUFLLEVBQUUsR0FINkI7QUFJcENDLEVBQUFBLFlBQVksRUFBRSxDQUpzQjtBQUtwQ0MsRUFBQUEsY0FBYyxFQUFFLENBTG9CO0FBTXBDQyxFQUFBQSxNQUFNLEVBQUUsSUFONEI7QUFPcENDLEVBQUFBLFNBQVMsRUFBQyxvREFQMEI7QUFRcENDLEVBQUFBLFNBQVMsRUFBQztBQVIwQixDQUF0QztBQVdBWCxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QlksS0FBdkIsQ0FBNkIsWUFBVTtBQUNyQ1osRUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxNQUFSLENBQWUsZUFBZixFQUFnQ0MsV0FBaEMsQ0FBNEMsUUFBNUM7QUFDQWQsRUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZSxRQUFSLENBQWlCLG9CQUFqQixFQUF1Q0MsV0FBdkMsQ0FBbUQsR0FBbkQ7QUFDRCxDQUhEO0FBS0FoQixDQUFDLENBQUMsd0RBQUQsQ0FBRCxDQUE0RFksS0FBNUQsQ0FBa0UsWUFBVTtBQUMxRVosRUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUIsT0FBUixDQUFnQixJQUFoQixFQUFzQkgsV0FBdEIsQ0FBa0MsUUFBbEMsRUFBNENJLFFBQTVDLENBQXFELG1CQUFyRCxFQUEwRUMsTUFBMUUsQ0FBaUYsT0FBakYsRUFBMEY7QUFBRUMsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBMUYsRUFBaUgsSUFBakgsRUFDQ1AsTUFERCxDQUNRLFdBRFIsRUFDcUJFLFFBRHJCLEdBQ2dDTSxXQURoQyxDQUM0QyxRQUQ1QyxFQUNzREgsUUFEdEQsQ0FDK0QsbUJBRC9ELEVBQ29GSSxJQURwRixDQUN5RixPQUR6RixFQUNrRztBQUFFRixJQUFBQSxTQUFTLEVBQUU7QUFBYixHQURsRyxFQUN5SCxJQUR6SDtBQUVELENBSEQ7O0FBS0EsSUFBR3JCLE9BQU8sR0FBRyxHQUFiLEVBQWlCO0FBQ2ZDLEVBQUFBLENBQUMsQ0FBQywrQ0FBRCxDQUFELENBQW1ERyxLQUFuRCxDQUF5RDtBQUN2REMsSUFBQUEsSUFBSSxFQUFFLEtBRGlEO0FBRXZEQyxJQUFBQSxRQUFRLEVBQUUsSUFGNkM7QUFHdkRDLElBQUFBLEtBQUssRUFBRSxHQUhnRDtBQUl2REMsSUFBQUEsWUFBWSxFQUFFLENBSnlDO0FBS3ZEQyxJQUFBQSxjQUFjLEVBQUUsQ0FMdUM7QUFNdkRDLElBQUFBLE1BQU0sRUFBRSxJQU4rQztBQU92REMsSUFBQUEsU0FBUyxFQUFDLG9EQVA2QztBQVF2REMsSUFBQUEsU0FBUyxFQUFDO0FBUjZDLEdBQXpEO0FBVUQsQ0FYRCxNQVdLO0FBQ0hYLEVBQUFBLENBQUMsQ0FBQyw4Q0FBRCxDQUFELENBQWtERyxLQUFsRCxDQUF3RDtBQUN0REMsSUFBQUEsSUFBSSxFQUFFLElBRGdEO0FBRXREQyxJQUFBQSxRQUFRLEVBQUUsSUFGNEM7QUFHdERDLElBQUFBLEtBQUssRUFBRSxHQUgrQztBQUl0REMsSUFBQUEsWUFBWSxFQUFFLENBSndDO0FBS3REQyxJQUFBQSxjQUFjLEVBQUUsQ0FMc0M7QUFNdERDLElBQUFBLE1BQU0sRUFBRTtBQU44QyxHQUF4RDtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGFyZ3VyYSA9ICQod2luZG93KS53aWR0aCgpO1xuJCgnc2VjdGlvbi5tYXN0ZXIudGlwQmFyIC5jb250YWluZXInKS5zbGljayh7XG4gIGRvdHM6IGZhbHNlLFxuICBpbmZpbml0ZTogdHJ1ZSxcbiAgc3BlZWQ6IDUwMCxcbiAgc2xpZGVzVG9TaG93OiAxLFxuICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgYXJyb3dzOiB0cnVlLFxuICBwcmV2QXJyb3c6JzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPicsXG4gIG5leHRBcnJvdzonPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+Jyxcbn0pO1xuXG4kKCcuc3ViLW1lbnUgLnByYXRlbGVpcmEgPiB1bCcpLnNsaWNrKHtcbiAgZG90czogZmFsc2UsXG4gIGluZmluaXRlOiB0cnVlLFxuICBzcGVlZDogNTAwLFxuICBzbGlkZXNUb1Nob3c6IDIsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBhcnJvd3M6IHRydWUsXG4gIHByZXZBcnJvdzonPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JyxcbiAgbmV4dEFycm93Oic8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48L2J1dHRvbj4nLFxufSk7XG5cbiQoJyNkZXBhcnRhbWVudHMgc3ZnJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgJCh0aGlzKS5wYXJlbnQoJyNkZXBhcnRhbWVudHMnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICQodGhpcykuc2libGluZ3MoJy5tZW51LWRlcGFydGFtZW50cycpLnNsaWRlVG9nZ2xlKDUwMCk7XG59KTtcblxuJCgnI2RlcGFydGFtZW50cyAubWVudS1kZXBhcnRhbWVudHMgLmNvbnRhaW5lcj51bD5saSBzcGFuJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgJCh0aGlzKS5wYXJlbnRzKCdsaScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5jaGlsZHJlbignLnN1Yi1kZXBhcnRhbWVudHMnKS50b2dnbGUoXCJzbGlkZVwiLCB7IGRpcmVjdGlvbjogXCJsZWZ0XCIgfSwgMTAwMClcbiAgLnBhcmVudCgnbGkuYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuY2hpbGRyZW4oJy5zdWItZGVwYXJ0YW1lbnRzJykuaGlkZShcInNsaWRlXCIsIHsgZGlyZWN0aW9uOiBcImxlZnRcIiB9LCAxMDAwKVxufSk7XG5cbmlmKGxhcmd1cmEgPiA4MDApe1xuICAkKCdzZWN0aW9uLm1hc3Rlci5mdWxsLWJhbm5lci1kZXNrdG9wIC5jb250YWluZXInKS5zbGljayh7XG4gICAgZG90czogZmFsc2UsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgYXJyb3dzOiB0cnVlLFxuICAgIHByZXZBcnJvdzonPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JyxcbiAgICBuZXh0QXJyb3c6JzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPicsXG4gIH0pO1xufWVsc2V7XG4gICQoJ3NlY3Rpb24ubWFzdGVyLmZ1bGwtYmFubmVyLW1vYmlsZSAuY29udGFpbmVyJykuc2xpY2soe1xuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgfSk7XG59XG4iXSwiZmlsZSI6InBhZ2VzL2hvbWUuanMifQ==
