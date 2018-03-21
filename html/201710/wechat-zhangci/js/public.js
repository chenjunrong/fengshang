	$(window).load(function(){
          
          autoHeight();
          
        $(".logo").click(function(){
        	location.href="index.html"
        });
        
        
        $(".search-tool").click(function(){	
            $(".serach-bar").slideToggle();
        });
                  
        $(".menu-tool").click(function(){	
            $(".menu-bar").toggle();
        });
                     
	});
	
		var swiper1 = new Swiper('.swiper1', {
			pagination:".banner-pagination",
		    paginationClickable: true,
		    spaceBetween: 0,
		    centeredSlides: true,
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false
		});	
		
		
		function autoHeight(){
			var titleLeft=$(".header .top-title").width()/2*-1;
			$(".header .top-title").css("margin-left",titleLeft);
			
		}
		
