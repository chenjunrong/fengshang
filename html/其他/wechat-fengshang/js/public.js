$(window).load(function(){
	autoMenuHeight();
	
	$("#header .title span").click(function(){
		location.href="index.html";
	});
	$("#header .menuIcon").click(function(){
		$("#header .menu").fadeIn();
		$("#header .menu").on('touchmove',function(e){
               return false;
        })
	});
	$("#header .closeIcon").click(function(){
		$("#header .menu").fadeOut();
	});
});


function autoMenuHeight(){
	var winHeight=$(window).height();	
	$("#header .menu").height(winHeight);
};