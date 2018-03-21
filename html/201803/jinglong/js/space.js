	   $(window).load(function(){
	   	
	   	autoHeight();
	   	
	   	//禁止滑动事件
	   	bgSwiper.enableTouchControl();
	   	bgSwiper.disableTouchControl();
	   	
	   		$('.space-top-gallery .prev-Btn').click(function(){
			  space_top_swiper.slidePrev();
			});
			$('.space-top-gallery .next-Btn').click(function(){
			  space_top_swiper.slideNext();
			});
			$('.space-bottom-gallery .prev-Btn').click(function(){
			   space_bottom_swiper.slidePrev();
			});
			$('.space-bottom-gallery .next-Btn').click(function(){
			  space_bottom_swiper.slideNext();
			});
			
			
			$(".space-bottom-swiper").on('click','.swiper-slide',function(){ 				
				space_top_swiper.slideTo($(this).index(), 500, false);
				bgSwiper.slideTo($(this).index(), 500, false);
			});
					
	   });
	   
	   
		function autoHeight(){
		    var spaceBg_swiperH=$(".space-bg-gallery").width()*0.61;
		    $(".space-bg-gallery").height(spaceBg_swiperH);
		}
	   
	   //监听窗口改变事件
		$(window).resize(function(){		
		  autoHeight();
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
            slidesPerView: 5,
	        touchRatio: 0.2,
	        slideToClickedSlide: true   
	    });
	    galleryTop.params.control = galleryThumbs;
	    galleryThumbs.params.control = galleryTop;