$(document).ready(function () {

   $('.reviews__slider').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      responsive: [
         {
            breakpoint:1139,
            settings:{
               slidesToShow: 2,
            }
         },
         {
         breakpoint:700,
            settings:{
               slidesToShow: 1,
            }
         }
      ],
      speed: 900,
      initialSlide: 3,
      easing: 'ease-in',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: true,
      swipe: true,
      touchThreshold: 5,
   });

});
$(document).ready(function () {

   $('.examples__slider').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: false,
      slidesToShow: 2,
      responsive: [
         {
            breakpoint:768,
            settings:{
               slidesToShow: 1,
            }
         }
      ],
      speed: 900,
      initialSlide: 3,
      easing: 'ease-in',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: true,
      swipe: true,
      touchThreshold: 5,
   });

});


$(document).ready(function () {
   $('.block__title').click(function(event){
      if($('.spoilers__block').hasClass('one')){
         $('.block__title').not($(this)).removeClass('active');
         $('.block__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   })
});
$(document).ready(function () {
   $('.exit').click(function(event){
      $('.company').addClass('hidden');
   })
});
