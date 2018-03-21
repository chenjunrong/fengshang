$(window).load(function(){
	
	$(".product-List").on("click","li .content .code-btn",function(){
        
        $(this).parent().siblings('a').find('.cover-code-img').fadeToggle();
		
	});
});