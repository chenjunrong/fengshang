	$(window).load(function(){

        $(".logo").click(function(){
        	location.href="product-type.html"
        });
          
        $(".menu-Btn").click(function(){	
            $(".menu-bar").slideToggle();
            $(".menu-bar").css("overflow","scroll");
        });
        
        $(".back-Btn").click(function(){	
            window.history.back();
        });
          
                     
	});

		
