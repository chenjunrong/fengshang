	$(window).load(function(){
		
		
		autoHeight();
		
        $(".logo").click(function(){
        	location.href="index.html";
        });
        
        $(".collect").click(function(){	
        	var url = window.location.href;
        	AddFavorite('欧莱克官网',url);
        });
        
        
        $(".search-Btn").click(function(){	
            $(".my-serach-bar").slideToggle();
        });
        
        
        $(".inside-tabbar-swiper").on("click",".swiper-slide",function(){
        	$(".inside-tabbar-swiper .swiper-slide").removeClass("active");
        	$(this).addClass("active");
        	var index=$(this).index();
        	inside_tabbar_swiper.slideTo(index, 300, false);
        });
        
       	
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
		

            if($(this).siblings(".two-navbar").length>0){
        		if($(this).siblings(".two-navbar").css("display")=="block"){
					$(this).parents(".one-li").css("padding-bottom","25px");
					$(this).css("border-bottom","1px solid rgba(245,245,245,1)");
					$(this).find(".line").css("display","block");
				    $(this).find(".jia").css("display","none");
				}
				else{
					$(this).parents(".one-li").css("padding-bottom","0px");
					$(this).css("border-bottom","1px soild rgba(0,0,0,0)");
					$(this).find(".line").css("display","none");
					$(this).find(".jia").css("display","block");
				}
        	}else{
        		    $(this).find(".line").css("display","none");
					$(this).find(".jia").css("display","none");
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
			
			if($(this).siblings(".three-navbar").length>0){
        		if($(this).siblings(".three-navbar").css("display")=="block"){
					$(this).find(".line").css("display","block");
				    $(this).find(".jia").css("display","none");
				}
				else{
					$(this).find(".line").css("display","none");
					$(this).find(".jia").css("display","block");
				}
        	}else{
        		    $(this).find(".line").css("display","none");
					$(this).find(".jia").css("display","none");
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

        
        /*遍历*/
        $.each($(".sidebar-navbar .one-Item"),function (index,domEle){
        	
        	if($(this).siblings(".two-navbar").length>0){
        		if($(this).siblings(".two-navbar").css("display")=="block"){
					$(this).parents(".one-li").css("padding-bottom","25px");
					$(this).css("border-bottom","1px solid rgba(245,245,245,1)");
					$(this).find(".line").css("display","block");
				    $(this).find(".jia").css("display","none");
				}
				else{
					$(this).parents(".one-li").css("padding-bottom","0px");
					$(this).css("border-bottom","1px soild rgba(0,0,0,0)");
					$(this).find(".line").css("display","none");
					$(this).find(".jia").css("display","block");
				}
        	}else{
        		    $(this).find(".line").css("display","none");
					$(this).find(".jia").css("display","none");
        	}
        	
        	
        });
        

        /*遍历*/
        $.each($(".sidebar-navbar .two-Item"),function (index,domEle){
        	if($(this).siblings(".three-navbar").length>0){
        		if($(this).siblings(".three-navbar").css("display")=="block"){
					$(this).find(".line").css("display","block");
				    $(this).find(".jia").css("display","none");
				}
				else{
					$(this).find(".line").css("display","none");
					$(this).find(".jia").css("display","block");
				}
        	}else{
        		    $(this).find(".line").css("display","none");
					$(this).find(".jia").css("display","none");
        	}
        	
        });
        


		/*导航栏结束*/
		


	   
		
                       
	});
	
	function autoHeight(){
		var title_boxMh=$(".bg-title-box .title-box").height()/2*-1;
		var title_boxMw=$(".bg-title-box .title-box").width()/2*-1;
		$(".bg-title-box .title-box").css({"margin-top":title_boxMh,"margin-left":title_boxMw});
	};
	
	
	//监听窗口改变事件
    $(window).resize(function(){		
      autoHeight();
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
			pagination: '.banner-pagination',
		    paginationClickable: true,
		    spaceBetween: 0,
		    centeredSlides: true,
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false
		});	
		
		var inside_tabbar_swiper = new Swiper('.inside-tabbar-swiper', {
		    spaceBetween: 1,
		    slidesPerView: 8.3
		});	
