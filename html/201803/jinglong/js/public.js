	$(window).load(function(){
		

        $(".logo").click(function(){
        	location.href="index.html";
        });
        
        $(".collect").click(function(){	
        	var url = window.location.href;
        	AddFavorite('牧田官网',url);
        });
        
	    $(".banner .prev-Btn").click(function(){
		  	banner_swiper.slidePrev();
		});
		$(".banner .next-Btn").click(function(){
		  	banner_swiper.slideNext();
		});
		 
        $(".header-topbar-language").on("click","li",function(){
        	$(".header-topbar-language li").removeClass("active");
        	$(this).addClass("active");
        });
        
        $(".search-Btn").click(function(){	
            $(".my-serach-bar").slideToggle();
        });
        
        
        $(".inside-tabbar").on("click","li",function(){
        	$(".inside-tabbar li").removeClass("active");
        	$(this).addClass("active");
        });
        
      
        $(".footer-wechat").on("mouseenter",function(){
            $(".wechat-code").css("opacity","1");
        })
        $(".footer-wechat").on("mouseleave",function(){
            $(".wechat-code").css("opacity","0");
        })
        $(".footer-mobile").on("mouseenter",function(){
            $(".mobile-code").css("opacity","1");
        })
        $(".footer-mobile").on("mouseleave",function(){
            $(".mobile-code").css("opacity","0");
        })
       	
       	/*导航栏开始*/
        /*第一级*/
       	$(".sidebar-navbar").on('click','.one-Item',function(){
			$(this).siblings(".sidebar-navbar .two-navbar").toggle();
			
			$(".sidebar-navbar .one-Item").removeClass("active");
			$(".two-navbar .two-Item").removeClass("active");
			$(".three-navbar .three-Item").removeClass("active");
			$(this).addClass("active");		
			
            $(this).next().find('.two-Item').first().addClass("active");
            $(this).next().find('.two-Item').first().next().find('.three-Item').first().addClass("active");
		
			if($(this).siblings(".two-navbar").css("display")=="block"){	
				$(this).find(".sign").css("transform","rotate(90deg)");
			}
			else{
				$(this).find(".sign").css("transform","rotate(0deg)");
			}

            /*点击最后一个*/
			if($(this)[0]==$(".sidebar-navbar .one-li:last-child .one-Item")[0]){
				if($(this).siblings(".two-navbar").css("display")=="block"){
				    $(this).find(".name").css("border-bottom","1px solid #cccccc");
				    $(this).siblings(".sidebar-navbar .two-navbar").find(".two-li:last-child .name").css("border-bottom","1px solid rgba(0,0,0,0)");
				}
				else{
					$(this).find(".name").css("border-bottom","1px solid rgba(0,0,0,0)");	
					$(this).siblings(".sidebar-navbar .two-navbar").find(".two-li:last-child .name").css("border-bottom","1px solid #cccccc");
				}
			}
			 
		});
		/*第二级*/
		$(".two-navbar").on('click','.two-Item',function(){
			$(this).siblings(".sidebar-navbar .three-navbar").toggle();
			
			$(".sidebar-navbar .one-Item").removeClass("active");
			$(".two-navbar .two-Item").removeClass("active");
			$(".three-navbar .three-Item").removeClass("active");
			$(this).addClass("active");		
			
			$(this).next().find('.three-Item').first().addClass("active");
			$(this).parents(".two-navbar").siblings(".one-Item").addClass("active");
			
			if($(this).siblings(".three-navbar").css("display")=="block"){
				$(this).find(".sign").css("transform","rotate(90deg)");
			}
			else{
				$(this).find(".sign").css("transform","rotate(0deg)");
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

        
        $.each($(".sidebar-navbar .one-Item"),function (index,domEle){
  
             /*只开第一个*/
             if($(this).siblings().length>0){
             	$(this).click();
             	return false;
             }
        });
        
        /*遍历*/
        $.each($(".sidebar-navbar .one-Item"),function (index,domEle){
        	if($(this).siblings(".two-navbar").length>0){
				$(this).find('.sign').css("display","block");
			}
			else{
				$(this).find('.sign').css("display","none");
			}

        });
       
        
        /*遍历*/
        $.each($(".sidebar-navbar .two-Item"),function (index,domEle){
        	if($(this).siblings(".three-navbar").length>0){
				$(this).find('.sign').css("display","block");
			}
			else{
				$(this).find('.sign').css("display","none");
			}
        });

		/*导航栏结束*/
		

        $(".banner .swiper-pagination-custom").on("click",".swiper-border",function(){
        	var index=$(this).index();
        	banner_swiper.slideTo(index, 1000, false);
        });
	   
		
                       
	});


	
	//加入收藏
	function AddFavorite(title, url) {
	    try {
	        window.external.addFavorite(url, title);
	    }
	    catch (e) {
	        try {
	            window.sidebar.addPanel(title, url, "");
	        }
	        catch (e) {
	            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
	        }
	    }
    };
	

	
		var banner_swiper = new Swiper('.banner-swiper', {
		    autoplay: 2500
		});	
		
		var inside_tabbar_swiper = new Swiper('.inside-tabbar-swiper', {
		    spaceBetween: 55,
		    slidesPerView: 5.3
		});	
