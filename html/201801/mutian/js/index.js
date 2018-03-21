$(window).load(function(){

  autoSize();
  

  $(".my-product-gallery .prev-Btn").click(function(){
  	my_product_swiper.slidePrev();
  });
  $(".my-product-gallery .next-Btn").click(function(){
  	my_product_swiper.slideNext();
  });
  
  $(".my-newPro-gallery .prev-Btn").click(function(){
  	my_newPro_swiper.slidePrev();
  });
  $(".my-newPro-gallery .next-Btn").click(function(){
  	my_newPro_swiper.slideNext();
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
		    spaceBetween: 30,
		    slidesPerView: 3,
		    autoplay: 3000
		});
		
var my_newPro_swiper = new Swiper('.my-newPro-swiper', {

});

		
var my_project_swiper = new Swiper('.my-project-swiper', {
		    slidesPerView: 3,
        slidesPerColumn: 2,
		    spaceBetween: 30,
		    loop:true,
		    autoplay: 4000
		});
