$(window).load(function(){

	$('#case .box1 .tabbar .swiper-wrapper').on('click','.swiper-slide',function(){
		   swiper2.slideTo($(this).index(), 1000, false); //切换slide，速度为1秒
		   $("#case .box1 .tabbar .swiper-slide").removeClass('active');  
		   $(this).addClass('active');                         //当前激活状态       
	 });
	 			 		 
});

var sliderView=$("#case .box1 .tabbar .swiper1 .swiper-slide").length>3?3.5:$("#case .box1 .tabbar .swiper1 .swiper-slide").length;
var swiper1 = new Swiper('.swiper1', {
    paginationClickable: true,
    spaceBetween: 0,
    slidesPerView: sliderView
});  
var swiper2 = new Swiper('.swiper2', {
    paginationClickable: true,
    spaceBetween: 0,
    onSlideChangeStart: function(swiper){
        swiper1.slideTo(swiper2.activeIndex, 1000, false);
        var index=swiper2.activeIndex+1;
       	$("#case .box1 .tabbar .swiper-slide").removeClass('active');  
		$("#case .box1 .tabbar .swiper-slide:nth-child("+index+")").addClass('active');                         //当前激活状态 
	}
});