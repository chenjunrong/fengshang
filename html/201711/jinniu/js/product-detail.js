$(window).load(function(){
	
	$(".product-detail .prevBtn").click(function(){
	  	pro_gallery_swiper.slidePrev();
	});
	$(".product-detail .nextBtn").click(function(){
	  	pro_gallery_swiper.slideNext();
	});
	

	$(".pro-gallery-swiper").on("click",".swiper-slide",function(){
        var index=$(this).index();
        $(".pro-gallery-swiper .swiper-slide").removeClass("active");
		$(this).addClass("active");
		$(".show-pro-img").attr("src",$(this).find(".thumbs-img").attr("src"));
		
	});
});



var pro_gallery_swiper = new Swiper('.pro-gallery-swiper', {
		    slidesPerView: 4,
            spaceBetween: 3.33,
		    onSlideChangeStart: function(swiper){
		      var index=swiper.activeIndex+1;
		      $(".product-detail .swiper-slide").removeClass("active");
              $(".product-detail .swiper-slide:nth-child("+index+")").addClass("active");
              $(".product-detail .show-pro-img").attr("src",$(".product-detail .swiper-slide.active").find(".thumbs-img").attr("src"));
		    }
	
		});

