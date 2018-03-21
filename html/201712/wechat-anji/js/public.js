	$(window).load(function(){
                
        $(".menu-Btn").click(function(){	
            $(".menu-bar").toggle();
        });
        
         $(".inside-tabbar-swiper").on("click",".swiper-slide",function(){
        	$(".inside-tabbar-swiper .swiper-slide").removeClass("active");
        	$(this).addClass("active");
        });
        
        
        /*导航栏开始*/
        /*第一级*/
       	$(".sidebar-navbar").on('click','.one-Item',function(){
			$(this).siblings(".sidebar-navbar .two-navbar").toggle();
			
			$(".sidebar-navbar .one-Item").removeClass("active");
			$(".two-navbar .two-Item").removeClass("active");
			$(".three-navbar .three-Item").removeClass("active");
			$(this).addClass("active");		
			
            $(this).next('.two-navbar').find('.two-Item').first().addClass("active");
            $(this).next('.two-navbar').find('.two-Item').first().next('.three-navbar').find('.three-Item').first().addClass("active");
		
	 
		});
		/*第二级*/
		$(".two-navbar").on('click','.two-Item',function(){
			$(this).siblings(".sidebar-navbar .three-navbar").toggle();
			
			$(".sidebar-navbar .one-Item").removeClass("active");
			$(".two-navbar .two-Item").removeClass("active");
			$(".three-navbar .three-Item").removeClass("active");
			$(this).addClass("active");		
			
			$(this).next('.three-navbar').find('.three-Item').first().addClass("active");
			$(this).parents(".two-navbar").siblings(".one-Item").addClass("active");
			
			if($(this).next(".three-navbar").css("display")=="none"){	
				$(this).find('.sign').css({"transform":"rotate(0deg)"});
			}
			else{
			    $(this).find('.sign').css({"transform":"rotate(-90deg)"});					
			}
		
			
			
		});	
    	/*第三级*/
		$(".three-navbar").on('click','.three-Item',function(){  
			$(".sidebar-navbar .one-Item").removeClass("active");
			$(".two-navbar .two-Item").removeClass("active");
			$(".three-navbar .three-Item").removeClass("active");
			
			$(this).addClass("active");
			$(this).parents(".three-navbar").siblings(".two-Item").addClass("active");
			$(this).parents(".three-navbar").siblings(".two-Item").parents(".two-navbar").siblings(".one-Item").addClass("active");
		});
		
        /*导航栏结束*/

        
              
       
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
		    slidesPerView: 4.5,
		    slidesOffsetBefore : 10

//		    autoplay: 2500,
//		    autoplayDisableOnInteraction: false
		});	
		
