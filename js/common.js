$(function() {

		$(".toggle-mnu").click(function() {
			$(this).toggleClass("on");
				if ($(".header-menu-toggle").is(":visible")) {
					$(".header-menu-toggle").fadeOut(300);
				} else {
					$(".header-menu-toggle").fadeIn(300);
				};
			});

		$(".header-menu-toggle a").click(function() {
					$(".header-menu-toggle").fadeOut(300);
					$(".toggle-mnu").toggleClass("on");
			});


	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#form-start,#form-1,#form-2,#form-3,#form-page").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо. Ваша заявка принята. Сейчас Вы будете перенаправлены на страницу с тестом.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$.magnificPopup.close();
				window.location.href = "/test.html";
			}, 1000);
		});
		return false;
	});

	$("#form-present-1,#form-present-2,#form-present-3,#form-call,#form-call-2,#form-page-quest").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".thanks-2").addClass('visible');
			setTimeout(function() {
				th.trigger("reset");
				$.magnificPopup.close();
				$(".thanks-2").addClass('visible');
			}, 1000);
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".thanks-2").removeClass('visible');
			}, 10000);
		});
		return false;
	});


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });



	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});


	$('.maps').click(function () {
		$('.maps iframe').css("pointer-events", "auto");
	});


$("#back-top").hide();
// $(".top_nav_wrap").hide();


			$(window).scroll(function () {
				if ($(this).scrollTop() > 50) {
					$('#back-top').fadeIn();
					$('#top_nav_wrap').fadeIn(100);
				} else {
					$('#back-top').fadeOut();
					$('#top_nav_wrap').fadeOut(100);
				}
			});




			$(".mor").click(function() {
				$(".more").slideToggle();
					return false;
			});

			$(".garant").click(function() {
				$(".garant-txt").slideToggle();
					return false;
			});

			$(".garant1").click(function() {
				$(".garant-txt1").slideToggle();
					return false;
			});

			$(".garant2").click(function() {
				$(".garant-txt2").slideToggle();
					return false;
			});

			$("a.button-top, a.button-green, a.button-red, a.button-white").magnificPopup();

			$("a[href*='#']").mPageScroll2id({
				highlightSelector:".top_nav a"
			});

});
