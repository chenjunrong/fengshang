$(window).load(function(){
	
	$(".pro-gallery-swiper").on("click",".swiper-slide",function(){
        var index=$(this).index();
		$(".show-product").attr("src",$(this).find(".thumbs-img").attr("src"));
		
	});
	$(".pro-gallery-swiper .swiper-slide:first").click();
	
	$(".pro-gallery .prev-Btn").click(function(){
	  pro_gallery_swiper.slidePrev();
	});
	$(".pro-gallery .next-Btn").click(function(){
	  pro_gallery_swiper.slideNext();
	});
	
	$(".room-gallery .prev-Btn").click(function(){
	  room_gallery_swiper.slidePrev();
	});
	$(".room-gallery .next-Btn").click(function(){
	  room_gallery_swiper.slideNext();
	});
	
	
	$(".inside-title-box .inside-title .prev-Btn").click(function(){
	  tuijian_swiper.slidePrev();
	});
	$(".inside-title-box .inside-title .next-Btn").click(function(){
	  tuijian_swiper.slideNext();
	});
});


var pro_gallery_swiper = new Swiper('.pro-gallery-swiper', {
		    slidesPerView: 6,
            spaceBetween: 20
		});
		
var room_gallery_swiper = new Swiper('.room-gallery-swiper', {

		});		
		
var tuijian_swiper = new Swiper('.tuijian-swiper', {
		    slidesPerView: 3,
            spaceBetween: 19,
            autoplay: 3000
		});

