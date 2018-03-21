$(window).load(function(){

  autoSize();
  
  $(".my-page-btn .prev-Btn").click(function(){
  	my_product_show_swiper.slidePrev();
  });
  $(".my-page-btn .next-Btn").click(function(){
  	my_product_show_swiper.slideNext();
  });
  
  
  $(".my-product-show-swiper").on("mouseenter",".swiper-slide",function(){
      $(this).find('.cover').css("display","block");
  });
  
  $(".my-product-show-swiper").on("mouseleave",".swiper-slide",function(){
      $(this).find('.cover').css("display","none");
  });
  	  


});
	




function autoSize(){
	var ctitleMarL=$(".my-case-List .cover .title").width()/2*-1;
	$(".my-case-List .cover .title").css("margin-left",ctitleMarL);
}

var my_product_swiper = new Swiper('.my-product-swiper', {
	      pagination: '.my-product-pagination',
	      paginationClickable: true,
		    spaceBetween: 16,
		    slidesPerView: 4,
		    loop:true,
		    autoplay: 3500,

		});
		
var my_product_show_swiper = new Swiper('.my-product-show-swiper', {
	      pagination: '.my-product-show-pagination',
		    slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 20
//      loop:true,
//      paginationClickable: true
//		    autoplay: 3500

		});		
		
var my_news_swiper = new Swiper('.my-news .my-news-swiper', {
	      pagination: '.my-product-pagination',
	      paginationClickable: true,
		    slidesPerView: 3,
		    spaceBetween: 24,
		    loop:true,
		    autoplay: 4000
		});
