	$(window).load(function(){
                
        $(".menu-Btn").click(function(){	
            $(".menu-bar").toggle();
        });
          
        //回到顶部
        $(".back-to-top-Btn").click(function() {
		    $("html,body").animate({scrollTop:0}, 500);
		}); 
		
		
		$(".inside-top-title-box .back-Btn").click(function(){
			history.go(-1);
		});
        
         $(".inside-tabbar-swiper").on("click",".swiper-slide",function(){
        	$(".inside-tabbar-swiper .swiper-slide").removeClass("active");
        	$(this).addClass("active");
        });
         

	    if($(".inside-tabbar-swiper").length>0){
	    	if(inside_tabbar_swiper.slides.length==1){
		        inside_tabbar_swiper = new Swiper('.inside-tabbar-swiper', {
				    slidesPerView: 1
				});		
	        }else if(inside_tabbar_swiper.slides.length==2){
		        inside_tabbar_swiper = new Swiper('.inside-tabbar-swiper', {
				    slidesPerView: 2
				});			
	        }else if(inside_tabbar_swiper.slides.length==3){
	        	inside_tabbar_swiper = new Swiper('.inside-tabbar-swiper', {
				    slidesPerView: 3
				});	
	        }
	    }
       


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
	    slidesPerView: 3.7
	});	
		
		
	