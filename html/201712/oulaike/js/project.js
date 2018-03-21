$(window).load(function(){

	$(".project-List").on("mouseenter","li",function(){
         $(this).find(".cover").css("display","block")
	});
	$(".project-List").on("mouseleave","li",function(){
         $(this).find(".cover").css("display","none")
	});
});


