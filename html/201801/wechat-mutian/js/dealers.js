$(window).load(function(){
		

        /*导航栏开始*/
        /*第一级*/
       	$(".my-dealers-navbar").on('click','.one-Item',function(){
			$(this).siblings(".my-two-navbar").toggle();
			
			$(".my-dealers-navbar .one-Item").removeClass("active");
			$(".my-two-navbar .two-Item").removeClass("active");
			$(".my-three-navbar .three-Item").removeClass("active");
			$(this).addClass("active");		
			
            $(this).next().find('a').first().addClass("active");
            $(this).next().find('a').first().next().find('a').first().addClass("active");
            
             $.each($(".my-dealers-navbar .one-Item"),function (index,domEle){	
        	if($(this).siblings(".my-two-navbar").length>0){
				$(this).find(".sign").css("opacity","1")
			}else{
				$(this).find(".sign").css("opacity","0")
			}
        	
        	if($(this).siblings(".my-two-navbar").css("display")=="block"){
				$(this).find(".sign").css("transform","rotate(90deg)");
			}
			else{
				$(this).find(".sign").css("transform","rotate(0)");
			}
        });
		
			 
		});
		/*第二级*/
		$(".my-two-navbar").on('click','.two-Item',function(){
			$(this).siblings(".my-three-navbar").toggle();
			
			$(".my-dealers-navbar .one-Item").removeClass("active");
			$(".my-two-navbar .two-Item").removeClass("active");
			$(".my-three-navbar .three-Item").removeClass("active");
			$(this).addClass("active");			
			
			$(this).next().find('a').first().addClass("active");
			$(this).parents(".my-two-navbar").siblings(".one-Item").addClass("active");

		});	
    	/*第三级*/
		$(".my-three-navbar").on('click','.three-Item',function(){  
			$(".my-dealers-navbar .one-Item").removeClass("active");
			$(".my-two-navbar .two-Item").removeClass("active");
			$(".my-three-navbar .three-Item").removeClass("active");
			$(this).addClass("active");	
			
			$(this).parents(".my-three-navbar").siblings(".two-Item").addClass("active");
			$(this).parents(".my-three-navbar").siblings(".two-Item").parents(".my-two-navbar").siblings(".one-Item").addClass("active");
		});
		
        /*导航栏结束*/

        
        /*遍历*/
        $.each($(".my-dealers-navbar .one-Item"),function (index,domEle){	
        	if($(this).siblings(".my-two-navbar").length>0){
				$(this).find(".sign").css("opacity","1")
			}else{
				$(this).find(".sign").css("opacity","0")
			}
        	
        	if($(this).siblings(".my-two-navbar").css("display")=="block"){
				$(this).find(".sign").css("transform","rotate(90deg)");
			}
			else{
				$(this).find(".sign").css("transform","rotate(0)");
			}
        });
        
        /*遍历*/
        $.each($(".my-dealers-navbar .one-Item"),function (index,domEle){	
        	if($(this).siblings().length>0){
             	$(this).click();
             	return false;
            }
        });
        
        
       
        
        /*遍历*/
//      $.each($(".my-sidebar-navbar .two-Item"),function (index,domEle){
//      	if($(this).siblings(".my-three-navbar").length>0){
//				$(this).find(".flex").css("opacity","1")
//			}else{
//				$(this).find(".flex").css("opacity","0")
//			}
//      	
//      	if($(this).siblings(".my-three-navbar").css("display")=="block"){
//				$(this).find(".sign").css("transform","rotate(-90deg)");
//			}
//			else{
//				$(this).find(".sign").css("transform","rotate(90deg)");
//			}
//      });
		/*导航栏结束*/
		    
			   
		 
       
                       
	});