$(window).load(function(){


  $(".my-newPro-gallery .prev-Btn").click(function(){
  	my_newPro_swiper.slidePrev();
  });
  $(".my-newPro-gallery .next-Btn").click(function(){
  	my_newPro_swiper.slideNext();
  });
  
  $(".my-product-gallery .prev-Btn").click(function(){
  	my_product_swiper.slidePrev();
  });
  $(".my-product-gallery .next-Btn").click(function(){
  	my_product_swiper.slideNext();
  });
  
  $(".my-newPro-swiper .swiper-pagination-custom").on("click",".swiper-border",function(){
		var index=$(this).index();
		my_newPro_swiper.slideTo(index, 1000, false);
  });
	$(".my-product-swiper .swiper-pagination-custom").on("click",".swiper-border",function(){
			var index=$(this).index();
			my_product_swiper.slideTo(index, 1000, false);
	});
    
});
	


var my_newPro_swiper = new Swiper('.my-newPro-swiper', {
	      pagination: '.swiper-pagination',
        spaceBetween: 25,
		    slidesPerView:5,
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

var my_product_swiper = new Swiper('.my-product-swiper', {
	      pagination: '.swiper-pagination',
        spaceBetween: 26.66,
		    slidesPerView:4,
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

var my_news_swiper = new Swiper('.my-news-swiper', {
        spaceBetween: 30,
		    slidesPerView:3, 
		    autoplay: 2500
});

		
