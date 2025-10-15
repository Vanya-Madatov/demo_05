$(window).on('load', function() {
    $('.loader').fadeOut(300);
});
var upBtn = $('.up-btn');
upBtn.hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        upBtn.fadeIn(); 
    } else {
        upBtn.fadeOut(); 
    }
});
upBtn.click(function() {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
});

$(".scroll-btn").click(function() {
    var scrollId = $(this).attr('data-scroll');
    $('html, body').animate({
        scrollTop: $(scrollId).offset().top
    }, 500);

});


// def code


$('.head-slider').slick({
    slidesToShow: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding:'10%',

    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        },


    ]
});
$('.stream-slider').slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding:'10%',

    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        },


    ]
});

$('.head-form-switch-btn-item').click(function(){
    var tabId = $(this).index();
    $('.head-form-switch-btn-item').removeClass('active');
    $(this).addClass('active');
    $('.head-form-switch-item').fadeOut(0);
    $('.head-form-switch-item').eq(tabId).fadeIn(200);
});

$('.head-form-option-item').click(function(){
    $('.head-form-option-item').removeClass('active');
    $(this).addClass('active');
});

$('.head-form-check input').on('change', function() {
    $(this).closest('.head-form-check').toggleClass('active', this.checked);
});

$('.head-form-block-item-password-object').click(function(){
    const input = $(this).siblings('input'); 
    const type = input.attr('type') === 'password' ? 'text' : 'password';
    input.attr('type', type);
    $(this).toggleClass('active', type === 'text'); 
});

$(window).on('load resize', function() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    $('.why-row').slick({
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });
  } else {
    
  }
});