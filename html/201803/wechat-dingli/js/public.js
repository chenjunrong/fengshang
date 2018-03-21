	$(window).load(function(){
                
        $(".menu-Btn").click(function(){	
            $(".menu-bar").toggle();
        });
        
         $(".search-Btn").click(function(){	
            $(".serach-bar").slideToggle();
        });
        
        $(".inside-tabbar-swiper").on("click",".swiper-slide",function(){
        	$(".inside-tabbar-swiper .swiper-slide").removeClass("active");
        	$(this).addClass("active");
        });
         

	    if($(".inside-tabbar-swiper").length>0){
	    	if(inside_tabbar_swiper.slides.length==1){
	
		        inside_tabbar_swiper = new Swiper('.inside-tabbar-swiper', {
				    slidesPerView: 1
				});	
				
	       }else if(inside_tabbar_swiper.slides.length==2){
	
		        inside_tabbar_swiper = new Swiper('.inside-tabbar-swiper', {
				    slidesPerView: 2
				});	
				
	        }else if(inside_tabbar_swiper.slides.length==3){
	        	inside_tabbar_swiper = new Swiper('.inside-tabbar-swiper', {
				    slidesPerView: 3
				});	
	        }
	    }
	    
	    
	    $(".size-tabbar-swiper").on("click",".swiper-slide",function(){
        	$(".size-tabbar-swiper .swiper-slide").removeClass("active");
        	$(this).addClass("active");
        });
        
	    if($(".size-tabbar-swiper").length>0){
	    	if(size_tabbar_swiper.slides.length==1){
	
		        size_tabbar_swiper = new Swiper('.size-tabbar-swiper', {
				    slidesPerView: 1
				});	
				
	       }else if(inside_tabbar_swiper.slides.length==2){
	
		        size_tabbar_swiper = new Swiper('.size-tabbar-swiper', {
				    slidesPerView: 2
				});	
				
	        }else if(size_tabbar_swiper.slides.length==3){
	        	size_tabbar_swiper = new Swiper('.size-tabbar-swiper', {
				    slidesPerView: 3
				});	
	        }
	    };
	    
	    $(".banner .swiper-pagination-custom").on("click",".swiper-border",function(){
        	var index=$(this).index();
        	banner_swiper.slideTo(index, 1000, false);
        });
        
   
	});
	
		var banner_swiper = new Swiper('.banner-swiper', {
		    pagination: '.swiper-pagination',
		    spaceBetween: 0,
		    centeredSlides: true,
		    paginationType: 'custom',//这里分页器类型必须设置为custom,即采用用户自定义配置  
            //下面方法可以生成我们自定义的分页器到页面上  
            paginationCustomRender: function(swiper, current, total) {  
                var customPaginationHtml = "";  
                for(var i = 0; i < total; i++) {  
                    //判断哪个分页器此刻应该被激活  
                    if(i == (current - 1)) {  
                        customPaginationHtml += '<div class="swiper-border swiper-border-active"><span class="swiper-pagination-customs swiper-pagination-customs-active"></span></div>';
                    } else {  
                        customPaginationHtml += '<div class="swiper-border"><span class="swiper-pagination-customs"></span></div>';  
                    }  
                }  
                return customPaginationHtml;  
            }, 
		    autoplay: 2500
		});	
		
		var inside_tabbar_swiper = new Swiper('.inside-tabbar-swiper', {
		   spaceBetween: 0,
	       slidesPerView: 3.5
	    });	
	    
	    var size_tabbar_swiper = new Swiper('.size-tabbar-swiper', {
	       slidesPerView: 3.5
	    });	
		
