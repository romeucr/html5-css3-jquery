jQuery(document).ready(function ($) {
   /* Custom code */

   $('dt').on('click', function () {
      $('dt').removeClass('active');
      
      $(this).toggleClass('active');
      
      $(this).children('i')
         .addClass('fa-minus')
         .removeClass('fa-plus');
      
      $(this).siblings('dt').children('i')
         .removeClass('fa-minus')
         .addClass('fa-plus');
      
   });
});
