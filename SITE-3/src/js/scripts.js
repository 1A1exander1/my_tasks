$(function() {
    $('.still').on('click', function(){
        $(this).next().slideToggle(1000);
    });
});