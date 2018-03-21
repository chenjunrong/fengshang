$(window).load(function(){

  
  $(".banner-swiper .prev-Btn").click(function(){
  	  banner_swiper.slidePrev();
  });
  $(".banner-swiper .next-Btn").click(function(){
    	banner_swiper.slideNext();
  });
  
  $(".banner-swiper").mouseenter(function(){
  	  $(".banner-swiper .prev-Btn,.banner-swiper .next-Btn").css("display","block");
  });
  $(".banner-swiper").mouseleave(function(){
  	  $(".banner-swiper .prev-Btn,.banner-swiper .next-Btn").css("display","none");
  });
  
  $(".my-product-gallery .prev-Btn").click(function(){
  	  my_product_swiper.slidePrev();
  });
  $(".my-product-gallery .next-Btn").click(function(){
    	my_product_swiper.slideNext();
  });
  
  $(".my-product-gallery ").mouseenter(function(){
  	  $(".my-product-gallery .prev-Btn,.my-product-gallery .next-Btn").css("display","block");
  });
  $(".my-product-gallery ").mouseleave(function(){
  	  $(".my-product-gallery .prev-Btn,.my-product-gallery .next-Btn").css("display","none");
  });
  
  
});
	





 
var banner_swiper = new Swiper('.banner-swiper', {
	  pagination: '.banner-pagination',
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 2500
});	

 

var my_about_swiper = new Swiper('.my-about-swiper', {
    	pagination: '.my-about-pagination',
	    spaceBetween: 5,
	    slidesPerView: 3
		});

var my_product_swiper = new Swiper('.my-product-swiper', {
      pagination: '.my-product-pagination',
	    spaceBetween: 35, 
	    slidesPerView: 4,
	    breakpoints: {
        1555: {
            slidesPerView: 3,
            spaceBetween: 40
        }
     },
	    autoplay: 4000
		});
		
//var my_news_swiper = new Swiper('.my-news .my-news-swiper', {
//	      pagination: '.banner-pagination',
//	      paginationClickable: true,
//		    slidesPerView: 3,
//		    spaceBetween: 24,
//		    loop:true,
//		    autoplay: 4000
//		});
