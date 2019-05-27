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
});




