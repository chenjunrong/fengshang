$(window).load(function(){
    
    $(".tabbar-List").on('click','li',function(){
    	$(".tabbar-List li").removeClass('active');
    	$(this).addClass('active');
    	switch ($(this).index()){
    		case 0:{
	    		$(".product-detail").css("display","block");
	    		$(".product-spec").css("display","none");
	    	  }
    			break;
    	    case 1:{
    	        $(".product-detail").css("display","none");
    		    $(".product-spec").css("display","block");	    
    		     prospecSwiper.update();
    		   }
    		    break;
    		
    	}
    });
		
});


