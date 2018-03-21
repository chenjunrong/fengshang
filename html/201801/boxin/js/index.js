$(window).load(function(){

  autoSize();
  
  $(".my-video-swiper .prev-Btn").click(function(){
  	my_video_swiper.slidePrev();
  });
  $(".my-video-swiper .next-Btn").click(function(){
  	my_video_swiper.slideNext();
  });
  
  
  $(".my-video-swiper").on("mouseenter",function(){
      $(".my-video-swiper .page-Btn").css("display","block");
  });
  $(".my-video-swiper").on("mouseleave",function(){
      $(".my-video-swiper .page-Btn").css("display","none");
  });
  
  
  $(".my-about-banner .prev-Btn").click(function(){
  	   $(".controls .item-prev").click();
  });
  $(".my-about-banner .next-Btn").click(function(){
  	   $(".controls .item-next").click();
  });
  
  $('#slide3d').slideCarsousel({slideType:'3d',indicatorEvent:'mouseover'});
  
  
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

}

var my_video_swiper = new Swiper('.my-video-swiper', {

		});


var my_product_swiper = new Swiper('.my-product-swiper', {
	      pagination: '.my-product-pagination',
	      paginationClickable: true,
		    spaceBetween: 30,
		    slidesPerView: 3,
        slidesPerColumn: 2,
		    autoplay: 3000

		});

		
var my_news_swiper = new Swiper('.my-news .my-news-swiper', {
	      pagination: '.my-product-pagination',
	      paginationClickable: true,
		    slidesPerView: 2,
		    spaceBetween: 135,
		    loop:true,
		    autoplay: 4000
		});
