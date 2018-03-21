	   $(window).load(function(){
	   	
	   	//禁止滑动事件
	   	bgSwiper.enableTouchControl();
	   	bgSwiper.disableTouchControl();
	   	
	   		$('.top-gallery .my-prevBtn').click(function(){
			  galleryTop.slidePrev();
			});
			$('.top-gallery .my-nextBtn').click(function(){
			  galleryTop.slideNext();
			});
			$('.bottom-gallery .my-small-prevBtn').click(function(){
			   galleryTop.slidePrev();
			});
			$('.bottom-gallery .my-small-nextBtn').click(function(){
			  galleryTop.slideNext();
			});
			
			
			$(".bottom-gallery .small-img-gallery").on('click','.swiper-slide',function(){ 		
				galleryTop.slideTo($(this).index(), 500, false);
			});
					
	   });
	   
	    var bgSwiper  = new Swiper('.space-bg-swiper', {
			effect : 'fade',
			fade: {
			  crossFade: true,
			},
			speed:1000
		});	
	
	    
	    var galleryTop = new Swiper('.gallery-top', {
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
	    var galleryThumbs = new Swiper('.gallery-thumbs', {
	        spaceBetween: 12,
            slidesPerView: 4,
	        touchRatio: 0.2,
	        slideToClickedSlide: true   
	    });
	    galleryTop.params.control = galleryThumbs;
	    galleryThumbs.params.control = galleryTop;