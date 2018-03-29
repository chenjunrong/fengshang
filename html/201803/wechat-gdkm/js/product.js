		$(window).load(function(){       

            $(".inside-type-swiper").on("click",".swiper-slide",function(){
	        	$(".inside-type-swiper .swiper-slide").removeClass("active");
	        	$(this).addClass("active");
	        });
	        $(".inside-size-swiper").on("click",".swiper-slide",function(){
	        	$(".inside-size-swiper .swiper-slide").removeClass("active");
	        	$(this).addClass("active");
	        });
	        
	        
	        $(".pgz-detail-List").on("click","li .more",function(){
	        	$(this).parent(".content").siblings(".img-box").find(".pgz-detail-img").click();
	        });
	        $(".project-List").on("click","li .more",function(){
	        	$(this).siblings(".img-box").find(".project-img").click();
	        });

            /*遍历*/
            if($(".inside-type-swiper").length>0){
		        $.each($(".inside-type-swiper .swiper-slide"),function (index,domEle){
		            var typeW=$(this).find("a").width();
		            $(this).css("width",typeW);         
		        });
		        /*更新swiper-slide宽度*/
		        inside_type_swiper.update();
	        }
	        if($(".inside-size-swiper").length>0){
		        $.each($(".inside-size-swiper .swiper-slide"),function (index,domEle){		
		            var sizeW=$(this).find("a").width();
		            $(this).css("width",sizeW);
		           
		        });
		        /*更新swiper-slide宽度*/
		        inside_size_swiper.update();
	        }
	             
		});
		
		
		$(".pro-gallery-swiper").on("click",".swiper-slide",function(){
	        var index=$(this).index();
			$(".show-product").attr("src",$(this).find(".thumbs-img").attr("src"));
			$(".pro-gallery-swiper .swiper-slide").removeClass("active");
	        $(this).addClass("active");
			
		});
		$(".pro-gallery-swiper .swiper-slide:first").click();
		
		
		
		var inside_type_swiper = new Swiper('.inside-type-swiper', {
            slidesPerView :'auto'
		});	
			
		var inside_size_swiper = new Swiper('.inside-size-swiper', {
	        slidesPerView :'auto'
		});	
		
		var product_swiper=new Swiper('.product-swiper', {
		    pagination: '.product-swiper-pagination',
	        paginationClickable: true,
	        spaceBetween: 30
		});
		
		var pro_gallery_swiper = new Swiper('.pro-gallery-swiper', {
		    slidesPerView: 6,
            spaceBetween: 20
		});
		
	
		