		$(window).load(function(){       
 
		});
		
		var my_about_swiper = new Swiper('.my-about-swiper', {
	    	pagination: '.my-about-pagination',
		    spaceBetween: 115,
		    slidesPerView: 3,
		    breakpoints: {
	            768: {
	                 spaceBetween: 115
	            },
	            640: {
	                spaceBetween: 55
	            },
	            320: {
	                spaceBetween: 55
	            }
	        }
		});
		
		
		var my_product_swiper = new Swiper('.my-product-swiper', {
		    autoplayDisableOnInteraction: false,
		    pagination: '.my-about-pagination',
		    slidesPerView: 2.5,
		    spaceBetween: 10,
	        slidesOffsetBefore : 30,
	        breakpoints: {
	            768: {
	               slidesOffsetBefore : 35,
	               spaceBetween: 20
	            },
	            640: {
	                slidesOffsetBefore : 15
	            },
	            320: {
	                slidesOffsetBefore : 10
	            }
	        },
		    autoplay: 2500
		});
		
		