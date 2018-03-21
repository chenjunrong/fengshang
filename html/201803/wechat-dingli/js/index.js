		$(window).load(function(){       
            
            
            $(".my-newPro-swiper .swiper-pagination-custom").on("click",".swiper-border",function(){
					var index=$(this).index();
					my_newPro_swiper.slideTo(index, 1000, false);
			});
			$(".my-product-swiper .swiper-pagination-custom").on("click",".swiper-border",function(){
					var index=$(this).index();
					my_product_swiper.slideTo(index, 1000, false);
			});
 
		});
		
		var my_video_swiper= new Swiper('.my-video-swiper', {
		    spaceBetween: 38,
		    slidesPerView: 1.2,
		    slidesOffsetBefore : 25,
		    breakpoints: {
	            768: {
	                spaceBetween : 38
	            },
	            640: {
	               spaceBetween : 20
	            },
	            320: {
	                spaceBetween : 20
	            }
	        }
		});
		
		var my_newPro_swiper = new Swiper('.my-newPro-swiper', {
		    pagination: '.swiper-pagination',
		    slidesPerView: 3.6,
		    slidesPerGroup : 2,
            spaceBetween: 20,
		    paginationClickable :true,
            loop:true,
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
            autoplay:2500
		    
		});
		
		function autoSize(){
			var newimgboxW=$(".my-newPro-swiper .swiper-slide").width();
			$(".newPro .img-box").css({width:newimgboxW,height:newimgboxW});
		};
		
		
		var my_product_swiper = new Swiper('.my-product-swiper', {
			pagination: '.swiper-pagination',
		    slidesPerView:2.4,
	        centeredSlides: true,
	        paginationClickable :true,
		    loop:true,
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
		    autoplay: 3000
		});
		
		var my_news_swiper = new Swiper('.my-news-swiper', {
            slidesPerView:1.6,
	        centeredSlides: true,
	        loop:true,
	        autoplay: 3500
		});