// 참고할 다른 방법들.....
// 참고1
function toSection(sectionName) {
    $('html, body').animate({scrollTop: $(sectionName).position().top}, 1000)
}

$('#about-btn').on('click', toSection.bind(null, '.about'))
$('#contact-btn').on('click', toSection.bind(null, '.contact')) 



// 참고2 - 1
$('#contact-btn').on('click', function() {
    menuClick('contact'); 
 });
 $('#about-btn').on('click', function() {
    menuClick('about'); 
 });
 $(window).on('scroll', scrollHandler);
 
 function scrollHandler() {
     var navbarBottom = $(window).scrollTop() + $('.navbar').outerHeight();
     if (navbarBottom >= $('.about').position().top) {
         $('.navbar li button').css('color', '#4A4A4A');
     } else {
           $('.navbar li button').css('color', 'white');
     }
 }
 
 function menuClick(menuName) {
     $('html, body').animate({scrollTop : $("." + menuName).position().top}, 500);   
 }
// 참고2 - 2
$('#contact-btn').on('click', function() {
    var t = '.contact';
    console.log(t);
    var t1 = 'contact';
    // var t2 = contact;
    // console.log(t2, typeof t2);
   // menuClick(t);
   menuClick1(t1);
});
$('#about-btn').on('click', function() {
// $('#about-btn').on('click', function() { 
    var t = '.about';
   menuClick(t); 
});
$(window).on('scroll', scrollHandler);

function scrollHandler() {
    var navbarBottom = $(window).scrollTop() + $('.navbar').outerHeight();
    if (navbarBottom >= $('.about').position().top) {
        $('.navbar li button').css('color', '#4A4A4A');
    } else {
          $('.navbar li button').css('color', 'white');
    }
}

function menuClick(menuName) {
    console.log(menuName, typeof menuName);
    console.log($(menuName));
    // $('html, body').animate({scrollTop : $("'.'" + menuName + "'").position().top}, 500);
    $('html, body').animate({scrollTop : $(menuName).position().top}, 500);   
}

function menuClick1(menuName) {
    console.log(menuName, typeof menuName);
    console.log($(menuName));
    $('html, body').animate({scrollTop : $('.'+menuName).position().top}, 500);   
}



//참고 3
/* navbar 색 변환 , 페이지 로딩시 vertical-center 출력  */

$(document).ready(function(){
    var window_scrollTop = $(window).scrollTop();
    var about_scrollTop = $('.about').offset().top;
    var contact_scrollTop = $('.contact').offset().top;
    
    //console.log(window_scrollTop);
    //console.log(about_scrollTop);
    //console.log(contact_scrollTop);

    if(window_scrollTop < about_scrollTop){
        $('.header .vertical-center').animate({opacity : 1, top: 0}, 1000)
    }
    
});

// 변수의 반복 선언을 줋이기 위해서 해당 클래스로 가는 함수에 
// 변수를 제거하고 함수 밖에 전역변수로 정의
$(window).on('scroll', function(){    
    //window 전체 높이를 windowHeight 변수에 넣음
    var windowHeight = $(window).scrollTop();    
    //검은색 글씨로 바뀌는 부분(첫페이지 넘어서는 순간의 높이)을 blackFontHeight에 넣음
    var aboutFontHeight = $('.about').position().top;
    var contactHeight = $('.contact').position().top;  
    //console.log(windowHeight);
    //console.log(aboutFontHeight);
    //console.log(contactHeight);
    //console.log( $('.about').position().top);

    //스크롤 내릴 때, 페이지 opacity 1로 바뀌면서 서서히 나타나게 하기
    if(windowHeight <= aboutFontHeight){
        $("#about-btn, #contact-btn").css("color","#4A4A4A");            
    }else if((aboutFontHeight < windowHeight) && (windowHeight < contactHeight)){
        $('.about .vertical-center').animate({opacity : 1, top : 0}, 1000);           
    }else if(windowHeight >= contactHeight){
        $('.contact .vertical-center').animate({opacity : 1, top : 0}, 1000);    
    }

    //스크롤 내릴 때 오른쪽 위 about contact 글씨 검은색으로 바뀌게 하기
    if(windowHeight >= aboutFontHeight){
        $("#about-btn, #contact-btn").css("color","#4A4A4A");            
    }else{
        $("#about-btn, #contact-btn").css("color","#fff");            
    }  
});

// navbar의 about-btn 버튼을 클릭 하였을 때 해당위치로 가는 부분
$('#about-btn').on('click', function(){    
    var about_scrollTop = $('.about').offset().top;
    console.log(about_scrollTop);
    $('html, body').animate({scrollTop: about_scrollTop}, 1000);
});

// navbar의 contract-btn 버튼을 클릭 하였을 때 해당위치로 가는 부분
$('#contact-btn').on('click', function(){
    var contact_scrollTop = $('.contact').offset().top;
    console.log(contact_scrollTop);
    $('html, body').animate({scrollTop: contact_scrollTop}, 1000);
});
