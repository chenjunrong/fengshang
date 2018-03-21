$(window).load(function(){
	
	$(".product-dls-List").on("click","li .content .code-btn",function(){       
        $(this).parent().siblings('a').find('.cover-code-img').fadeToggle();	
	});
});