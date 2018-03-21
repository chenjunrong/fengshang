	   $(window).load(function(){

	   		$('.small-gallery-box .my-prevBtn').click(function(){
			  galleryThumbs.slidePrev();
			});
			$('.small-gallery-box .my-nextBtn').click(function(){
			  galleryThumbs.slideNext();
			});
			
			//放大镜
			$(".jqzoom").imagezoom();

			
			$(".small-img-gallery").on('click','.swiper-slide',function(){ 

				$(".small-img-gallery .swiper-slide").removeClass("active");
		        var index=$(this).index()+1;
		        $(".small-img-gallery .swiper-slide:nth-child("+index+")").addClass("active");  
		        $(".jqzoom").attr('src',$(this).find("img").attr("mid"));
		        $(".jqzoom").attr('rel',$(this).find("img").attr("big"));
		        
			});
			$(".small-img-gallery .swiper-slide:first-child").click();
	   });
	    

	    var galleryThumbs = new Swiper('.gallery-thumbs', {
	        spaceBetween: 21.25,
            slidesPerView: 5,
	        touchRatio: 0.2,
	        slideToClickedSlide: true,
	        onSlideChangeStart: function(swiper){
		      $(".small-img-gallery .swiper-slide").removeClass("active");
		      var index=swiper.activeIndex+1;
		      $(".small-img-gallery .swiper-slide:nth-child("+index+")").addClass("active");
		    }
	    });
	    

	    
	    
	    
