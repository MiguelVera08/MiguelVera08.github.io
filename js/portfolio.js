// jQuery to hide and fadein navbar


// (function($) {
//     $(document).ready(function(){
//         $(window).scroll(function(){
//             if ($(this).scrollTop() > 200) {
//                 $('.navbar').fadeIn(500);
//             } else {
//                 $('.navbar').fadeOut(500);
//             }
//         });
//     });
// })(jQuery);

(function ($) {
    $(document).ready(function(){
        // hide .navbar first
        $(".navbar").hide();

        // fade in .navbar
        $(function () {
            $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > 100) {
                    $('.navbar').fadeIn();
                } else {
                    $('.navbar').fadeOut();
                }
            });

        });
    });
}(jQuery));