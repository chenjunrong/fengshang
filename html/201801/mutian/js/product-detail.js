$(window).load(function(){
	
	$(".inside-title-box .inside-title .prev-Btn").click(function(){
	  tuijian_swiper.slidePrev();
	});
	$(".inside-title-box .inside-title .next-Btn").click(function(){
	  tuijian_swiper.slideNext();
	});
});



var tuijian_swiper = new Swiper('.tuijian-swiper', {
		    slidesPerView: 3,
            spaceBetween: 19,
            autoplay: 3000
		});

