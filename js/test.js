	$(function() {
			$("#form-test").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".thanks").addClass('visible');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".thanks").removeClass('visible');
			}, 10000);
		});
		return false;
	});
			$("form").find("select").val("");
	});