	$(window).load(function(){
		
        $(".logo").click(function(){
        	location.href="index.html"
        });
  
        $(".search-tool").click(function(){	
            $(".serach-bar").slideToggle();
        });
                  
        $(".menu-tool").click(function(){	
            $(".menu-bar").toggle();
        });
        
    	$(".sidebar-navbar").on('click','li a',function(){
			$(this).siblings(".sidebar-navbar ul").toggle();			
		});
		
		$(".fixed-menu").click(function(){
			$(".sidebar").addClass("xs-sidebar");
			$(".sidebar").fadeToggle(300);
		});
		
		
		$(".my-tabBar-List").on("click","li",function(){
			$(".my-tabBar-List li").removeClass('active');
			$(this).addClass('active');
		});
		
		$(".header-naviBar li:nth-child(4)").click(function(){
			$(".pro-type-bar").slideToggle();
		})
                       
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
	
		var swiper1 = new Swiper('.swiper1', {
		    paginationClickable: true,
		    spaceBetween: 0,
		    centeredSlides: true,
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false
		});	
