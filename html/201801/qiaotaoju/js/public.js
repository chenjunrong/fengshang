	$(window).load(function(){
		
		
		autoHeight();
		
        $(".logo").click(function(){
        	location.href="index.html";
        });
        
        $(".collect").click(function(){	
        	var url = window.location.href;
        	AddFavorite('牧田官网',url);
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
				$(this).find(".sign").css("transform","rotate(-90deg)");
			}
			else{
				$(this).find(".sign").css("transform","rotate(90deg)");
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
				$(this).find(".sign").css("transform","rotate(-90deg)");
			}
			else{
				$(this).find(".sign").css("transform","rotate(90deg)");
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
		


	   
		
                       
	});
	
	function autoHeight(){

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
		    spaceBetween: 55,
		    slidesPerView: 5.3
		});	
