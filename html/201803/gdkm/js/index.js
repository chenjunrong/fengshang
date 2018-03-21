$(window).load(function(){

  autoHeight();
  
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
	

function autoHeight(){
	  var myProH=$(".my-product-swiper .swiper-slide a").width()*1.44;
	  $(".my-product-swiper .swiper-slide a").height(myProH);
	  
}
//监听窗口改变事件
    $(window).resize(function(){		
      autoHeight();
    });

var my_newPro_swiper = new Swiper('.my-newPro-swiper', {
        spaceBetween: 36.4,
		    slidesPerView:6,		 
		    autoplay: 2500
});

var my_product_swiper = new Swiper('.my-product-swiper', {
	      pagination: '.my-product-pagination',
        spaceBetween: 15,
		    slidesPerView:4
});

var my_news_swiper = new Swiper('.my-news-swiper', {
        spaceBetween: 30,
		    slidesPerView:3, 
		    autoplay: 2500
});

		
