$(window).load(function(){

  autoSize();
  
  $(".my-product .my-prevBtn").click(function(){
  	swiper2.slidePrev();
  });
  $(".my-product .my-nextBtn").click(function(){
  	swiper2.slideNext();
  });
  
  $(".my-product .my-product-swiper").mouseenter(function(){
  	  $(".my-product .my-prevBtn,.my-product .my-nextBtn").css("display","block");
  });
  $(".my-product .my-product-swiper").mouseleave(function(){
  	  $(".my-product .my-prevBtn,.my-product .my-nextBtn").css("display","none");
  });
  
  
  $(".my-news .my-prevBtn").click(function(){
  	swiper3.slidePrev();
  });
  $(".my-news .my-nextBtn").click(function(){
  	swiper3.slideNext();
  });
  
  
   $(".my-news-swiper").on("click",".swiper-slide",function(){
        $(".my-news-swiper .swiper-slide .more").css("background","#eeeeee");
        $(this).find(".more").css("background","#000000");
       	$(".my-news-swiper .swiper-slide").removeClass('active');
        $(this).addClass('active');
        swiper3.activeIndex=$(this).index();
   });
   
   $(".my-news .my-news-swiper").on("mouseenter",".swiper-slide",function(){
   	  $(this).find(".more").css("background","#000000");
   });
   
   $(".my-news .my-news-swiper").on("mouseleave",".swiper-slide",function(){
   	
	   	if($(this).hasClass("active")==false){
	   		 $(this).find(".more").css("background","#eeeeee");
	   	}
   	 
   });
  	  


});
	




function autoSize(){
	var titleMarL=$(".my-title-box .my-line .title-en").width()/2*-1;
	$(".my-title-box .my-line .title-en").css("margin-left",titleMarL);
}

var swiper2 = new Swiper('.my-product .my-product-swiper', {
		    slidesPerView: 3,
		    spaceBetween: 60,
		    autoplay: 3500,
		    loop:true
		});
		
var swiper3 = new Swiper('.my-news .my-news-swiper', {
		    slidesPerView: 3,
		    spaceBetween: 40,
		    loop:true,
		    onSlideChangeStart: function(swiper){	
          var index=swiper.activeIndex+1;
          $(".my-news-swiper .swiper-slide").removeClass('active');
          $(".my-news-swiper .swiper-slide:nth-child("+index+")").addClass('active');
          $(".my-news-swiper .swiper-slide .more").css("background","#eeeeee");
          $(".my-news-swiper .swiper-slide:nth-child("+index+")").find(".more").css("background","#000000");
        }

		});
