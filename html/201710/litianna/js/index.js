		$(window).load(function(){ 
			
            autoSize();
            
            $(".my-lg-news-tabbar").on("click","li",function(){
            	switch($(this).index()){
            		case 0:{
            			$(".my-news-qiye").css("display","block");
            			$(".my-news-xingye").css("display","none");	
            		}
            		break;
            		case 1:{
            			$(".my-news-qiye").css("display","none");
            			$(".my-news-xingye").css("display","block");
            		}
            		break;
            	}
            	
            	$(".my-lg-news-tabbar li").removeClass("active");
            	$(this).addClass("active");
            });
            
            $(".my-product-tabbar").on("click","li",function(){
            	switch($(this).index()){
            		case 0:{
            			$(".product-box.my-product-cizhuan").css({'opacity':'0','position':'absolute','top':'0','left':'0'});
            			$(".product-box.my-product-shicai").css({'position':'relative'});
            			swiper2.updateContainerSize();
            			swiper2.updateSlidesSize();
            			$(".product-box.my-product-shicai").css({'opacity':'1'});	
            		
            		}
            		break;
            		case 1:{
            			$(".product-box.my-product-shicai").css({'opacity':'0','position':'absolute','top':'0','left':'0'});
            			$(".product-box.my-product-cizhuan").css({'position':'relative'});
            			swiper3.updateContainerSize();
            			swiper3.updateSlidesSize();
            			$(".product-box.my-product-cizhuan").css({'opacity':'1'});
                        
            		}
            		break;
            	}
            	
            	$(".my-product-tabbar li").removeClass("active");
            	$(this).addClass("active");
            });
            
            $(".project-navList").on("click","li",function(){
            	switch($(this).index()){
            		case 0:{
            			$(".my-project-anli").siblings('.my-project-List').css("display","none");
            			$(".my-project-anli").css("display","block");
            		}
            		break;
            		case 1:{
            			$(".my-project-minghang").siblings('.my-project-List').css("display","none");
            			$(".my-project-minghang").css("display","block");
            		}
            		break;
            		case 2:{
            			$(".my-project-ditie").siblings('.my-project-List').css("display","none");
            			$(".my-project-ditie").css("display","block");
            		}
            		break;
            		case 3:{
            			$(".my-project-tielu").siblings('.my-project-List').css("display","none");
            			$(".my-project-tielu").css("display","block");
            		}
            		break;
            		case 4:{
            			$(".my-project-zhuangshi").siblings('.my-project-List').css("display","none");
            			$(".my-project-zhuangshi").css("display","block");
            		}
            		break;
            		case 5:{
            			$(".my-project-jiudian").siblings('.my-project-List').css("display","none");
            			$(".my-project-jiudian").css("display","block");
            		}
            		break;
            		case 6:{
            			$(".my-project-yiliao").siblings('.my-project-List').css("display","none");
            			$(".my-project-yiliao").css("display","block");
            		}
            		break;
            		case 7:{
            			$(".my-project-jianzhu").siblings('.my-project-List').css("display","none");
            			$(".my-project-jianzhu").css("display","block");
            		}
            		break;
            		case 8:{
            			$(".my-project-daxing").siblings('.my-project-List').css("display","none");
            			$(".my-project-daxing").css("display","block");
            		}
            		break;
            	}
            	
            	$(".project-navList li").removeClass("active");
            	$(this).addClass("active");
            });
            
            
            
			$('.my-prevBtn').click(function(){
			  swiper2.slidePrev();
			  swiper3.slidePrev();
			});
			$('.my-nextBtn').click(function(){
			  swiper2.slideNext();
			  swiper3.slideNext();
			});
			
		   	$(".my-project-List").on('mouseenter','li',function(){
	     		$(this).find(".my-cover").fadeIn(300);
	     	});
	     	
	     	$(".my-project-List").on('mouseleave','li',function(){
	     		$(this).find(".my-cover").fadeOut(300);
	     	});
	     	
	     	$(".my-about-List").on('mouseenter','li',function(){
	     		$(this).find(".my-about-cover-title").css("opacity","1");
	     		$(this).find(".my-xs-about-cover-title").css("opacity","1");
	     	});
	     	
	     	$(".my-about-List").on('mouseleave','li',function(){
	     		$(this).find(".my-about-cover-title").css("opacity","0.8");
	     		$(this).find(".my-xs-about-cover-title").css("opacity","0.8");
	     	});
	    
			
		});
		
		function autoSize(){
			$(".my-project-List li:gt(2)").css("margin-top","0.8%");
			
			var proHeight=$(".my-project-List").height();
            $(".project-NavBar").height(proHeight);
            
            var navListmarH=$(".project-navList").height()/2*-1;
            $(".project-navList").css("margin-top",navListmarH);
            
            $(".my-about-cover-title").height($(".my-about-cover-title").width());
            $(".my-about-cover-title").css("line-height",""+$(".my-about-cover-title").height()+"px"+"");
            
            $(".my-xs-about-cover").height($(".my-xs-about-cover").width());
            $(".my-xs-about-cover").css("line-height",""+$(".my-xs-about-cover").height()+"px"+"");
            

		};

		//监听窗口改变事件
	    $(window).resize(function(){		
          autoSize();
	    });
				
		var swiper2 = new Swiper('.my-lg-product .swiper2', {
		    slidesPerView: 7,
		    spaceBetween: 25,
		    autoplay: 3500,
		    loop:true,
		    breakpoints: {
	            1650: {
	                slidesPerView: 4,
	                spaceBetween: 40
	            },
	            1200: {
	                slidesPerView: 3,
	                spaceBetween: 30
	            },
	            750: {
	                slidesPerView: 2,
	                spaceBetween: 30
	            }
           }
		});
		var swiper3 = new Swiper('.my-lg-product .swiper3', {
		    slidesPerView: 7,
		    spaceBetween: 25,
		    autoplay: 3500,
		    loop:true,
		    breakpoints: {
	            1650: {
	                slidesPerView: 4,
	                spaceBetween: 40
	            },
	            1200: {
	                slidesPerView: 3,
	                spaceBetween: 30
	            },
	            750: {
	                slidesPerView: 2,
	                spaceBetween: 30
	            }
           }
		});
		
		