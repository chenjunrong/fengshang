		$(window).load(function(){    
			
            $(".inside-type-swiper").on("click",".swiper-slide",function(){
	        	$(".inside-type-swiper .swiper-slide").removeClass("active");
	        	$(this).addClass("active");          	
	        });

            /*遍历*/
            if($(".inside-type-swiper").length>0){
		        $.each($(".inside-type-swiper .swiper-slide"),function (index,domEle){
		            var typeW=$(this).find("a").width()+1;
		            $(this).css("width",typeW);  
		            /*更新swiper-slide宽度*/
		            inside_type_swiper.update();
		        });
		        
	        }


            $(".type-tabbar-swiper").on("click",".swiper-slide",function(){
	        	$(".type-tabbar-swiper .swiper-slide").removeClass("active");
	        	$(this).addClass("active");
	        });

            /*遍历*/
            if($(".type-tabbar-swiper").length>0){
		        $.each($(".type-tabbar-swiper .swiper-slide"),function (index,domEle){
		            var typeW=$(this).find("a").width();
		            $(this).css("width",typeW);         
		        });
		        /*更新swiper-slide宽度*/
		        type_tabbar_swiper.update();
	        }
            
            
            
	                   
		});
		
		
		
		

		
		
		var inside_type_swiper = new Swiper('.inside-type-swiper', {
            slidesPerView :'auto'
		});
		var type_tabbar_swiper = new Swiper('.type-tabbar-swiper', {
            slidesPerView :'auto'
		});	
		
			


		
	
		