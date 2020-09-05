$(document).ready(function() {
    var toggle = true;
    $('.toggler').click(function() {

        toggle = !toggle;

        // console.log(toggle);

        if (toggle == true) {
            $('.toggler').html('<a href="#"><i class="las la-bars la-2x"></i></a>');
        } else {
            $('.toggler').html('<a href="#"><i class="las la-times la-2x"></i></a>');
        }

        $('.nav').slideToggle(300);
    })
});