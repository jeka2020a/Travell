$(function(){

   $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prew">&#9668;</button>',
        nextArrow: '<button type="button" class="slick-next">&#9658;</button>',
   });
   
   $('.burger__list').on('click' , function(){
        $('.menu__links').slideToggle();
   });

});