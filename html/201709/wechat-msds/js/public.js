	$(window).load(function(){
          
        $(".logo").click(function(){
        	location.href="index.html"
        });
        
              
        $(".menu-tool").click(function(){	
            $(".menu-bar").toggle();
        });
              
        $(".footNaviList").on('click','li',function(){
        	$(this).siblings('li').removeClass('active');
        	$(this).addClass('active');
        	
        	switch ($(this).index()){
        		case 0:
        		 window.history.back();
        			break;	
        		case 1:
        		location.href="product.html";
        			break;
        		case 2:
        		location.href="index.html";
        			break;
        		case 3:
        			break;
        		case 4:
        			break;

        	};
        });
          
	});
	
		var swiper1 = new Swiper('.swiper1', {
			pagination: '.banner-pagination',
		    paginationClickable: true,
		    spaceBetween: 0,
		    centeredSlides: true,
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false
		});	
		
