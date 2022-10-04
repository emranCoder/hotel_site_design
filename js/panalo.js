var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  speed: 20000,
  spaceBetween: 10,
  slidesPerGroup: 2,
  loopedSlides: 2,
  preloadImages: false,
  loop: true,
  loopFillGroupWithBlank: true,
   autoplay: { 
     delay: 3000,
     disableOnInteraction: false,
   },
breakpoints: {
680: { 
 slidesPerView: 3,
  speed: 20000,
  slidesPerGroup: 2,
  loopedSlides: 3,
  spaceBetween: 20,
},
},

});


$(document).ready(function () {
	setTimeout(function () {
		$(".preloader").fadeOut(1000);

},500);


$(document).scroll(function () {
	
	var stratScroll = $(document).scrollTop();

	if (stratScroll > 650) {

		$(".about-img").addClass("abot-img-active");
	}
});

$(document).scroll(function () {
	
	var stratScroll = $(document).scrollTop();

	if (stratScroll > 200) {

		$(".sticky-navbar").css({
			"transform" : "translateY(0)",
		});
	}else if (stratScroll < 200){

		$(".sticky-navbar").css({
			"transform" : "translateY(-200%)",
		});
	}
});

$(".service-iteam").eq(1).click(function () {
	$(".service-iteam").eq(1).addClass("acitve-details2");
	$(".service-iteam").eq(0).removeClass("acitve-details");
	$(".service-iteam").eq(2).removeClass("acitve-details3");
	$(".service-iteam").eq(3).removeClass("acitve-details4");

// Details active service box

	$(".service-details").eq(1).addClass("service-box-active");
	$(".service-details").eq(0).removeClass("service-box-active");
	$(".service-details").eq(2).removeClass("service-box-active");
	$(".service-details").eq(3).removeClass("service-box-active");

});

$(".service-iteam").eq(0).click(function () {
	$(".service-iteam").eq(0).addClass("acitve-details");
	$(".service-iteam").eq(1).removeClass("acitve-details2");
	$(".service-iteam").eq(2).removeClass("acitve-details3");
	$(".service-iteam").eq(3).removeClass("acitve-details4");

	// Details active service box

	$(".service-details").eq(0).addClass("service-box-active");
	$(".service-details").eq(1).removeClass("service-box-active");
	$(".service-details").eq(2).removeClass("service-box-active");
	$(".service-details").eq(3).removeClass("service-box-active");
});

$(".service-iteam").eq(2).click(function () {
	$(".service-iteam").eq(2).addClass("acitve-details3");
	$(".service-iteam").eq(0).removeClass("acitve-details");
	$(".service-iteam").eq(1).removeClass("acitve-details2");
	$(".service-iteam").eq(3).removeClass("acitve-details4");

	// Details active service box

	$(".service-details").eq(2).addClass("service-box-active");
	$(".service-details").eq(0).removeClass("service-box-active");
	$(".service-details").eq(1).removeClass("service-box-active");
	$(".service-details").eq(3).removeClass("service-box-active");
});

$(".service-iteam").eq(3).click(function () {
	$(".service-iteam").eq(3).addClass("acitve-details4");
	$(".service-iteam").eq(1).removeClass("acitve-details2");
	$(".service-iteam").eq(2).removeClass("acitve-details3");
	$(".service-iteam").eq(0).removeClass("acitve-details");

	// Details active service box

	$(".service-details").eq(3).addClass("service-box-active");
	$(".service-details").eq(0).removeClass("service-box-active");
	$(".service-details").eq(2).removeClass("service-box-active");
	$(".service-details").eq(1).removeClass("service-box-active");
});

setInterval(function () {

if ($(".slider").eq(0).hasClass("active-slide")) {

	$(".slider").eq(2).addClass("active-slide2");
	$(".slider").eq(1).removeClass("active-slide2");
	$(".slider").eq(0).css("opacity","0").removeClass("active-slide");
	$(".slider").eq(1).addClass("active-slide");
	$(".round-btn").eq(0).removeClass("change-btn-color");
	$(".round-btn").eq(2).removeClass("change-btn-color");
	$(".round-btn").eq(1).addClass("change-btn-color");
}
else if ($(".slider").eq(1).hasClass("active-slide")) {
	$(".slider").eq(0).addClass("active-slide2");
	$(".slider").eq(2).removeClass("active-slide2");
	$(".slider").eq(1).removeClass("active-slide");
	$(".slider").eq(2).addClass("active-slide");
	$(".round-btn").eq(1).removeClass("change-btn-color");
	$(".round-btn").eq(0).removeClass("change-btn-color");
	$(".round-btn").eq(2).addClass("change-btn-color");
}
else if ($(".slider").eq(2).hasClass("active-slide")) {
	$(".slider").eq(1).addClass("active-slide2");
	$(".slider").eq(0).removeClass("active-slide2");
	$(".slider").eq(2).removeClass("active-slide");
	$(".slider").eq(0).addClass("active-slide");
	$(".round-btn").eq(2).removeClass("change-btn-color");
	$(".round-btn").eq(1).removeClass("change-btn-color");
	$(".round-btn").eq(0).addClass("change-btn-color");
}

},8000);

$(".round-btn").eq(0).click(function () {
	$(".round-btn").eq(1).removeClass("change-btn-color");
	$(".round-btn").eq(2).removeClass("change-btn-color");
	$(this).addClass("change-btn-color");

if ($(".slider").eq(0).hasClass("active-slide")) {

	$(".slider").eq(2).addClass("active-slide2");
	$(".slider").eq(1).removeClass("active-slide2");
	$(".slider").eq(0).css("opacity","0").removeClass("active-slide");
	$(".slider").eq(1).addClass("active-slide");

}
else if ($(".slider").eq(1).hasClass("active-slide")) {
	$(".slider").eq(0).addClass("active-slide2");
	$(".slider").eq(2).removeClass("active-slide2");
	$(".slider").eq(1).removeClass("active-slide");
	$(".slider").eq(2).addClass("active-slide");

}
else if ($(".slider").eq(2).hasClass("active-slide")) {
	$(".slider").eq(1).addClass("active-slide2");
	$(".slider").eq(0).removeClass("active-slide2");
	$(".slider").eq(2).removeClass("active-slide");
	$(".slider").eq(0).addClass("active-slide");

}
});
$(".round-btn").eq(1).click(function () {
	$(".round-btn").eq(0).removeClass("change-btn-color");
	$(".round-btn").eq(2).removeClass("change-btn-color");
	$(this).addClass("change-btn-color");

if ($(".slider").eq(0).hasClass("active-slide")) {

	$(".slider").eq(2).addClass("active-slide2");
	$(".slider").eq(1).removeClass("active-slide2");
	$(".slider").eq(0).css("opacity","0").removeClass("active-slide");
	$(".slider").eq(1).addClass("active-slide");

}
else if ($(".slider").eq(1).hasClass("active-slide")) {
	$(".slider").eq(0).addClass("active-slide2");
	$(".slider").eq(2).removeClass("active-slide2");
	$(".slider").eq(1).removeClass("active-slide");
	$(".slider").eq(2).addClass("active-slide");

}
else if ($(".slider").eq(2).hasClass("active-slide")) {
	$(".slider").eq(1).addClass("active-slide2");
	$(".slider").eq(0).removeClass("active-slide2");
	$(".slider").eq(2).removeClass("active-slide");
	$(".slider").eq(0).addClass("active-slide");

}
});
$(".round-btn").eq(2).click(function () {
	$(".round-btn").eq(0).removeClass("change-btn-color");
	$(".round-btn").eq(1).removeClass("change-btn-color");
	$(this).addClass("change-btn-color");

if ($(".slider").eq(0).hasClass("active-slide")) {

	$(".slider").eq(2).addClass("active-slide2");
	$(".slider").eq(1).removeClass("active-slide2");
	$(".slider").eq(0).css("opacity","0").removeClass("active-slide");
	$(".slider").eq(1).addClass("active-slide");

}
else if ($(".slider").eq(1).hasClass("active-slide")) {
	$(".slider").eq(0).addClass("active-slide2");
	$(".slider").eq(2).removeClass("active-slide2");
	$(".slider").eq(1).removeClass("active-slide");
	$(".slider").eq(2).addClass("active-slide");

}
else if ($(".slider").eq(2).hasClass("active-slide")) {
	$(".slider").eq(1).addClass("active-slide2");
	$(".slider").eq(0).removeClass("active-slide2");
	$(".slider").eq(2).removeClass("active-slide");
	$(".slider").eq(0).addClass("active-slide");
}
});



$(".nav-item").eq(1).click(function() {
	$(".nav-item").eq(1).addClass("current");
	$(".nav-item").eq(0).removeClass("current");
	$(".nav-item").eq(4).removeClass("current");
	$(".nav-item").eq(3).removeClass("current");

});

$(".nav-item").eq(0).click(function() {
	$(".nav-item").eq(0).addClass("current");
	$(".nav-item").eq(1).removeClass("current");
	$(".nav-item").eq(4).removeClass("current");
	$(".nav-item").eq(3).removeClass("current");

});

$(".nav-item").eq(4).click(function() {
	$(".nav-item").eq(4).addClass("current");
	$(".nav-item").eq(0).removeClass("current");
	$(".nav-item").eq(1).removeClass("current");
	$(".nav-item").eq(3).removeClass("current");

});

$(".nav-item").eq(3).click(function() {
	$(".nav-item").eq(3).addClass("current");
	$(".nav-item").eq(0).removeClass("current");
	$(".nav-item").eq(4).removeClass("current");
	$(".nav-item").eq(1).removeClass("current");

});


setInterval(function () {
	
	if ($(".room-dt-carusel").hasClass("slide-dt")) {
		
	$(".room-dt-carusel").addClass("slide-dt2");
	$(".room-dt-carusel").removeClass("slide-dt");

	}

else if ($(".room-dt-carusel").hasClass("slide-dt2")) {
		
	$(".room-dt-carusel").addClass("slide-dt");
	$(".room-dt-carusel").removeClass("slide-dt2");

	}

},5000);


});

