$(window).load(function(){
    		$("#header .menuIcon").click(function(){
    			$("#index .menu").toggle();		
    		});
    		
    		autoHeight();
    		
    		$("#index .box5 .engList").on('click','li',function(){
  			    swiper3.slideTo($(this).index(), 1000, false);
				$("#index .box5 .engList li").removeClass('active');  
				$(this).addClass('active') ;
    		});
    		
    		$('#index .box4 .prevBtn').click(function(){
				swiper2.slidePrev();
			  });
			$('#index .box4 .nextBtn').click(function(){
			    swiper2.slideNext();
			});
			
			
			//滚动时间
			 $(window).scroll(function() {
			 	var y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;		 
			    var top=$(window).scrollTop();
			    var box1=$(".box1").offset().top;
			    
		        var box2=$(".index-about").offset().top-$(".box1").height()/1;
		        var box22=$(".index-about").offset().top;
		        
		        var box3=$(".my-about").offset().top-$(".index-about").height()/0.7;
		        var box33=$(".my-about").offset().top;
		        
		        var box4=$(".box4").offset().top-$(".my-about").height()/0.85;
		        var box44=$(".box4").offset().top;
		        
		        var box5=$(".box5").offset().top-$(".box4").height()/0.9;
		        var box55=$(".box5").offset().top;
		        
		        var box6=$(".box6").offset().top-$(".box5").height()/0.8;
		        var box66=$(".box6").offset().top;
		        

		         if(box2<top&&top<box22){
		         	$(".index-about").addClass('bounceUp');
		         }
		         if(box3<top&&top<box33){
		         	$(".my-about").addClass('bounceUp');
		         }
		         if(box4<top&&top<box44){
		         	$(".box4").addClass('bounceUp');
		         }
		         if(box5<top&&top<box55){
		         	$(".box5").addClass('bounceUp');
		         }
		         if(box6<top&&top<box66){
		         	$(".box6").addClass('bounceUp');
		         }
			    
			  });
			  
			 
	
    	});
    	
    	function autoHeight(){
    		var winHeight=$(window).height();
    		var bannerHeight=winHeight-$("#header").height();
    		$("#index .box1").height(bannerHeight);
    		
    		
    		$(".index-about .swiper-slide img").height($(".index-about .swiper-slide img").width());
    		
    		var productHeight=$("#index .box4 .swiper2 .swiper-slide div").width() *1.3;
    		$("#index .box4 .swiper2 .swiper-slide div").height(productHeight);
             
            var leftHeight=$("#index .box5 .container .left").width()*0.6;
            $("#index .box5 .container .left").height(leftHeight); 
            $("#index .box5 .container .right").height($("#index .box5 .container .left").height());
    
    	};
    	
    	 //监听窗口改变事件
	    $(window).resize(function(){		
             autoHeight();
	    });
	    
		  
		
    	
var swiper1 = new Swiper('.swiper1', {
	pagination: '.box4-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    loop:true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});



var swiper2 = new Swiper('.swiper2', {
	pagination: '.box4-pagination',
    paginationClickable: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    breakpoints: {
    	    1200: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30
            }
      }
});

var swiper3 = new Swiper('.swiper3', {
	pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 0
});


var swiper4 = new Swiper('.swiper4', {
	pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView:6,
    slidesPerColumn:2, 
    spaceBetween: 30,
    breakpoints: {
    	    1200: {
                slidesPerView: 4,
                slidesPerColumn:3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                slidesPerColumn:4,
                spaceBetween: 20
            }
      }
});

var swiper5 = new Swiper('.swiper5', {
	pagination: '.box4-pagination',
    paginationClickable: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    slidesPerView: 3,
    spaceBetween: 5,
    loop:true,
    breakpoints: {
    	    1200: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 30
            }
      }
});