	$(window).load(function(){
          
       //字体闪烁
//		blinklink();  
        
        autoSize();
          
        $(".logo").click(function(){
        	location.href="index.html";
        });
                  
        $(".menu-btn").click(function(){	 
        	$(".menu").css("display","block");
        	$(".menu-bar").animate({"margin-left":"0px"},300);
        	$(".menu-close").animate({"margin-right":"0px"},300);      
        });
        
        $(".close-btn").click(function(){	      
        	$(".menu-bar").animate({"margin-left":"-500px"},300,function(){
        		$(".menu").css("display","none");
        	});
        	$(".menu-close").animate({"margin-right":"-500px"},300);          	
        });


        $(".search-Btn").click(function(){	
            $(".serach-bar").slideToggle();
        });
        
        $(".inside-tabbar-List").on("click","li",function(){
        	$(".inside-tabbar-List li").removeClass("active");
        	$(this).addClass("active");
        });
        
              
       
	});
	
		var banner_swiper = new Swiper('.banner-swiper', {
			pagination: '.banner-pagination',
		    paginationClickable: true,
		    spaceBetween: 0,
		    centeredSlides: true,
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false
		});	
		
       
        var inside_tabbar_swiperr = new Swiper('.inside-tabbar-swiper', {
		    spaceBetween: 0,
		    slidesPerView: 2.95
//		    autoplay: 2500,
//		    autoplayDisableOnInteraction: false
		});	
		
		
		function autoSize(){
			var winWidth=$(window).width();
			var winHeight=$(window).height();
			$(".menu").css("height",winHeight);
			$(".menu-bar").css("height",winHeight);
			
			$(".thumb-img").css("height",$(".thumb-img").css("width"));
		}
		
//字体闪烁
 function blinklink() {
    if ($('#blink').css("color") == "rgb(230, 0, 18)") {
        $('#blink').css("color", "rgb(0, 0, 0)")
    } else {
        $('#blink').css("color", "rgb(230, 0, 18)")
    }
    timer = setTimeout("blinklink()", 300)
}