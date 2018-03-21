$(window).load(function(){
	
	$(".product-gallery-swiper").on("click",".swiper-slide",function(){
        $(".product-gallery-swiper .swiper-slide").removeClass("active");
		$(this).addClass("active");
		$(".show-pro-img").attr("src",$(this).find(".thumbs-img").attr("src"));	
	});
	
	$(".product-gallery-swiper .swiper-slide:first-child").click();

});


var product_gallery_swiper = new Swiper('.product-gallery-swiper', {
            slidesPerView: 7,
		    spaceBetween: 10,
		    breakpoints: {
	            768: {
	                slidesPerView: 7,
			        spaceBetween: 10,
	            },
	            640: {
	                slidesPerView: 5,
	                spaceBetween: 10
	            },
	            320: {
	                slidesPerView: 4,
	                spaceBetween: 10
	            }
            },
            onSlideChangeStart: function(swiper){
		      var index=swiper.activeIndex+1;
		      $(".product-gallery-swiper .swiper-slide").removeClass("active");
              $(".product-gallery-swiper .swiper-slide:nth-child("+index+")").addClass("active");
              $(".show-pro-img").attr("src",$(".product-gallery-swiper .swiper-slide.active").find(".thumbs-img").attr("src"));
		    }

		});