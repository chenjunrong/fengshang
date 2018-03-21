$(window).load(function(){

  autoSize();
  
  $(".my-product .my-prevBtn").click(function(){
  	my_product_swiper.slidePrev();
  });
  $(".my-product .my-nextBtn").click(function(){
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
		    spaceBetween: 0,
		    autoplay: 4000,
		    loop:true
		});
		
var my_news_swiper = new Swiper('.my-news .my-news-swiper', {
	      pagination: '.banner-pagination',
	      paginationClickable: true,
		    slidesPerView: 2,
		    spaceBetween: 100,
		    loop:true,
		    autoplay: 4000
		});
