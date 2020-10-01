
$('.slill-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',   
    autoplay: true,
});

var btn = document.querySelector('.burger-menu');
var men = document.querySelector('.nav-barik');
var min = document.querySelector('.nav__links');
btn.addEventListener('click' , function(){
    men.classList.toggle('nav-barik-active');
    min.classList.toggle('nav__links_active');
})