import '../styles/index.scss';

import $ from 'jquery';

$(document).ready(function () {
    $('#js-header-navbar ul li').click(function() {
        $('#js-header-navbar').find('li.active-link').removeClass('active-link');
        $(this).addClass('active-link');

        let index = $(this).index()+1;
        $('#js-header-wrapper').find('.active-article').removeClass('active-article');
        $(`#js-article${index}`).addClass('active-article');

    });


    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls

    $(".next").click(function(){
        showSlides(slideIndex += -1);
    });

    $(".prev").click(function(){
        showSlides(slideIndex += 1);
    });


    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");

    if (n > slides.length) {slideIndex = 1;} 
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slides[slideIndex-1].style.display = "flex"; 

    }
});







