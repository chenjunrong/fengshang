$(window).load(function(){
	 autoHeight();
});

function autoHeight(){
	var winHeight=$(window).height();
	var box1Height=winHeight-$("#header").height();
	$("#index .box1").height(box1Height);
};


var swiper1 = new Swiper('.swiper1', {
	pagination: '.banner-pagination',
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});

var swiper2 = new Swiper('.swiper2', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});
 var swiper3 = new Swiper('.swiper3', {
   	nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 3000,
    autoplayDisableOnInteraction: false
});