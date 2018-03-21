	$(window).load(function(){
		  
        $(".logo").click(function(){
        	location.href="index.html";
        });
        
        //禁止滑动事件

          
        
        $(".menu-openbtn").click(function(){	
        	$(".menu-openbtn").animate({},200,function(){   		
        		$(".menu-openbtn").css('transform','rotate(90deg)');    	
        		var test = setTimeout(function(){
			        $(".menu-openbtn").css("display","none");   
			        $(".menu-openbtn").css('transform','rotate(0deg)');  
                	$(".menu-closebtn").css("display","block");
                	$(".menu").fadeIn();
                	autoPubHeight();
			    },200);	    
        	});   	
        });
        
        $(".menu-closebtn").click(function(){
        	$(".menu-closebtn").animate({},200,function(){   		
        		$(".menu-closebtn").css('transform','rotate(90deg)');    	
        		var test = setTimeout(function(){
			        $(".menu-closebtn").css("display","none");   
			        $(".menu-closebtn").css('transform','rotate(0deg)');  
                	$(".menu-openbtn").css("display","block");
                	$(".menu").fadeOut();
                	autoPubHeight();
			    },200);	    
        	});
        });
		
		$(".search-btn").click(function(){
			$(".search-bar").slideToggle();
			$(".search-bar").css({"top":$(".header").height()});
		});
		
		$(".back-btn").click(function(){
			history.back(-1);
		});
		
		
		$(".my-search-bar .my-search-text").click(function(){
			$(".my-search-bar .search-input").focus();
		});
		 $(".my-search-bar .search-input").focus(function(){
		    $(".my-search-bar .my-search-text").css("display","none");
		});
        $(".my-search-bar .search-input").blur(function(){
		    if($(".my-search-bar .search-input").val()==""){
		    	$(".my-search-bar .search-input").val('');
		    	$(".my-search-bar .my-search-text").css("display","block");
		    	
		    }
		});

        autoSize();
        
        $(".menu-navList li:nth-child(3)").click(function(){
        	$(".menu .menu-navList li .two-Item").toggle();
        });
        
        $(".index-swiper-v .index-swiper-navList li:nth-child(2)").click(function(){
        	$(".pro-type-bar").slideToggle();
        });
                     
	});

		
		
	function autoPubHeight(){
		var winHeight=$(window).height();
        var menuHeight=winHeight-$(".header").height();
		$(".menu").height(menuHeight);
		$(".main-container").height(menuHeight);
		$(".main-container .swiper-slide").height(menuHeight);
		$(".about-List").height(menuHeight);
		$(".product").height(menuHeight);

		
		
		var spaceHeight=menuHeight*0.76;
		$(".space-coverswiper .swiper-slide").height(spaceHeight);
//		var mh1=$(".menu .menu-navList").height()/2*-1;
//		$(".menu .menu-navList").css("margin-top",mh1);
//		var mh2=$(".menu .menu-navList .iconfont").height()/2*-1;
//		$(".menu .menu-navList .iconfont").css("margin-top",mh2);
	}


	function autoSize(){
		
		var bannercmt=$(".banner-container").height()/2*-1;	
		$(".banner-container").css("margin-top",bannercmt);
		var myaboutcmt=$(".my-about-container").height()/2*-1;	
		$(".my-about-container").css("margin-top",myaboutcmt);
		var contactcmt=$(".contact-container").height()/2*-1;	
		$(".contact-container").css("margin-top",contactcmt);
		var productcmt=$(".product-container").height()/2*-1;		
		$(".product-container").css("margin-top",productcmt);
		var advicecmt=$(".advice-container").height()/2*-1;	
		$(".advice-container").css("margin-top",advicecmt);
		var searchml=$(".my-search-bar .my-search-text").width()/2*-1;	
		$(".my-search-bar .my-search-text").css("margin-left",searchml);
		
		
	}



		
   autoPubHeight();	

   var swiperV = new Swiper('.index-swiper-v', {
        pagination: '.swiper-pagination-v',
        paginationClickable: true,
        direction: 'vertical'
    });
   var swiperH = new Swiper('.index-swiper-h', {
        pagination: '.swiper-pagination-h',
        paginationClickable: true,
        autoplay: 2500
    });
    
    