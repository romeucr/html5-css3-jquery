jQuery(document).ready(function ($) {
    /* Custom code */
    $('#menu a[href="#home"]').addClass('active')
    
    $('.menu-item a').on('click', function () {
        $('.menu-item a').removeClass('active');
        $(this).addClass('active');
    });


});
