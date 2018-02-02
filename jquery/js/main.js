var $form_wrap = $('.form_wrap'),
$close = $('.close')
;

setTimeout(function() {
    $form_wrap.toggleClass("active");
}, 3000);

$close.click(function(){
    $form_wrap.hide();
});



