$(window).load(function(){
	
	$(".pro-gallery-swiper").on("click",".swiper-slide",function(){
        $(".pro-gallery-swiper .swiper-slide").removeClass("active");
		$(this).addClass("active");
		$(".show-pro-img").attr("src",$(this).find(".thumbs-img").attr("src"));
		
	});
});

var pro_gallery_swiper = new Swiper('.pro-gallery-swiper', {
        slidesPerView: 7,
//      loop:true,
        spaceBetween: 23.3,
	    onSlideChangeStart: function(swiper){
		      var index=swiper.activeIndex+1;
		      $(".product-detail .swiper-slide").removeClass("active");
	          $(".product-detail .swiper-slide:nth-child("+index+")").addClass("active");
	          $(".product-detail .show-pro-img").attr("src",$(".product-detail .swiper-slide.active").find(".thumbs-img").attr("src"));
		},
		breakpoints: {
            1024: {
                slidesPerView: 7,
                spaceBetween: 23.3
            },
            768: {
                slidesPerView: 7,
                spaceBetween: 23.3
            },
            640: {
                slidesPerView: 5,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 4,
                spaceBetween: 10
            }
        }

    });