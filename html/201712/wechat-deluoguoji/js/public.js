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
		    spaceBetween: 0,
		    slidesPerView: 3.4,
		    slidesOffsetBefore : 50,
		    breakpoints: {
            1024: {
                slidesOffsetBefore : 50,
            },
            768: {
                 slidesOffsetBefore : 50,
            },
            640: {
                slidesOffsetBefore : 20,
            },
            320: {
                slidesOffsetBefore : 20,
            }
        }
//		    autoplay: 2500,
//		    autoplayDisableOnInteraction: false
		});	
		
