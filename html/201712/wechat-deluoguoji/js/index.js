		$(window).load(function(){       
 
		});
		
		
		var my_product_swiper = new Swiper('.my-product-swiper', {
		    autoplayDisableOnInteraction: false,
		    slidesPerView: 2.2,
		    spaceBetween: 10,
	        slidesOffsetBefore : 30,
	        breakpoints: {
	            768: {
	               slidesOffsetBefore : 30
	            },
	            640: {
	                slidesOffsetBefore : 15
	            },
	            320: {
	                slidesOffsetBefore : 10
	            }
	        }
		});
		
		