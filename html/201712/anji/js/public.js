	$(window).load(function(){
		
		
		autoHeight();
		
        
        $(".search-Btn").click(function(){	
            $(".my-serach-bar").slideToggle();
        });
        
        
        $(".inside-tabbar-List").on("click","li",function(){
        	$(".inside-tabbar-List li").removeClass("active");
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
			
            $(this).next().find('a').first().addClass("active");
            $(this).next().find('a').first().next().find('a').first().addClass("active");
		
			if($(this).siblings(".sidebar-navbar .two-navbar").css("display")=="block"){
				$(this).find('.sign').css({"transform":"rotate(90deg)","padding-left":"0px","padding-right":"0px"});
				if($(this).is($(".sidebar-navbar li:last-child .one-Item"))){
					$(this).css({"border-bottom":"1px solid #dcdcdc"});
				}	
			}
			else{
				$(this).find('.sign').css({"transform":"rotate(0deg)","padding-left":"2px","padding-right":"0px"});
				if($(this).is($(".sidebar-navbar li:last-child .one-Item"))){
					$(this).css({"border-bottom":"0px solid #dcdcdc"});
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
			
			$(this).next().find('a').first().addClass("active");
			$(this).parents(".two-navbar").siblings(".one-Item").addClass("active");
			
			$.each($(".three-navbar"),function (index,domEle){
			   if($(this).css("display")=="block"){
			   	 $(this).siblings(".two-Item").css({"border-bottom": "0px solid #dcdcdc"});
			   }else{
			   	 $(this).siblings(".two-Item").css({"border-bottom": "1px solid #dcdcdc"});
			   }
			}); 
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
        	if($(this).siblings(".sidebar-navbar .two-navbar").css("display")=="block"){
				$(this).find('.sign').css({"transform":"rotate(90deg)","padding-left":"0px","padding-right":"0px"});
				if($(this).is($(".sidebar-navbar li:last-child .one-Item"))){
					$(this).css({"border-bottom":"1px solid #dcdcdc"});
				}	
			}
			else{
				$(this).find('.sign').css({"transform":"rotate(0deg)","padding-left":"2px","padding-right":"0px"});
				if($(this).is($(".sidebar-navbar li:last-child .one-Item"))){
					$(this).css({"border-bottom":"0px solid #dcdcdc"});
				}
			}
        });
       
         
        $.each($(".three-navbar"),function (index,domEle){
		   if($(this).css("display")=="block"){
		   	 $(this).siblings(".two-Item").css({"border-bottom": "0px solid #dcdcdc"});
		   }else{
		   	 $(this).siblings(".two-Item").css({"border-bottom": "1px solid #dcdcdc"});
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
	

	
