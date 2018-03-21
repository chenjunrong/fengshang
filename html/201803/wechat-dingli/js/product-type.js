	$(window).load(function(){
		
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
		


	   
		
                       
	});