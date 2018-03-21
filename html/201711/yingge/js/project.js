$(window).load(function(){
	
	$(".project .prevBtn").click(function(){
	  	project_swiper.slidePrev();
	});
	$(".project .nextBtn").click(function(){
	  	project_swiper.slideNext();
	});
	
	$(".project-swiper").on("click",".swiper-slide",function(){
        var index=$(this).index();
        project_swiper.slideTo(project_swiper.clickedIndex, 500, false);//切换到第一个slide，速度为1秒
        $(".project-swiper .swiper-slide").removeClass("active");
		$(this).addClass("active");
		$(".project .show-img").attr("src",$(this).find(".project-img").attr("src"));	
	});
});



var project_swiper = new Swiper('.project-swiper', {
		    slidesPerView: 3,
            spaceBetween: 56,
		    direction: 'vertical',
//		    loop:true,
		    onSlideChangeStart: function(swiper){
		      var index=swiper.activeIndex+1;
		      $(".project .swiper-slide").removeClass("active");
              $(".project .swiper-slide:nth-child("+index+")").addClass("active");
              $(".project .show-img").attr("src",$(".project .swiper-slide.active").find(".project-img").attr("src"));
		    }
	
		});