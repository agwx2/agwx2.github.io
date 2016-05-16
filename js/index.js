function initBG() {
	_('bodyBG2').style.opacity = 0;
	_('bodyBG3').style.opacity = 0;
	//_('bodyBG1').style.backgroundImage = "url('./img/IMG_8312-n2.jpg')";
}

function initSize() {
	//_('mainCT').style.width = window.innerWidth;
}

function setEvents() {
	$("#menuLogoTD").hover(function() {
		_("menuLogoTD").style.opacity = 1;
	}, function() {
		_("menuLogoTD").style.opacity = 0.7;
	});
	$("#menuIconTD").hover(function() {
		_("menuIconTD").style.opacity = 1;
	}, function() {
		_("menuIconTD").style.opacity = 0.7;
	});
	$("#vDown1").hover(function() {
		_("vDown1").style.opacity = 1;
		_("vDown1").style.backgroundColor = 'rgba(256, 256, 256, 0.1)';
		_("vDown1").style.boxShadow = '0 0 10px 6px rgba(190, 190, 190, 0.2)';
		_("vDown1").style.animation = 'pulse 1s ease infinite';
	}, function() {
		_("vDown1").style.opacity = 0.9;
		_("vDown1").style.backgroundColor = 'rgba(256, 256, 256, 0.1)';
		_("vDown1").style.boxShadow = '0 0 6px 6px rgba(0, 0, 0, 0)';
		_("vDown1").style.animation = 'none';
	});
	$("#vDown1").click(function() {
		$('body').animate({
			scrollTop: ($('#vDown1').offset().top + 10),
		}, 1200, 'easeInOutExpo');
	});
	$("#vDown2").hover(function() {
		_("vDown2").style.opacity = 1;
		_("vDown2").style.backgroundColor = 'rgba(256, 256, 256, 0.15)';
		_("vDown2").style.animation = 'pulse 1s ease infinite';
	}, function() {
		_("vDown2").style.opacity = 0.8;
		_("vDown2").style.backgroundColor = 'rgba(256, 256, 256, 0.125)';
		_("vDown2").style.animation = 'none';
	});
	$("#vDown2").click(function() {
		$('body').animate({
			scrollTop: ($('#3spacer1').offset().top + 5),
		}, 1200, 'easeInOutExpo');
	});
	$("#menuLogoTD").click(function() {
		$('body').animate({
			scrollTop: $("#main").offset().top,
		}, 1200, 'easeInOutExpo');
	});
	$(window).scroll(function() {
		if ($(window).scrollTop() > 5) _("menuBG").style.opacity = 0.6;
		else _("menuBG").style.opacity = 0;
		if ($(window).scrollTop() > 20) _("menuTableContainer").style.height = "72%";
		else _("menuTableContainer").style.height = "95%";
		
		if ($(window).scrollTop() > 15) _("aboutMeTable").style.opacity = 1;
		else _("aboutMeTable").style.opacity = 0;
		
		if ($(window).scrollTop() < $('#mainText1').offset().top) {
			if (_('bodyBG1').style.opacity == 0) {
				_('bodyBG1').style.opacity = 1;
				_('bodyBG2').style.opacity = 0;
				_('bodyBG3').style.opacity = 0;
			}
		}
		else if ($(window).scrollTop() < $('#2spacer2').offset().top) {
			if (_('bodyBG2').style.opacity == 0) {
				_('bodyBG1').style.opacity = 0;
				_('bodyBG2').style.opacity = 1;
				_('bodyBG3').style.opacity = 0;
			}
		}
		else if ($(window).scrollTop() < $('#6').offset().top) {
			if (_('bodyBG3').style.opacity == 0) {
				_('bodyBG1').style.opacity = 0;
				_('bodyBG2').style.opacity = 0;
				_('bodyBG3').style.opacity = 1;
			}
		}
	});
}

function loadPage() {
	initSize();
	initBG();
	resizePage();
	setEvents();
	setTimeout(function () {
		_("mainCT").style.opacity = 1;
		_("menuLogoTD").style.opacity = 0.7;
		_("menuIconTD").style.opacity = 0.7;
	}, 200);
}

function resizePage() {
	$('bodyBG1').replaceWith('<div id = "bodyBG1" class = "bodyBG"></div>');
	$('bodyBG2').replaceWith('<div id = "bodyBG2" class = "bodyBG"></div>');
	$('bodyBG3').replaceWith('<div id = "bodyBG3" class = "bodyBG"></div>');
	initSize();
	initBG();
}

$(window).on("orientationchange", resizePage);
$(window).resize(resizePage);
$(document).ready(loadPage);