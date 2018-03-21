$(window).load(function(){       
	  

            space_bgswiper.enableTouchControl();
	        space_bgswiper.disableTouchControl();
			 
	        $('.space-coverswiper .prev-btn').click(function(){
				 space_coverswiper.slidePrev();
			});
			
		    $('.space-coverswiper .next-btn').click(function(){
				space_coverswiper.slideNext();
			});
		});
		


var space_bgswiper = new Swiper('.space-bgswiper', {
		effect : 'fade',
		fade: {
		  crossFade: false,
		}
    });
    
    var space_coverswiper = new Swiper('.space-coverswiper', {
    	pagination: '.swiper-pagination-v',
    	effect : 'fade',
		fade: {
		  crossFade: false,
		},
        onSlideChangeStart: function(swiper){
        	var index=swiper.activeIndex;
            space_bgswiper.slideTo(index, 500, false);
		}
		
});