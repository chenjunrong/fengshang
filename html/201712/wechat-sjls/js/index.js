		$(window).load(function(){       
            $(".my-project .prev-btn").click(function(){
	  	        my_project_swiper .slidePrev();
			});
			$(".my-project .next-btn").click(function(){
			  	my_project_swiper .slideNext();
			});
			
			$(".my-product .prev-btn").click(function(){
	  	        my_product_swiper .slidePrev();
			});
			$(".my-product .next-btn").click(function(){
			  	my_product_swiper .slideNext();
			});
			
			$(".my-news .prev-btn").click(function(){
	  	        my_news_swiper .slidePrev();
			});
			$(".my-news .next-btn").click(function(){
			  	my_news_swiper .slideNext();
			});
		});
		
		
		var my_project_swiper = new Swiper('.my-project-swiper', {
            slidesPerView: 2,
		    spaceBetween: 34,
		    breakpoints: {
            768: {
                slidesPerView: 2,
		        spaceBetween: 34,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        }

		});
		
		var my_product_swiper = new Swiper('.my-product-swiper', {
            slidesPerView: 2,
		    spaceBetween: 34,
		    breakpoints: {
            768: {
                slidesPerView: 2,
		        spaceBetween: 34,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        }

		});
		
		var my_news_swiper = new Swiper('.my-news-swiper', {
            slidesPerView: 2,
		    spaceBetween: 34,
		    breakpoints: {
            768: {
                slidesPerView: 2,
		        spaceBetween: 34,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10
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
		
		