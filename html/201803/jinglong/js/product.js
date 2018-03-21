$(window).load(function(){
	$(".type-tabbar-swiper").on("click",".swiper-slide",function(){
        	$(".type-tabbar-swiper .swiper-slide").removeClass("active");
        	$(this).addClass("active");
        	var index=$(this).index();
        	type_tabbar_swiper.slideTo(index, 300, false);
        });
});




var type_tabbar_swiper = new Swiper('.type-tabbar-swiper', {
    slidesPerView :6.5
});	