$(function() {
  console.log('Hello Bootstrap5');
});

$(function() {
	var progLangSwiper = new Swiper(".progLangSwiper", {
		slidesPerView: "auto",
		spaceBetween: 8,
		centeredSlides: true,
		autoplay: {
			delay: 5000,
		},
		loop: true,
		breakpoints: {
			992: {
				spaceBetween: 16
			}
		}
	});
})

$(function() {
	var classesSwiper = new Swiper(".classesSwiper", {
		slidesPerView: "auto",
		spaceBetween: 16,
		centeredSlides: false,
	});
})

$(function() {
	var commentSwiper = new Swiper(".commentSwiper", {
		effect: 'fade',
		loop: true,
  	fadeEffect: {
    	crossFade: true
  	},
		pagination: {
			el: ".swiper-pagination",
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
})