// skills

$('.indicator').radialIndicator({
    barWidth: 3,
    initValue: 0,
    barColor: "#00a99d",
    fontColor: "#e4e4e4",
    fontFamily: "'Raleway', sans-serif", 
    fontWeight: 800, 
    fontSize: 30,
    percentage: true
});
var indicators = $('.indicator'),
    setIndVal = function () {
        for (let i = 0, $item; $item = indicators[i]; i++) {
            (function (index) {
                setTimeout(function () {
                    $item = $($item);
                    let radialObj = $item.data('radialIndicator'),
                        indexValue = $item.attr('data-index');
                    radialObj.animate(indexValue);
                }, 1000 * index);
            })(i);
        }
    };
    $(window).scroll(function () {
        var $header = $(".header");
        var $offer = $(".offer");
        var $features = $(".features");
        var $scrollingHeight = $header.outerHeight(true) + $offer.outerHeight(true) + $features.outerHeight(true)/2;
        if ($(this).scrollTop() >= $scrollingHeight) {
            setIndVal(); 
        } else if ($(this).scrollTop() < $scrollingHeight ) {
            return false; 
        };
    });

// Sliders


// team-members-slider

$('.members-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<span style="cursor: pointer;" class="slick-prev fa fa-caret-left"></span>',
    nextArrow: '<span style="cursor: pointer;" class="slick-next fa fa-caret-right"></span>',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



$('.comments-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<span style="cursor: pointer;" class="slick-prev fa fa-caret-left"></span>',
    nextArrow: '<span style="cursor: pointer;" class="slick-next fa fa-caret-right"></span>',
});


$('.clients-slider').slick({
    prevArrow: '<span style="cursor: pointer;" class="slick-prev fa fa-caret-left"></span>',
    nextArrow: '<span style="cursor: pointer;" class="slick-next fa fa-caret-right"></span>',
    slidesToShow: 4,
    responsive: [

        {
            breakpoint: 1020,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


// якорные ссылки

$("[href^='#']").click(function () {
    var href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(href).offset().top - 100 + 'px'
    });
    return false;
});

// фиксированное меню 
$(window).scroll(function () {
    var $menu = $(".header-menu");
    var $banner = $(".banner");
    if ($(this).scrollTop() >= $banner.outerHeight(true) && !$menu.hasClass("fixed")) {
            $menu.addClass('fixed');
    } else if ($(this).scrollTop() < $banner.outerHeight(true) && $menu.hasClass("fixed")) {
            $menu.removeClass('fixed');
    };
});


// low-download-content

var countWindowHeight = function () {
        return $(window).height();
    },
    windowHeight = countWindowHeight();

$(window).resize(function () {
    countWindowHeight();
});
$(window).scroll(function () {
    var sections = $('.scroll-show');
    for (let i = 0, section; section = sections[i]; i++) {
        let $section = $(section),
            sectionOffsetTop = $section.offset().top,
            windowScroll = $(window).scrollTop() + (windowHeight / 2);
        if (windowScroll >= sectionOffsetTop) {
            $section.addClass('showed');
        }
    }

});
 // Отправка отзыва Ajax
    $(document).ready(function() {
        $("#send_comment").submit(function() {/* ищем форму и следим за событием отправки*/
            var $form = $(this); 
            var data = $form.serialize();/* сериализовали введенные данные(привели в строку)*/
            $.ajax({
                type: 'POST',
                url: 'send.php',
                data: data,
                beforeSend: function(data) {
                    $form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function(data) {
                    $form.css('display', 'none');   
                    $form.find('input,textarea,select').not('input[type="submit"]').val('');
                    $('.send-form').css('display', 'block');
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function(data) {
                    $form.find('input[type="submit"]').prop('disabled', false);
                }
            });
            return false; // вырубaeм стaндaртную oтпрaвку фoрмы!!!!!!!!!!!!!!!!!!!!
        });
    });
$('.send-form').click(function (){
   $('.send-form').css('display', 'none');
    $('.person').css('display', 'block');   
});
