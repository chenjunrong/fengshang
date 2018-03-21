	$(window).load(function(){
          
        $(".logo").click(function(){
        	location.href="index.html"
        });
              
        $(".menu-tool").click(function(){	
            $(".menu-bar").toggle();
        });
             
             
        $(".productList").on('click','li',function(){
        	switch ($(this).index()){
        		case 0:  //柔光砖系列
        		    location.href="product_paoguang.html";
        			break;	
        		case 1:	//通体大理石系列
        		    location.href="product_dalishi.html";
        			break;
        		case 2://抛光砖系列	
        		    location.href="product_paoguang.html";
        			break;
        		case 3://金刚玉石系列
        		    location.href="product_paoguang.html";
        			break;
        		case 4://瓷片系列
        		    location.href="product_cipian.html";
        			break;
        		case 5://晶钻原石系列
        			break;	
        		case 6://大理石系列
        		    location.href="product_dalishi.html";
        			break;
        	};
        });
        
        $(".pro-paoguangList").on('click','li',function(){
        		location.href="paoguang-detail.html";
        });
        $(".pro-cipianList").on('click','li',function(){
        		location.href="cipian-detail.html";
        });
        $(".pro-dalishiList").on('click','li',function(){
        		location.href="dalishi-detail.html";
        });
        
        
        
             
             
        $(".top-title-box .top-tabbar").on('click','li',function(){
        	$(this).siblings('li').removeClass('active');
        	$(this).addClass('active');
        });
        
        $(".my-page").on('click','li',function(){
        	$(this).siblings('li').removeClass('active');
        	$(this).addClass('active');
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
//			pagination: '.box1-pagination',
		    paginationClickable: true,
		    spaceBetween: 0,
		    centeredSlides: true,
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false
		});	 