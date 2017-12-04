/*
Theme Name: Blum
Description: Coming Soon
Author: Erilisdesign
Theme URI: http://erilisdesign.com/preview/themeforest/html/blum/
Author URI: http://themeforest.net/user/erilisdesign
Version: 2.2
*/

(function($) {
	"use strict";

	// vars
	var body = $('body'),
		preloader = $('#preloader'),
		preloaderDelay = 350,
		preloaderFadeOutTime = 800;
	
	// BOOTSTRAP FIX FOR WINPHONE 8 AND IE10
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement('style');
		msViewportStyle.appendChild(
			document.createTextNode(
				'@-ms-viewport{width:auto!important}'
			)
		);
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
	}

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		body.addClass('mobile');
	}

	function detectIE() {
		if (navigator.userAgent.indexOf('MSIE') != -1)
			var detectIEregexp = /MSIE (\d+\.\d+);/ // test for MSIE x.x
		else // if no "MSIE" string in userAgent
			var detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/ // test for rv:x.x or rv x.x where Trident string exists

		if (detectIEregexp.test(navigator.userAgent)){ // if some form of IE
			var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
			if (ieversion >= 9) {
				return true;
			}
		}
		return false;
	}

	function getWindowWidth() {
		return Math.max( $(window).width(), window.innerWidth);
	}

	function getWindowHeight() {
		return Math.max( $(window).height(), window.innerHeight);
	}
	
	function isTouchSupported() {
		var msTouchEnabled = window.navigator.msMaxTouchPoints;
		var generalTouchEnabled = "ontouchstart" in document;
		if (msTouchEnabled || generalTouchEnabled) {
			return true;
		}
		return false;
	}


	// Preloader
	function initPreloader() {
		preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
	}
	
	
	// Animations
	function initAnimations() {
		if( !body.hasClass('mobile') ) {
			if( detectIE() ) {
				$('.animated').css({
					'display':'block',
					'visibility': 'visible'
				});
			} else {
				/* Starting Animation on Load */
				$(window).load(function() {
					$('.onstart').each( function() {
						var elem = $(this);
						if ( !elem.hasClass('visible') ) {
							var animationDelay = elem.data('animation-delay');
							var animation = elem.data('animation');
							if ( animationDelay ) {
								setTimeout(function(){
									elem.addClass( animation + " visible" );
								}, animationDelay);
							} else {
								elem.addClass( animation + " visible" );
							}
						}
					});
				});
			}
		}
	}
	
	
	// Background
	function initPageBackground() {

		// Slideshow Background
		if(body.hasClass('slideshow-background')) {
			$('.slideshow-background').vegas({
				preload: true,
				timer: false,
				delay: 5000,
				transition: 'fade',
				transitionDuration: 1000,
				slides: [
					{ src: 'demo/images/image-12.jpg' },
					{ src: 'demo/images/image-1.jpg' },
					{ src: 'demo/images/image-11.jpg' }
				]
			});
		}

		// Slideshow & Video Background
		if(body.hasClass('slideshow-video-background')) {
			$('.slideshow-video-background').vegas({
				preload: true,
				timer: false,
				delay: 5000,
				transition: 'fade',
				transitionDuration: 1000,
				slides: [
					{ src: 'demo/images/image-12.jpg' },
					{ src: 'demo/video/video.jpg',
						video: {
							src: [
								'demo/video/video.mp4',
								'demo/video/video.webm',
								'demo/video/video.ogv'
							],
							loop: false,
							mute: true
						}
					},
					{ src: 'demo/images/image-1.jpg' },
					{ src: 'demo/images/image-11.jpg' }
				]
			});
		}

		// Kenburns Background
		if(body.hasClass('kenburns-background')) {
			var kenburnsDisplayBackdrops = false;
			var kenburnsBackgrounds = [
				{ src: 'demo/images/image-12.jpg', valign: 'top' },
				{ src: 'demo/images/image-1.jpg', valign: 'top' },
				{ src: 'demo/images/image-11.jpg', valign: 'top' }
			];

			$('.kenburns-background').vegas({
				preload: true,
				transition: 'swirlLeft2',
				transitionDuration: 4000,
				timer: false,
				delay: 10000,
				slides: kenburnsBackgrounds,
				walk: function (nb) {
					if (kenburnsDisplayBackdrops === true) {
						var backdrop;

						backdrop = backdrops[nb];
						backdrop.animation  = 'kenburns';
						backdrop.animationDuration = 20000;
						backdrop.transition = 'fade';
						backdrop.transitionDuration = 1000;

						body
							.vegas('options', 'slides', [ backdrop ])
							.vegas('next');
					}
				}
			});
		}

		// Youtube Video Background
		if(body.hasClass('youtube-background')) {
			$('.player').each(function() {
				$('.player').mb_YTPlayer();
			});
		}
		
		// Youtube Multiple Videos Background
		if(body.hasClass('youtube-multiple-background')) {
			
			var videos = [
				{videoURL: "0pXYp72dwl0", showControls:false, containment:'.overlay-video',autoPlay:true, mute:true, startAt:0,opacity:1, loop:false, ratio:"4/3", showYTLogo:false, realfullscreen: true, addRaster:true},
				{videoURL: "9d8wWcJLnFI", showControls:false, containment:'.overlay-video',autoPlay:true, mute:true, startAt:0,opacity:1, loop:false, ratio:"4/3", showYTLogo:false, realfullscreen: true, addRaster:false},
				{videoURL: "nam90gorcPs", showControls:false, containment:'.overlay-video',autoPlay:true, mute:true, startAt:0,opacity:1, loop:false, ratio:"4/3", showYTLogo:false, realfullscreen: true, addRaster:true}
			];

			$('.player').YTPlaylist(videos, true);
			
		}
		
		// PARALLAX BACKGROUND
		if(body.hasClass('parallax-background')) {
			
			$.parallaxify({
				positionProperty: 'transform',
				responsive: true,
				motionType: 'natural',
				mouseMotionType: 'performance',
				motionAngleX: 70,
				motionAngleY: 70,
				alphaFilter: 0.5,
				adjustBasePosition: true,
				alphaPosition: 0.025,
			});
			
		}
		
		// ANIMATED GRADIENT BACKGROUND
		if(body.hasClass('animated-gradient')) {
			animatedGradient();
		}
		
	}
	
	
	// Animated Gradient
	function animatedGradient() {
		var colors = new Array(
			[62,35,255],
			[60,255,60],
			[255,35,98],
			[45,175,230],
			[255,0,255],
			[255,128,0]);

		var step = 0;
		//color table indices for: 
		// current color left
		// next color left
		// current color right
		// next color right
		var colorIndices = [0,1,2,3];

		//transition speed
		var gradientSpeed = 0.002;

		function updateGradient() {
		  
			if ( $===undefined ) return;
		  
			var c0_0 = colors[colorIndices[0]];
			var c0_1 = colors[colorIndices[1]];
			var c1_0 = colors[colorIndices[2]];
			var c1_1 = colors[colorIndices[3]];

			var istep = 1 - step;
			var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
			var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
			var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
			var color1 = "rgb("+r1+","+g1+","+b1+")";

			var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
			var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
			var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
			var color2 = "rgb("+r2+","+g2+","+b2+")";

			$('#gradient')
				.css({background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"})
				.css({background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
			  
			step += gradientSpeed;
			if ( step >= 1 ) {
				step %= 1;
				colorIndices[0] = colorIndices[1];
				colorIndices[2] = colorIndices[3];
				
				//pick two new target color indices
				//do not pick the same as the current one
				colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
				colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
			}
		}
		setInterval(updateGradient,10);
	}
	
	
	// Plugins
	function initPlugins() {
		
		// Nice Scroll
		$("html").niceScroll({
			cursorcolor: '#fff',
			cursoropacitymin: '0',
			cursoropacitymax: '1',
			cursorwidth: '3px',
			zindex: 10000,
			horizrailenabled: false,
			enablekeyboard: false,
		});
		
		// Fitvids
		$(".video-container").fitVids();
		
		// Countdown
		if ($('.countdown[data-countdown]').length) {			
			$('.countdown[data-countdown]').each(function() {
				var $this = $(this),
					finalDate = $(this).data('countdown');
				$this.countdown(finalDate, function(event) {
					$this.html(event.strftime(
						'<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div><div class="counter-box"><div class="number">%H</div><span>Hours</span></div><div class="counter-box"><div class="number">%M</div><span>Minutes</span></div><div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
					));
				});
			});
		}
		
		// Placeholder
		$('input, textarea').placeholder();
		
	}
	
	// PageLayout
	function initPageLayout() {
		function setSectionHeight() {
			var navigationHeight = $(".site-nav").height();
			var section = $('section');
			var windowHeight = getWindowHeight();
				
			if ( section.hasClass('fullscreen') ) {
				$('section.fullscreen').css( 'min-height', windowHeight );
			}
		}
		
		function setPageWidth() {
			var pageWidth = body.width();
			
			$('.page-container').css('width', pageWidth);
		}
		
		setSectionHeight();
		setPageWidth();
		
	}
		
	// Navigation
	function initNavigation() {
		
		$('.nav-toggle').on('click', function(event) {
			var navToggle = $('.nav-toggle');
			var navigation = $('.site-nav');

			navToggle.toggleClass('active');
			navigation.toggleClass('active');
		});

        /*
		$("#my-carousel").owlCarousel({
            items: 5,
			singleItem: false,
			
			//Basic Speeds
			slideSpeed : 700,
			paginationSpeed : 700,
			rewindSpeed : 700,
			
			lazyEffect:	'fade',
			
			// Navigation
			navigation : false,
			
			//Pagination
			pagination : true,
			paginationNumbers: true,
			
			//Auto height
			autoHeight : false,
			
			mouseDrag: false,
			touchDrag: false,
			
			addClassActive: true,
			
		});
        */

		//var appTour = $(".owl-carousel").data('owlCarousel');
        var appTour = $('#owl-wrapper');
		
        /*
		$('.site-nav a').click(function(){
			var elem = $(this);
			var goToSlide = elem.data('slide') - 1;
			
			if (elem.hasClass('active')) {
			
			} else {
				$('.site-nav a').removeClass('active');
				elem.addClass('active');
				
				appTour.carousel(goToSlide);
				
				if( !body.hasClass('mobile') ) {
					if( detectIE() ) {
						$('.animated').css({
							'display':'block',
							'visibility': 'visible'
						});
					} else {
						if($('.owl-item').hasClass('active')) {
							setTimeout(function(){
								$('.owl-item .animated').each( function() {
									var elem = $(this);
									var animation = elem.data('animation');
									elem.removeClass( animation + " visible" );
								});
							}, 700);
							$('.active').find('.animated').each( function() {
								var elem = $(this);
								var animation = elem.data('animation');
								if ( !elem.hasClass('visible') ) {
									var animationDelay = elem.data('animation-delay');
									if ( animationDelay ) {
										setTimeout(function(){
											elem.addClass( animation + " visible" );
										}, animationDelay);
									} else {
										elem.addClass( animation + " visible" );
									}
								}
							});
						}
					}
				}
			}
		});
		
		$('a.go-slide').click(function(){
			var elem = $(this);
			var goToSlide = elem.data('slide') - 1;
			var navSlideNumber = elem.data('slide');
			
			$('.site-nav a').removeClass('active');
			if ($('.site-nav a[data-slide-to='+ navSlideNumber +']')) {
				$('.site-nav a[data-slide-to='+ navSlideNumber +']').addClass('active');
			}
			
			appTour.carousel(goToSlide);
			
			if( !body.hasClass('mobile') ) {
				if( detectIE() ) {
					$('.animated').css({
						'display':'block',
						'visibility': 'visible'
					});
				} else {
					if($('.owl-item').hasClass('active')) {
						setTimeout(function(){
							$('.owl-item .animated').each( function() {
								var elem = $(this);
								var animation = elem.data('animation');
								elem.removeClass( animation + " visible" );
							});
						}, 600);
						$('.active').find('.animated').each( function() {
							var elem = $(this);
							var animation = elem.data('animation');
							if ( !elem.hasClass('visible') ) {
								var animationDelay = elem.data('animation-delay');
								if ( animationDelay ) {
									setTimeout(function(){
										elem.addClass( animation + " visible" );
									}, animationDelay);
								} else {
									elem.addClass( animation + " visible" );
								}
							}
						});
					}
				}
			}
			
		});
		
		$(document).keydown(function(e) {
			if(e.keyCode == 37 || e.keyCode == 40) { // left
				appTour.carousel("prev");
				
				var currentSlide = $('div.active').index() + 1;
				$('.site-nav a').removeClass('active');
				$('[data-slide-to='+ currentSlide +']').addClass('active');
				
				if( !body.hasClass('mobile') ) {
					if( detectIE() ) {
						$('.animated').css({
							'display':'block',
							'visibility': 'visible'
						});
					} else {
						if($('.owl-item').hasClass('active')) {
							setTimeout(function(){
								$('.owl-item .animated').each( function() {
									var elem = $(this);
									var animation = elem.data('animation');
									elem.removeClass( animation + " visible" );
								});
							}, 600);
							$('.active').find('.animated').each( function() {
								var elem = $(this);
								var animation = elem.data('animation');
								if ( !elem.hasClass('visible') ) {
									var animationDelay = elem.data('animation-delay');
									if ( animationDelay ) {
										setTimeout(function(){
											elem.addClass( animation + " visible" );
										}, animationDelay);
									} else {
										elem.addClass( animation + " visible" );
									}
								}
							});
						}
					}
				}
			}
			else if(e.keyCode == 39 || e.keyCode == 38) { // right
				appTour.carousel("next");
				
				var currentSlide = $('div.active').index() + 1;
				$('.site-nav a').removeClass('active');
				$('[data-slide-to='+ currentSlide +']').addClass('active');
				if( !body.hasClass('mobile') ) {
					if( detectIE() ) {
						$('.animated').css({
							'display':'block',
							'visibility': 'visible'
						});
					} else {
						if($('.owl-item').hasClass('active')) {
							setTimeout(function(){
								$('.owl-item .animated').each( function() {
									var elem = $(this);
									var animation = elem.data('animation');
									elem.removeClass( animation + " visible" );
								});
							}, 600);
							$('.active').find('.animated').each( function() {
								var elem = $(this);
								var animation = elem.data('animation');
								if ( !elem.hasClass('visible') ) {
									var animationDelay = elem.data('animation-delay');
									if ( animationDelay ) {
										setTimeout(function(){
											elem.addClass( animation + " visible" );
										}, animationDelay);
									} else {
										elem.addClass( animation + " visible" );
									}
								}
							});
						}
					}
				}
			}
		});
        */
	}
	
	function mobileNav() {
		if ( 767 >= getWindowWidth() || body.hasClass('mobile')) {
			$('.navbar a').on('click', function(event) {
				if(!$('.navbar-toggle').hasClass('collapsed')){
					$('.navbar-toggle').trigger('click');
				}
			});
		}
	}
	
	
	// Mailchimp
	function initMailchimp() {
		$('.mailchimp-form').ajaxChimp({
			callback: mailchimpCallback,
			url: "//bluminethemes.us9.list-manage.com/subscribe/post?u=dae5eaf00c5b131b0e3561c00&amp;id=9809da9e33" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
		});

		function mailchimpCallback(resp) {
			 if (resp.result === 'success') {
				$('.success-message').html(resp.msg).fadeIn(1000);
				$('.error-message').fadeOut(500);		
			} else if(resp.result === 'error') {
				$('.error-message').html(resp.msg).fadeIn(1000);
			}  
		}

		$('#email').focus(function(){
			$('.error-message').fadeOut();
			$('.success-message').fadeOut();
		});

		$('#email').on('keydown', function(){
			$('.error-message').fadeOut();
			$('.success-message').fadeOut();
		});

		$("#email").on('click', function() {
			$("#email").val('');
		});
	}
	
	
	// Contact Form
	function initContactForm() {

		var scrollElement = $('html,body'),
			contactForm = $('.contact-form');

		contactForm.on('submit', function() {

			var requiredFields = $(this).find('.required'),
				formData = contactForm.serialize(),
				formAction = $(this).attr('action'),
				formSubmitMessage = $('.response-message');

			requiredFields.each(function() {

				if( $(this).val() == "" ) {

					$(this).addClass('input-error');

				} else {

					$(this).removeClass('input-error');
				}

			});

			function validateEmail(email) { 
				var exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return exp.test(email);
			}

			var emailField = $('.contact-form-email');

			if( !validateEmail(emailField.val()) ) {

				emailField.addClass("input-error");

			}

			if ($(".contact-form :input").hasClass("input-error")) {
				return false;
			} else {

				$.post(formAction, formData, function(data) {
					formSubmitMessage.text(data);

					requiredFields.val("");

					setTimeout(function() {
						formSubmitMessage.slideUp();
					}, 5000);
				});

			}

			return false;

		});

	}
	
	
	// WINDOW.LOAD FUNCTION
	$(window).load(function() {		
		initPreloader();
	});
	
	// DOCUMENT.READY FUNCTION
	jQuery(document).ready(function($) {
		initPageLayout()
		initAnimations();	
		initPageBackground();
		initNavigation();
		mobileNav();
		initPlugins();
		initMailchimp();
		initContactForm();
	});
	
	// WINDOW.RESIZE FUNCTION
	$(window).on('resize', function () {
		initAnimations();
		initPageLayout()
		mobileNav();
	});


})(jQuery);
