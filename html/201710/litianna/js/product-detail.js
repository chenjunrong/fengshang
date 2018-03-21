	   $(window).load(function(){
	   		$('.small-gallery-box .prev-btn').click(function(){
			  galleryThumbs.slidePrev();
			});
			$('.small-gallery-box .next-btn').click(function(){
			  galleryThumbs.slideNext();
			});
			
			$(".small-img-gallery").on('click','.swiper-slide',function(){ 
				galleryTop.slideTo($(this).index(), 600, false);
				$(".small-img-gallery .swiper-slide").removeClass("active");
		        var index=$(this).index()+1;
		        $(".small-img-gallery .swiper-slide:nth-child("+index+")").addClass("active");
			});
	   });
	    
	    var galleryTop = new Swiper('.gallery-top', {
	        spaceBetween:0
	    });
	    var galleryThumbs = new Swiper('.gallery-thumbs', {
	        spaceBetween: 10,
            slidesPerView: 4,
	        touchRatio: 0.2,
	        slideToClickedSlide: true,
	        onSlideChangeStart: function(swiper){
		      $(".small-img-gallery .swiper-slide").removeClass("active");
		      var index=swiper.activeIndex+1;
		      $(".small-img-gallery .swiper-slide:nth-child("+index+")").addClass("active");
		    },
				 breakpoints: {
	            1200: {
	                slidesPerView: 2,
	                spaceBetween: 30
	            },
	            400: {
	                slidesPerView: 2,
	                spaceBetween: 10
	            }
           }
	    });
	    galleryTop.params.control = galleryThumbs;
	    galleryThumbs.params.control = galleryTop;