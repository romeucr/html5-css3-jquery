jQuery(document).ready(function ($) {
   /* Custom code */
   $('.sub-menu').addClass('submenu-disabled');

   $('#btn-menu').on('click', function() {
      $('html').toggleClass('clicked');
   });
   
   $('.menu-item').on('click', function() {
      $(this).siblings().children('.sub-menu').addClass('submenu-disabled');
      $(this).siblings().find('.btn-sub').removeClass('fa-chevron-circle-up');
      $(this).siblings().find('.btn-sub').addClass('fa-chevron-down');

      $(this).children('.sub-menu').toggleClass('submenu-disabled');
      $(this).find('.btn-sub').toggleClass('fa-chevron-down fa-chevron-circle-up');
   });
   


});


