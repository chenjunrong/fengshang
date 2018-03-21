$(window).load(function(){
	
	$(".prodls-detail .prevBtn").click(function(){
	  	pro_gallery_swiper.slidePrev();
	  	prodls_swiper.slidePrev();
	});
	$(".prodls-detail .nextBtn").click(function(){
	  	pro_gallery_swiper.slideNext();
	  	prodls_swiper.slidePrev();
	});
	
	$(".procp-detail .prevBtn").click(function(){
	  	procp_swiper.slidePrev();
	});
	$(".procp-detail .nextBtn").click(function(){
	  	procp_swiper.slideNext();
	});
	
	$(".pro-gallery-swiper").on("click",".swiper-slide",function(){
        var index=$(this).index();
        pro_gallery_swiper.slideTo(pro_gallery_swiper.clickedIndex, 500, false);//切换到第一个slide，速度为1秒
        $(".pro-gallery-swiper .swiper-slide").removeClass("active");
		$(this).addClass("active");
		$(".prodls-detail .show-img").attr("src",$(this).find(".product-img").attr("src"));	
	});
});



var pro_gallery_swiper = new Swiper('.pro-gallery-swiper', {
		    slidesPerView: 3,
            spaceBetween: 20,
		    direction: 'vertical',
		    onSlideChangeStart: function(swiper){
		      var index=swiper.activeIndex+1;
		      $(".prodls-detail .swiper-slide").removeClass("active");
              $(".prodls-detail .swiper-slide:nth-child("+index+")").addClass("active");
              $(".prodls-detail .show-img").attr("src",$(".prodls-detail .swiper-slide.active").find(".product-img").attr("src"));
		    }
	
		});

var prodls_swiper = new Swiper('.prodls-swiper', {
		    slidesPerView: 4,
            spaceBetween: 18,
            loop:true,
            autoplay: 3000
		});
		
var procp_swiper = new Swiper('.procp-swiper', {
		    slidesPerView: 3,
            spaceBetween: 16.5,
            loop:true,
            autoplay: 3000
		});		
