$(window).load(function(){

  autoSize();
  
  $(".my-product-swiper .prevBtn").click(function(){
  	my_product_swiper.slidePrev();
  });
  $(".my-product-swiper .nextBtn").click(function(){
  	my_product_swiper.slideNext();
  });
  
  $(".my-product .my-product-swiper").mouseenter(function(){
  	  $(".my-product .my-prevBtn,.my-product .my-nextBtn").css("display","block");
  });
  $(".my-product .my-product-swiper").mouseleave(function(){
  	  $(".my-product .my-prevBtn,.my-product .my-nextBtn").css("display","none");
  });
  
  
  $(".my-case-List").on("mouseenter","li",function(){
      $(this).find(".cover").css("opacity","1");
  });
  $(".my-case-List").on("mouseleave","li",function(){
      $(this).find(".cover").css("opacity","0");
  });
  	  


});
	




function autoSize(){
	var ctitleMarL=$(".my-case-List .cover .title").width()/2*-1;
	$(".my-case-List .cover .title").css("margin-left",ctitleMarL);
}

var my_product_swiper = new Swiper('.my-product-swiper', {
	      pagination: '.my-product-pagination',
		    spaceBetween: 0,
		    slidesPerView: 4,
		    loop:true
//		    autoplay: 4000,

		});
		
var my_news_swiper = new Swiper('.my-news .my-news-swiper', {
	      pagination: '.banner-pagination',
	      paginationClickable: true,
		    slidesPerView: 3,
		    spaceBetween: 24,
		    loop:true,
		    autoplay: 4000
		});
