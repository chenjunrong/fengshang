	$(window).load(function(){
           
       autoSize();    
         
	    for(var index=1;index<49;index++){     
	        $(".swiper-wrapper").append("<div class='swiper-slide'><figure data-am-widget='figure' class='am am-figure am-figure-one' data-am-figure='{  pureview: true }'><img src='img/" +index+".jpg'  data-rel='img/" +index+".jpg'/></figure></div>");         
	    }
       
	    var product_swiper = new Swiper('.product-swiper', {
	
		});
       
        
	});
	
	function autoSize(){
		var winWidth=$(window).width();	
		var winHeight=$(window).height();	
		$(".main-container").css("height",winHeight);
		var proHeight=winWidth*0.67;
		$(".product-swiper").css("height",proHeight);
		var proMargin=proHeight/2*-1;
		$(".product-swiper").css("margin-top",proMargin);
		
	}

    