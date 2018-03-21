	$(window).load(function(){
		
        $(".logo").click(function(){
        	location.href="index.html"
        });
        
        
        $(".my-tab-List").on("click","li a",function(){
        	$(".my-tab-List li").removeClass("active");
        	$(this).parent().addClass("active");
        });
        
       	$(".sidebar-navbar").on('click','li .one-Item',function(){
			$(this).siblings(".sidebar-navbar ul").toggle();			
		});
		
		$(".sidebar-navbar li a").click(function(){
			$(".sidebar-navbar li a").removeClass("active");
			$(this).addClass("active");
		});

			
		
                       
	});
	
	    //监听窗口改变事件
	    $(window).resize(function(){  
	    	if(window.innerWidth>1200)
	    	{
	    		$(".sidebar").css("display","block");
	    	}
	    	else{
	    		$(".sidebar").css("display","none");
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
