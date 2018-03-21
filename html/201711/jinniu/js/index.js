$(window).load(function(){

  autoSize();
  
  $(".my-news .title-box .prev-btn").click(function(){
  	my_news_swiper.slidePrev();
  });
  $(".my-news .title-box .next-btn").click(function(){
  	my_news_swiper.slideNext();
  });
  


});
	




function autoSize(){
	var ctitleMarL=$(".my-case-List .cover .title").width()/2*-1;
	$(".my-case-List .cover .title").css("margin-left",ctitleMarL);
}

var my_product_swiper = new Swiper('.my-product-swiper', {
	      pagination: '.my-product-pagination',
		    spaceBetween: 20,
		    slidesPerView: 4,
		    loop:true,
		    autoplay: 3000
		});
		
var my_news_swiper = new Swiper('.my-news-swiper', {
	      paginationClickable: true,
		    slidesPerView: 3,
		    spaceBetween: 22.5,
		    loop:true,
		    autoplay: 4000
		});
		
var my_brand_swiper = new Swiper('.my-brand-swiper', {
	      paginationClickable: true,
		    slidesPerView: 7,
		    spaceBetween: 25
//		    loop:true,
//		    autoplay: 3000,

		});	
