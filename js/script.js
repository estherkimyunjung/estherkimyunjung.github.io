/*
//scrollBar위치에 따라 Navigation Menu Color가 바뀌는 함수
function displayNavMenu() {
    if($(window).scrollTop() >= $('.about').offset().top) {
        $('#about-btn').css('color', '#4A4A4A');
        $('#contact-btn').css('color', '#4A4A4A');
        $('.skill').each(function() {
            var expertise = $(this).find('.percentage').text();
            $(this).find('.inner-bar').animate({width : expertise},1000);
            $(this).find('.vertical-center').animate({opacity : '1', top : '0'},1000);
        });
    } else {
        $('#about-btn').css('color', '#f9f9f9');
        $('#contact-btn').css('color', '#f9f9f9');
        
    }
}

// Content를 display하는 함수
function displayContent() {
    if($(window).scrollTop() > $('.header').offset().top) {
        $('.header .vertical-center').animate({opacity: 1}, 1000);
    } 
    if($(window).scrollTop() >= $('.about').offset().top) {
        $('.about .vertical-center').animate({opacity: 1, top: 0}, 1000);
    }
    if($(window).scrollTop() == $('.contact').offset().top) {
        $('.contact .vertical-center').animate({opacity: 1, top: 0}, 1000);
    }
}

//about버튼 조작에 따른 이벤트
$('#about-btn').on('click',aboutEventHandler);
function aboutEventHandler() {
    $('html, body').animate({scrollTop: $('.about').offset().top}, 1000);
}

//contact버튼 조작에 따른 이벤트
$('#contact-btn').on('click',contactEventHandler);
function contactEventHandler() {
    $('html, body').animate({scrollTop: $('.contact').offset().top}, 1000);
}

$(window).on('scroll', displayNavMenu);
$(window).on('scroll', displayContent);

*/

function scrollHandler() {
    if($(window).scrollTop() >= $('.about').position().top) { 
        $('.menu-right button').css('color', '#4A4A4A');
        $('.skill').each(function() {
            var expertise = $(this).find('.percentage').text();
            $(this).find('.inner-bar').animate({width : expertise},1000);
            //$(this).find('.vertical-center').animate({opacity : '1', top : '0'},1000);
        });
    } else {
        $('.menu-right button').css('color', 'white');
    }
}
function contentHandler() {
    $('section').each(function() {
        //let windowBottom = $(window).scrollTop() + $(this).outerHeight();
        let windowBottom = $(window).scrollTop();
        //console.log(windowBottom);
        if(windowBottom >= $(this).offset().top) {
            //console.log(windowBottom);
            //console.log($('section').position().top);
            //$('section .vertical-center').animate({opacity: 1, top: 0}, 1000);
            $(this).find('.vertical-center').animate({opacity: 1, top: 0}, 1000);
        }
    });
}

//처음 페이지 로딩 됐을때
$(window).on('scroll', scrollHandler);
$(window).on('scroll', contentHandler);
$('.header .vertical-center').animate({opacity: 1, top: 0}, 1000);
//섹션 스크롤
$('.menu-right button').on('click', function() {
    var id = $(this).attr('id');
    if(id == "about-btn") {
        $('html, body').animate({scrollTop: $('.about').offset().top}, 1000);
    } else if (id == "contact-btn") {
        $('html, body').animate({scrollTop: $('.contact').offset().top}, 1000);
    } else if (id == "home-btn") {
        $('html, body').animate({scrollTop: $('.header').offset().top}, 1000);
    }
});
