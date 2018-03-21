	$(window).load(function(){
		
		
		autoHeight();
		
        $(".logo").click(function(){
        	location.href="index.html";
        });
        
        
        $(".inside-tabbar-List").on('click','li',function(){
        	$(".inside-tabbar-List li").removeClass('active');
        	$(this).addClass('active');
        });
        
        $(".type-tabbar-List").on('click','li',function(){
        	$(".type-tabbar-List li").removeClass('active');
        	$(this).addClass('active');
        });
        
        $(".search-Btn").click(function(){	
            $(".my-serach-bar").slideToggle();
        });
        
        
        $(".my-tabbar .tabbar-List").on("click","li",function(){
        	$(".my-tabbar .tabbar-List li").removeClass("active");
        	$(this).addClass("active");
        });
        
        $(".inside-tabbar-swiper").on("click",".swiper-slide",function(){
        	$(".inside-tabbar-swiper .swiper-slide").removeClass("active");
        	$(this).addClass("active");
        	var index=$(this).index();
        	inside_tabbar_swiper.slideTo(index, 300, false);
        });
        
        $(".type-tabbar-swiper").on("click",".swiper-slide",function(){
        	$(".type-tabbar-swiper .swiper-slide").removeClass("active");
        	$(this).addClass("active");
        	var index=$(this).index();
        	type_tabbar_swiper.slideTo(index, 300, false);
        });

		
                       
	});
	
	function autoHeight(){

	};
	
	
	//监听窗口改变事件
    $(window).resize(function(){		
      autoHeight();
    });
	
	//加入收藏
	function AddFavorite(title, url) {
	    try {
	        window.external.addFavorite(url, title);
	    }
	    catch (e) {
	        try {
	            window.sidebar.addPanel(title, url, "");
	        }
	        catch (e) {
	            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
	        }
	    }
    };
	

	
		var banner_swiper = new Swiper('.banner-swiper', {
			pagination: '.banner-pagination',
		    paginationClickable: true,
		    spaceBetween: 0,
		    centeredSlides: true,
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false
		});	
		
		var inside_tabbar_swiper = new Swiper('.inside-tabbar-swiper', {
		    spaceBetween: 10,
		    slidesPerView: 8.6
		});	
		
		var type_tabbar_swiper = new Swiper('.type-tabbar-swiper', {
		    spaceBetween: 10,
		    slidesPerView: 7.6,
		    slidesOffsetBefore : 10
		});	
