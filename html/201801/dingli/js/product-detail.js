$(window).load(function(){
	
	$(".pro-gallery-swiper").on("click",".swiper-slide",function(){
        var index=$(this).index();
        $(".pro-gallery-swiper .swiper-slide").removeClass("active");
		$(this).addClass("active");
		$(".show-product").attr("src",$(this).find(".thumbs-img").attr("src"));
		
	});
	$(".pro-gallery-swiper .swiper-slide:first").click();
	
	
	$(".inside-title-box .inside-title .prev-Btn").click(function(){
	  tuijian_swiper.slidePrev();
	});
	$(".inside-title-box .inside-title .next-Btn").click(function(){
	  tuijian_swiper.slideNext();
	});
});


var pro_gallery_swiper = new Swiper('.pro-gallery-swiper', {
		    slidesPerView: 9,
            spaceBetween: 9
		});
		
var tuijian_swiper = new Swiper('.tuijian-swiper', {
		    slidesPerView: 3,
            spaceBetween: 19,
            autoplay: 3000
		});

