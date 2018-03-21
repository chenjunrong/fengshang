	$(window).load(function(){
          
          autoHeight();
          
        $(".logo").click(function(){
        	location.href="index.html"
        });
          
        $(".menu-tool").click(function(){	
            $(".menu-bar").toggle();
        });
        
        $(".my-bottom-box .tabbar-List").on('click','li',function(){    	
        	$(".my-bottom-box .tabbar-List li").removeClass('active');
        	$(this).addClass('active');
        });
     
                     
	});
	
		var banner_swiper = new Swiper('.banner-swiper', {
			pagination:".banner-pagination",
		    paginationClickable: true,
		    spaceBetween: 0,
		    centeredSlides: true,
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false
		});	
		
		
		function autoHeight(){
	
			
		}
		
