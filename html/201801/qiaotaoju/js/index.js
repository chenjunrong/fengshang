$(window).load(function(){

    autoSize();

    $(".my-project-tabbar").on("click","li",function(){

    	$(".my-project-tabbar li").removeClass("active");
    	$(this).addClass("active");
    	
    	my_project_swiper.slideTo($(this).index(), 500, false);
    });
    
    $(".my-news-sidebar").on("click","li",function(){
    	$(".my-news-sidebar li").removeClass("active");
    	$(this).addClass("active");
    	
    	my_news_swiper.slideTo($(this).index(), 500, false);
    });
	
	
	//禁止滑动
   	my_project_swiper.enableTouchControl();
   	my_project_swiper.disableTouchControl();
   	my_news_swiper.enableTouchControl();
   	my_news_swiper.disableTouchControl();
  


  
  	  
   

});
	
	function autoSize(){
	    var winW=$(window).width();
	    var winH=$(window).height();
	    var bannerH=winH-$(".header").height();
	    $(".banner-swiper").height(bannerH);

	}
	
$(window).resize(function() {
  autoSize()
});
	


var swiperV = new Swiper('.swiper-container-v', {
    pagination: '.pagination-v',
    paginationClickable: true,
    direction: 'vertical',
    mousewheelControl: true,
    keyboardControl: true
});
var swiperH = new Swiper('.swiper-container-h', {
    pagination: '.swiper-pagination-h',
    paginationClickable: true,
    spaceBetween: 50
});

var my_product_swiper=new Swiper('.my-product-swiper', {
      slidesPerView: 3,
      loop:true,
      centeredSlides: true,
      autoplay:3500
      
});
var my_project_swiper= new Swiper('.my-project-swiper', {
            effect : 'fade',
			fade: {
			  crossFade: true,
			},
			speed:1000
		});
		
var my_news_swiper= new Swiper('.my-news-swiper', {
            effect : 'fade',
			fade: {
			  crossFade: true,
			},
			speed:1000

		});		
