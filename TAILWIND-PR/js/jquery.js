// TOGGLE

$(document).ready(function(){
    $(".toggle").click(function(){
      $("nav").slideToggle();
    });
});

// STICKY-HEADER

$(window).scroll(function(){
    if($(this).scrollTop() > 0)
    {
        $("header").addClass("sticky");
        $(".back-to-top").fadeIn();
    }
    else
    {
        $("header").removeClass("sticky");
        $(".back-to-top").fadeOut();
    }
});

$(".back-to-top").click(function () {
    $("html").animate({ scrollTop: 0 });
});

// LOADER

$(window).on('load', function () {
    $('.wrapper').fadeOut(1000);
});

// COUNTER-JS
              
var finalValue = 25000;
var startValue = 24000;
var time;
var x;
var numString ='';
var valueLength = finalValue.toString().length;

for (var i = 10; i < valueLength; i++) { 
    numString += '1';
}
x = Number(numString);
function upValue(){
    if(startValue <= finalValue){
    setTimeout(function(){
        document.getElementById('number_up').innerText = startValue;
        if(x > 0){
        startValue = startValue + x;
        time = 0.1;
        }else{
        startValue = startValue + 1;
        time = 0.1;
        }
        upValue();
    },time);
    }else{
    setTimeout(function(){
        document.getElementById('number_up').innerText = finalValue;
    },time);
    }
}
upValue();

// SLIDER

$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
        }
    },
    {
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    }
    ]
});

  //  Swiper Slider 

  var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// THEME-SWITCHER

document.addEventListener('DOMContentLoaded', function() {
const themeSwitcher = document.getElementById('theme-switcher');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeSwitcher.checked = true;
}

else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add('dark');
  themeSwitcher.checked = true;
}

themeSwitcher.addEventListener('change', function() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', this.checked ? 'dark' : 'light');
});
});

$(document).ready(function(){

    $(".swicher i").click(function(){
        $(".swicher").toggleClass("slide");     
    });

    $(".swicher li").click(function(){
        var color = $(this).css("background-color");
        $(":root").css("--theme-color",color);
    });

    $(".swicher li").click(function(){
        var color = $(this).css("color");
        $(":root").css("--theme-text",color);
    });
});