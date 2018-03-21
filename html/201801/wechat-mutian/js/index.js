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
		    slidesPerView:2.4,
//		    spaceBetween: 45,
	        centeredSlides: true,
	        paginationClickable :true,
		    autoplay: 2500,
		    loop:true
		});
		
		var my_video_swiper= new Swiper('.my-news-swiper', {
			pagination: '.my-newPro-pagination',
		    spaceBetween: 20,
		    slidesPerView: 2,
		    paginationClickable :true
		});