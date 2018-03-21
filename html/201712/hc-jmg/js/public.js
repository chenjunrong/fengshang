	$(window).load(function(){
                
        $(".logo").click(function(){
        	location.href="about.html"
        });
          
        $(".menu-Btn").click(function(){	
            $(".menu-bar").slideToggle();
            $(".menu-bar").css("overflow","scroll");
        });
        
        $(".back-Btn").click(function(){	
            window.history.back();
        });
        
	});
	

