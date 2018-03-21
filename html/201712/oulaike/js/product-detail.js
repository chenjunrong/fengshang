$(window).load(function(){
	
	$(".pro-gallery-swiper").on("click",".swiper-slide",function(){
        var index=$(this).index();
        $(".pro-gallery-swiper .swiper-slide").removeClass("active");
		$(this).addClass("active");
		$(".show-product").attr("src",$(this).find(".thumbs-img").attr("src"));
		
	});
	
	$(".pro-gallery-swiper .swiper-slide:first").click();
});



var pro_gallery_swiper = new Swiper('.pro-gallery-swiper', {
		    slidesPerView: 10,
            spaceBetween: 10
		});

