	   $(window).load(function(){

	   	//禁止滑动事件
	   	bgSwiper.enableTouchControl();
	   	bgSwiper.disableTouchControl();
	   	
	   		$('.space-top-gallery .prev-Btn').click(function(){
			  space_top_swiper.slidePrev();
			});
			$('.space-top-gallery .next-Btn').click(function(){
			  space_top_swiper.slideNext();
			});
			$('.space-bottom-swiper .prev-Btn').click(function(){
			   space_bottom_swiper.slidePrev();
			});
			$('.space-bottom-swiper .next-Btn').click(function(){
			  space_bottom_swiper.slideNext();
			});
			
			
			$(".space-bottom-swiper").on('click','.swiper-slide',function(){ 				
				space_top_swiper.slideTo($(this).index(), 500, false);
				bgSwiper.slideTo($(this).index(), 500, false);
			});
					
	   });
	   
	   

	    var bgSwiper  = new Swiper('.space-bg-swiper', {
			effect : 'fade',
			fade: {
			  crossFade: true,
			},
			speed:1000
		});	
	
	    
	    var space_top_swiper = new Swiper('.space-top-swiper', {
	    	effect : 'fade',
			fade: {
			  crossFade: true,
			},
			speed:1000,
			autoplay: 2000,
			onSlideChangeStart: function(swiper){
                bgSwiper.slideTo(swiper.activeIndex,500, false);
		    }	
	    });
	    
	    var space_bottom_swiper = new Swiper('.space-bottom-swiper', {
	        spaceBetween: 14,
            slidesPerView: 3.5,
	        centeredSlides: true,
	        loop:true
	    });
