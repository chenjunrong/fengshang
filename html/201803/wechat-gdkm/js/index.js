		$(window).load(function(){       
             
            
            $(".my-project-tabbar").on("click","li",function(){

            	$(".my-project-tabbar li").removeClass("active");
            	$(this).addClass("active");
            	
            	my_project_swiper.slideTo($(this).index(), 500, false);
            });
            
            $(".my-news-tabbar").on("click","li",function(){
            	$(".my-news-tabbar li").removeClass("active");
            	$(this).addClass("active");
            	
            	my_news_swiper.slideTo($(this).index(), 500, false);
            });
			
			
			//禁止滑动
		   	my_project_swiper.enableTouchControl();
		   	my_project_swiper.disableTouchControl();
		   	my_news_swiper.enableTouchControl();
		   	my_news_swiper.disableTouchControl();
 
		});
		
		
		var my_newPro_swiper=new Swiper('.my-newPro-swiper', {
		      loop:true,
		      autoplay:3500,
		      spaceBetween: 30
		});
		
		var my_product_swiper=new Swiper('.my-product-swiper', {
			  pagination: '.my-product-pagination',
		      slidesPerView: 1.5,
		      loop:true,
		      centeredSlides: true,
		      autoplay:3500,
		      spaceBetween: 20
		});
		
	
		var my_project_swiper= new Swiper('.my-project-swiper', {
            effect : 'fade',
			fade: {
			  crossFade: true,
			},
			speed:1000

		});
		var my_news_swiper= new Swiper('.my-news-swiper', {
            effect : 'fade',
			fade: {
			  crossFade: true,
			},
			speed:1000

		});
		