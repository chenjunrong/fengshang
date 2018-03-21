	$(window).load(function(){
                
        $(".menu-Btn").click(function(){	
            $(".menu-bar").toggle();
        });
        
         $(".inside-tabbar-swiper").on("click",".swiper-slide",function(){
        	$(".inside-tabbar-swiper .swiper-slide").removeClass("active");
        	$(this).addClass("active");
        });
        
   
	});
	
		var banner_swiper = new Swiper('.banner-swiper', {
			pagination: '.banner-pagination',
		    paginationClickable: true,
		    spaceBetween: 0,
		    centeredSlides: true,
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false
		});	
		
		var inside_tabbar_swiper = new Swiper('.inside-tabbar-swiper', {
		    spaceBetween: 30,
		    slidesPerView: 3.7,
		    slidesOffsetBefore : 10,
		    breakpoints: {
	            768: {
	                spaceBetween: 30,
		            slidesPerView: 3.7,
	            },
	            640: {
	                spaceBetween: 30,
		            slidesPerView: 2.7,
	            },
	            320: {
	                spaceBetween: 30,
		            slidesPerView: 2.7,
	            }
	       },

//		    autoplay: 2500,
//		    autoplayDisableOnInteraction: false
		});	
		
