import $ from 'jquery';

window.addEventListener("scroll", ()=> {
    const navbar = document.getElementById("navbar"); 
    if (window.scrollY < 50 && window.innerWidth > 1080) {
        navbar.style.top = "calc(100vh - 50px)";
    } else {
        navbar.style.top = 0;
    }
});

window.addEventListener("resize", ()=> {
    const navbar = document.getElementById("navbar");
    if (window.scrollY < 50 && window.innerWidth > 1080) {
        navbar.style.top = "calc(100vh - 50px)";
    } else {
        navbar.style.top = 0;
    }
});


$(function () {
    $('.slider-bloc').on('click', function () {
        $(this).toggleClass('expanded');
        $('.slider-bloc').not($(this)).removeClass('expanded');
        $('.slider-bloc').find('ul').css('display', 'none');
        if ($('.slider-bloc').hasClass('expanded')) {
            $(this).find('ul').css('display', 'block');
        }
    });

    $(".header-action-scroll").click(function() {
        $('html,body').animate({
            scrollTop: $("#slider").offset().top
        },'slow');
    });

    const video = $('#js-action-video');
    video.on('click', function () {
        $('.header-container').addClass('slide-out');
    });

    $('.slider-bloc-menu ul li').hover(function() {
        $(this).parent('.slider-bloc-menu').find('.slider-bloc-menu-item').fadeIn();
        });
});


