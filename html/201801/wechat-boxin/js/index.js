		$(window).load(function(){       
            
            autoSize();
            
            $(".my-about-banner .prev-Btn").click(function(){
  	            $(".controls .item-prev").click();
			});
			$(".my-about-banner .next-Btn").click(function(){
			  	$(".controls .item-next").click();
			});
			  
			$('#slide3d').slideCarsousel({slideType:'3d',indicatorEvent:'mouseover'});
 
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
		    pagination: '.my-product-pagination',
		    paginationClickable: true,
			spaceBetween: 30,
			slidesPerView: 2,
	        slidesPerColumn: 2,
			autoplay: 3000,
			breakpoints: {
	            640: {
		            spaceBetween: 15
	            },
	            320: {
		            spaceBetween: 10
	            }
	       },
		});
		
		var my_video_swiper= new Swiper('.my-news-swiper', {
			pagination: '.my-product-pagination',
		    paginationClickable: true,
		    spaceBetween: 10,
		    slidesPerView: 2,
		    autoplay: 3000
		});