	$(window).load(function(){
		
		
		autoHeight();
		
        $(".logo").click(function(){
        	location.href="index.html";
        });
        
        $(".collect").click(function(){	
        	var url = window.location.href;
        	AddFavorite('英歌官网',url);
        });
        
        
        $(".search-Btn").click(function(){	
            $(".my-serach-bar").slideToggle();
        });
        
        
        $(".my-tabbar .tabbar-List").on("click","li",function(){
        	$(".my-tabbar .tabbar-List li").removeClass("active");
        	$(this).addClass("active");
        });
        
       	$(".sidebar-navbar").on('click','li .one-Item',function(){
			$(this).siblings(".sidebar-navbar ul").toggle();
			$(".sidebar-navbar li .one-Item").removeClass("active");
			$(this).addClass("active");		
			$(".sidebar-navbar .two-Item").removeClass("active");
			$(this).next().find('a').first().addClass("active");	
		});
		
		$(".sidebar-navbar").on('click','li .two-Item',function(){
			$(".sidebar-navbar li .two-Item").removeClass("active");
			$(this).addClass("active");
		});
		


	   
		
                       
	});
	
	function autoHeight(){
		var title_boxMh=$(".bg-title-box .title-box").height()/2*-1;
		var title_boxMw=$(".bg-title-box .title-box").width()/2*-1;
		$(".bg-title-box .title-box").css({"margin-top":title_boxMh,"margin-left":title_boxMw});
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
