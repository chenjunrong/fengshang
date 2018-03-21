		$(window).load(function(){       
             $(".my-protype-gallery .prev-btn").click(function(){
	  	        my_protype_swiper.slidePrev();
			});
			$(".my-protype-gallery .next-btn").click(function(){
			  	my_protype_swiper.slideNext();
			});
		});
		
		
		var my_protype_swiper = new Swiper('.my-protype-swiper', {
		    pagination: '.my-protype-pagination',
		    paginationClickable: true
//	        centeredSlides: true,
//	        loop:true

		});
		
		var my_product_swiper = new Swiper('.my-product-swiper', {
		    slidesPerView: 2.72,
		    spaceBetween: 17,
		    slidesOffsetBefore : 140,
		    loop:true
//		    autoplay: 3000,

		});
		
		var my_brand_swiper = new Swiper('.my-brand-swiper', {
		    slidesPerView: 4.4,
		    spaceBetween: 24,
		    slidesOffsetBefore : 25
//		    loop:true,
//		    autoplay: 3000,

		});	
		
		