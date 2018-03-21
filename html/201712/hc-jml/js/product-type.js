var product_type_Swiper = new Swiper('.product-type-swiper', {
        slidesPerView: 1.3,
        centeredSlides: true,
        paginationClickable: true,
        loop:true,
        spaceBetween: -15,
        autoplay:3000,
        pagination: '.product-type-pagination',
	    paginationType : 'fraction',
	    paginationFractionRender: function (swiper, currentClassName, totalClassName) {
	      return '<div class="product-type-page"><span class="' + currentClassName + '"></span>' +
	             ' / ' +
	             '<span class="' + totalClassName + '"></span></div>';
	    }
    });