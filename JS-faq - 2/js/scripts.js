jQuery(document).ready(function ($) {
   /* Custom code */

   $('dt:first-of-type').addClass('active');

   $('dt').on('click', function () {
      $('dt').removeClass('active');
      $(this).toggleClass('active');
   });

});
