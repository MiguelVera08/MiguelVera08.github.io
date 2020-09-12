// jQuery to hide and fadein navbar


(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 300) {
                $('.navbar').fadeIn(500);
            } else {
                $('.navbar').fadeOut(500);
            }
        });
    });
})(jQuery);