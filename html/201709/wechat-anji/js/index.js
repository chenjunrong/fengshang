		$(window).load(function(){
			autoHeight();
			
			$("#header .iconfont").click(function(){
		 		$("#menu").toggle(0);
		    });
		    
		    $("#menu").on('click','li',function(){  	
		    	switch($(this).index()){
		    		case 0:location.href="index.html";
		    		       break;
		    	}
		    });
		    
//		    $("#index .box5 .engList").on('click','li',function(){
//			    swiper3.slideTo($(this).index(), 1000, false);    
//				$("#index .box5 .engList li.active").removeClass('active'); 
////				$("#index .box5 .engList li.active").removeAttr("class");
//				$(this).addClass('active') ;
//  		});
    
		});
		
		function autoHeight(){
			var swiper1Height=$("#index .swiper1").width()*0.489;
			$("#index .swiper1").height(swiper1Height);
			
			var sw2imgHeight=$("#index .box4 .swiper2 .swiper-slide img").width()*1.29;
			$("#index .box4 .swiper2 .swiper-slide img").height(sw2imgHeight);
			
		}
		
		
		var swiper1 = new Swiper('.swiper1', {
			pagination: '.box1-pagination',
		    paginationClickable: true,
		    spaceBetween: 0,
		    centeredSlides: true,
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false
		});
		
		var swiper2 = new Swiper('.swiper2', {
			pagination: '.box4-pagination',
		    paginationClickable: true,
		    autoplay: 4000,
		    autoplayDisableOnInteraction: false,
		    slidesPerView: 2.5,
		    spaceBetween: 30,
		    slidesOffsetBefore : 30,
	        freeMode: true,
		    breakpoints: {
		              375:{
		              	slidesPerView: 2,
                        spaceBetween: 20,
                        slidesOffsetBefore : 20
		              }
		    }
		});
		
		var swiper3 = new Swiper('.swiper3', {
			pagination: '.swiper-pagination',
		    paginationClickable: true,
		    spaceBetween: 0,
		    onSlideChangeStart: function(swiper){	 
//	            var index=swiper.activeIndex+1;  
//	            $("#index .box5 .engList li:nth-child("+index+")").click();                       //当前激活状态 
		    }
		});
		
		var swiper4 = new Swiper('.swiper4', {
			pagination: '.box1-pagination',
		    paginationClickable: true,
		    autoplay: 4000,
		    autoplayDisableOnInteraction: false,
		    slidesPerView: 3,
		    spaceBetween: 30,
		    loop:true
		});
		