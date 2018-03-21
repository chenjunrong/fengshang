		$(window).load(function(){       
            
            autoSize();
 
		});
		
		var my_video_swiper= new Swiper('.my-video-swiper', {
		    spaceBetween: 38,
		    slidesPerView: 1.2,
		    slidesOffsetBefore : 25,
		    breakpoints: {
	            768: {
	                spaceBetween : 38
	            },
	            640: {
	               spaceBetween : 20
	            },
	            320: {
	                spaceBetween : 20
	            }
	        }
		});
		
		var my_newPro_swiper = new Swiper('.my-newPro-swiper', {
		    pagination: '.my-newPro-pagination',
		    slidesPerView: 3,
		    paginationClickable :true,
		    spaceBetween: 10, 
		    breakpoints: {
	            768: {
	                slidesPerView: 3,
		            spaceBetween: 10
	            },
	            640: {
	                slidesPerView: 2,
		            spaceBetween: 20
	            },
	            320: {
	                slidesPerView: 2,
		            spaceBetween: 20
	            }
	       },
	        autoplay: 2500
		});
		
		function autoSize(){
			var newimgboxW=$(".my-newPro-swiper .swiper-slide").width();
			$(".newPro .img-box").css({width:newimgboxW,height:newimgboxW});
		};
		
		
		var my_product_swiper = new Swiper('.my-product-swiper', {
		    pagination: '.my-newPro-pagination',
		    slidesPerView: 1.4,
		    spaceBetween: 50,
	        centeredSlides: true,
	        paginationClickable :true,
	        loop:true,
	        breakpoints: {
	            768: {
	               spaceBetween: 50
	            },
	            640: {
	                 spaceBetween: 30
	            },
	            320: {
	                spaceBetween: 20
	            }
	        },
		    autoplay: 2500,
		    onSlideChangeStart: function(swiper){
		      $(".my-product-swiper .swiper-slide").find(".cover").css("display","none");
		      var index=swiper.activeIndex+1;
		      $(".my-product-swiper .swiper-slide:nth-child("+index+")").find(".cover").css("display","block");
		    }
		});
		
		var my_video_swiper= new Swiper('.my-news-swiper', {
			pagination: '.my-newPro-pagination',
		    spaceBetween: 20,
		    slidesPerView: 2,
		    paginationClickable :true
		});