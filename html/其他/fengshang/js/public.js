
/*导航栏动画*/
$(window).load(function(){
	
   	$("#header .list li a").wrapInner( '<span class="out"></span>');
	$("#header .list li a").each(function() {	
		$( '<span class="over">' +  $(this).text() + '</span>' ).appendTo(this);
	});

	$("#header .list li a").hover(function() {
		
		if(!$(this).hasClass('active')){//判断是否为激活状态
		   $(".out",this).stop().animate({'top':'80px'},300); // move down - hide
		   $(".over",this).stop().animate({'top':'0px'},300); // move down - show
		}
		

	}, function() {
		if(!$(this).hasClass('active')){
			$(".out",this).stop().animate({'top':'0px'},300); // move up - show
			$(".over",this).stop().animate({'top':'-80px'},300); // move up - hide
		}
	});
	
 });