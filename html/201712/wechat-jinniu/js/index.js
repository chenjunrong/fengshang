		$(window).load(function(){       
 
		});
		
		
		var my_product_swiper = new Swiper('.my-product-swiper', {
		    pagination: '.my-product-pagination',
		    paginationClickable: true,
		    slidesPerView: 1.168,
		    spaceBetween: -150,
	        centeredSlides: true,
	        loop:true,
	        breakpoints: {
	            768: {
	                spaceBetween: -150
	            },
	            640: {
	                spaceBetween: -80
	            },
	            400: {
	                spaceBetween: -70
	            },
	            320: {
	                spaceBetween: -60
	            }
	        }
		});
		
		var my_brand_swiper = new Swiper('.my-brand-swiper', {
		    slidesPerView: 4.4,
		    spaceBetween: 24,
		    slidesOffsetBefore : 25
//		    loop:true,
//		    autoplay: 3000,

		});	
		
		