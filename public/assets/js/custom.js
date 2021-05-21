/**	
	* Version: 1.0
	* Template name: Apphoot - Responsive App Landing Page Template
	* Author: Farhadur Rahim (webmechanicx)
	* Author URI: https://themeforest.net/user/webmechanicx

	Custom JS
	
	01. Switch Logo between transparent and white BG 
	02. Sticky Header
	03. Navigation code for smooth scroll sections
	04. Header Slideshow or Hero Animation
	05. Platform Switcher
	06. Initiate WOW Effects
	07. Screenshots Carousel Setting
	08. Twitter Widget Setting
	09. Mailchip Subscriber Validation
	10. Preloader
	
**/

(function ($) {
    'use strict';
	
	var parentDom = $('html, body');
	
	// 01. Switch Logo between transparent and white BG 
	
	$(window).on( 'scroll', function(){
		var logoScroll = $('.logo-scroll');
		var logoDark = $('.logo-dark-scroll');
		
		if ($(this).scrollTop() > 100) {
			$(logoDark).show();
			$(logoScroll).hide();
		} else {
			$(logoScroll).show();
			$(logoDark).hide();
		}
	});
	
	// 02. Sticky Header

	$('#mainnav').affix({
		offset: {
		top: 100
		}
		
	});

	// 03. Navigation code for smooth scroll sections
	
	$('.page-scroll').on("click", function (event) {
       var $anchor = $(this);
		$(parentDom).stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top )
		}, 800, 'easeInOutExpo');
		event.preventDefault();
    });
  
	// 04. Header Slideshow or Hero Animation
	
	$("#word-rotating").Morphext({
		animation: "flipInX",
		separator: ",",
		speed: 2000,
		complete: function () {
			// Called after the entrance animation is executed.
		}
	});
	
	// For Slideshow Option
	
	var $owl = $('.owlslider');
		$owl.owlCarousel({
		items:1,
		loop: true,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true
	});
	
	$owl.on('translate.owl.carousel', function (event) {
		$('.owl-item .slide-item .slide-caption h2').removeClass('animated').hide();
		$('.owl-item .slide-item .slide-caption p').removeClass('animated').hide();
		$('.owl-item .slide-item .slide-caption .btn').removeClass('animated').hide();
	});
    
	$owl.on('translated.owl.carousel', function (event) {
		$('.owl-item.active .slide-item .slide-caption h2').addClass('animated fadeInUp').show();
		setTimeout(function () {
			$('.owl-item.active .slide-item .slide-caption p').addClass('animated fadeInUp').show();}, 1000
		);
		setTimeout(function () {
			$('.owl-item.active .slide-item .slide-caption .btn').addClass('animated fadeInUp').show();}, 1500
		);
	});
	
	// 05. Platform Switcher
	
	var mediaList = $(".medium-list ul");
	
	$(mediaList).on("mouseover", "li", function (event) {
		$(mediaList).find("li").removeClass("active");
		$(this).addClass("active");
	});
	
	
	// 06. Initiate WOW Effects
		
	new WOW().init();
	
	
	//07. Screenshots Carousel Setting
	
	var owl = $("#slide-screen");

    owl.owlCarousel({
		items: 5,
		loop: true,
		smartSpeed:450,
		nav: true,
		navText: ['<i class="fa fa-arrow-left">','<i class="fa fa-arrow-right">'],
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 2
			},
			767: {
				items: 4
			},
			992: {
				items: 5
			}
		}
    });

	// 08. Twitter Settings
	
	$("#twit-fetcher-container").twitterFetcher({
		widgetid: '828995263796695040',
        maxTweets: 2,
        enablePermalink: true
    });

	// 09. Mailchip Subscriber Validation

	$("#mc-form").validator();

	// 10. Preloader 
	
	$(window).on('load', function () {
		$(".square-block").fadeOut();
		$('#preload-block').fadeOut('slow', function () {
			$(this).remove();
		});
	});

})(jQuery);