const swiper = new Swiper(".registration-swiper", {
	initialSlide: 0,
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			loop: true,
		},
		540: {
			slidesPerView: 2,
			loop: true,
		},
		700: {
			slidesPerView: 3,
			loop: true,
		},
		1100: {
			slidesPerView: 4,
			loop: true,
		},
		1200: {
			slidesPerView: 6,
			loop: false,
		},
	},
})
