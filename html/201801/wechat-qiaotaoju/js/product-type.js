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
		
			if($(this).siblings(".two-navbar").css("display")=="none"){
				$(this).find(".flex .text").html("更多");
				$(this).find(".flex .sign").css({"transform":"rotate(0deg)"});
			}
			else{
				$(this).find(".flex .text").html("收起");
				$(this).find(".flex .sign").css({"transform":"rotate(-90deg)"});
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
				$(this).find(".line").css("display","block");
			}
			else{
				$(this).find(".line").css("display","none");
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

             if($(this).siblings().length>0){
             	$(this).find(".flex").css("opacity","1");
             }
             else{
             	$(this).find(".flex").css("opacity","0");
             }
        });
        
        $.each($(".sidebar-navbar .one-Item"),function (index,domEle){

             /*只开第一个*/
             if($(this).siblings().length>0){
             	$(this).click();
             	return false;
             }
        });
        
        /*遍历*/
        $.each($(".sidebar-navbar .two-Item"),function (index,domEle){
        	if($(this).siblings(".three-navbar").css("display")=="block"){
				$(this).find(".line").css("display","block");
			}
			else{
				$(this).find(".line").css("display","none");
			}
        });
        
        $.each($(".sidebar-navbar .two-Item"),function (index,domEle){

             if($(this).siblings().length>0){
             	$(this).find(".flex").css("opacity","1");
             }
             else{
             	$(this).find(".flex").css("opacity","0");
             }
        });

		/*导航栏结束*/
		                      
	});
	

var product_type_Swiper = new Swiper('.product-type-swiper', {
        slidesPerView: 1.3,
        centeredSlides: true,
        paginationClickable: true,
        loop:true,
        spaceBetween: -15,
        autoplay:3000,
        pagination: '.product-type-pagination',
	    paginationType : 'fraction',
	    paginationFractionRender: function (swiper, currentClassName, totalClassName) {
	      return '<div class="product-type-page"><span class="' + currentClassName + '"></span>' +
	             ' / ' +
	             '<span class="' + totalClassName + '"></span></div>';
	    }
    });