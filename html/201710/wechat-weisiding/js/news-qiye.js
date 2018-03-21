$(window).load(function(){

		$('.my-prev').click(function(){
			 prospecSwiper.slidePrev();
		});
				
	    $('.my-next').click(function(){	
			prospecSwiper.slideNext();
		});
});





var prospecSwiper = new Swiper('.news-qiye-swiper', {
        pagination : '.swiper-pagination',
		paginationType : 'custom',
		paginationCustomRender: function (swiper, current, total) {
	      return '<span class="my-page">'+current+'/'+total+'</span>';
	   },
	   spaceBetween: 30
   });	