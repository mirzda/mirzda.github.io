var $form = $('form'),
    $input = $form.children('input'),
    $result = $form.find('span');
    
    
$input.on('keydown keypress keyup',function (e) { 
    var val = $(this).val().length;
    if(val >=5 && !(e.which == 13 || e.which == 8 || e.which == 46)){
        $result.text(val);
        $result.css({'background' : "red"});
        return false;
}
    $result.css({"background" : "transparent"});
    $result.text(val);
    
 });

/*увеличение картины*/


var $img = $('img');
 $img.one('click', function (){
    var src = $img.attr('src');
    var path = src.slice(0,(src.indexOf(".")));
    var exp = src.slice(src.lastIndexOf("."));
    var $res = path + "-lg" + exp;
    return $img.attr("src", $res);
})

  








