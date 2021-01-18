jQuery(document).ready(function ($) {
   /* Custom code */

   $('dt').on('click', function () {
      $(this).toggleClass('active')
      $(this).next('dd').toggleClass('active');
      $(this).children('i').toggleClass('fa-plus fa-minus')
   });
   

});
