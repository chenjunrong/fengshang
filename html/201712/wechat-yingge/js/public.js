	$(window).load(function(){
          
        $(".logo").click(function(){
        	location.href="index.html"
        });
                  
        $(".menu-Btn").click(function(){	
            $(".menu-bar").toggle();
        });
        
        $(".search-Btn").click(function(){	
            $(".serach-bar").slideToggle();
        });
        
        $(".inside-tabbar-List").on("click","li",function(){
        	$(".inside-tabbar-List li").removeClass("active");
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
		
       
        var inside_tabbar_swiperr = new Swiper('.inside-tabbar-swiper', {
		    spaceBetween: 0,
		    slidesPerView: 2.95
//		    autoplay: 2500,
//		    autoplayDisableOnInteraction: false
		});	