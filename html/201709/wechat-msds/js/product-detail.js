		$(window).load(function(){
			$(".product-detail .small-img").on('click','.swiper-slide',function(){	 
				galleryTop.slideTo($(this).index(), 600, false);
				$(this).siblings('.swiper-slide').removeClass('active');
        	    $(this).addClass('active');
			});
		});
		
		
		
		
	    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
        onSlideChangeStart: function(swiper){
        	 var index=swiper.activeIndex+1;
        	 $(".product-detail .small-img .swiper-slide:nth-child("+index+")").siblings('.swiper-slide').removeClass('active');
			 $(".product-detail .small-img .swiper-slide:nth-child("+index+")").addClass('active');
                  
		}
	    });
	    var galleryThumbs = new Swiper('.gallery-thumbs', {
            slidesPerView: 7,
	        touchRatio: 0.2,
	        slideToClickedSlide: true
	    });
	    galleryTop.params.control = galleryThumbs;
	    galleryThumbs.params.control = galleryTop;