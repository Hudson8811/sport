$(document).ready(function(){

    // POP-UP

    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    //Календарь на главной
    var holidays = [
	[1,1],
	[7,1],
	[23,2],
	[8,3],
	[1,5],
	[9,5],
	[12,6],
	[4,11]
];

$(function(){
	$("#datepicker").datepicker({
        closeText: "Done",
	prevText: "PREVIOUS",
	nextText: "NEXT",
	currentText: "Today",
	monthNames: [ "January","February","March","April","May","June",
	"July","August","September","October","November","December" ],
	monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
	"Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
	dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
	dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
	dayNamesMin: [ "Su","Mo","Tu","We","Th","Fr","Sa" ],
	weekHeader: "Wk",
        
		beforeShowDay: function(date){
			for (var i = 0; i < holidays.length; i++) {
				if (holidays[i][0] == date.getDate() && holidays[i][1] - 1 == date.getMonth()) {
					return [false];
				}
			}
			return [true];
		}
    });
  
});

$(function(){
	$(".datepicker").datepicker("option", "numberOfMonths");
  $( ".racing_calendar" ).datepicker({ numberOfMonths: [2, 1],
    closeText: "Done",

	currentText: "Today",
	monthNames: [ "January","February","March","April","May","June",
	"July","August","September","October","November","December" ],
	monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
	"Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
	dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
	dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
	dayNamesMin: [ "Su","Mo","Tu","We","Th","Fr","Sa" ],
	weekHeader: "Wk",
});
});

    // ANNOUNCEMENTS SLIDER


    var owl = $(".home-announcements-slider");

    owl.owlCarousel({
      	items:1,
        nav:false,
        margin:15,
        dots:true,
        pagination: true,
        dotsContainer:'#announcements-dots',
        dotsEach: true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
        }
    });

    $('.dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });


    // PHOTO SLIDER

    var photo_owl = $('.home-photo-slider');

    photo_owl.owlCarousel({
        items:2,
        nav:false,
        margin:30,
        dots:false,
        loop:true,
        responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
        }
    });

    $('.home-photo-slider-nav').click(function() {
    photo_owl.trigger('next.owl.carousel');
    });

    $('.home-photo-slider-mobile').slick({
        vertical: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        arrows: true,
        prevArrow: $('.home-photo-slider-wrap-mobile .home-photo-slider-nav-prev'),
        nextArrow: $('.home-photo-slider-wrap-mobile .home-photo-slider-nav')
    });


    // NEWS SLIDER

    var news_owl = $(".home-news-slider");

    news_owl.owlCarousel({
        items:1,
        nav:false,
        margin:15,
        dots:true,
        pagination: true,
        dotsContainer:'#news-dots',
        dotsEach: true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
        }
    });

    $('.dot').click(function () {
        news_owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });


    // PROMOTION SLIDER

    var promo_owl = $('.home-promotion-slider');

    promo_owl.owlCarousel({
        items:3,
        nav:false,
        margin:20,
        dots:false,
        loop:true,
        responsive:{
        0:{
            items:1,
            dots: true
        },
        600:{
            items:1,
            dots: true
        },
        1000:{
            items:3
        }
        }
    });

    $('.home-promo-next').click(function() {
        promo_owl.trigger('next.owl.carousel');
    });

    $('.home-promo-prev').click(function() {
        promo_owl.trigger('prev.owl.carousel');
    });

    // HOME-ABOUT

    var about_owl = $(".home-about-slider");

    about_owl.owlCarousel({
        items:1,
        nav:false,
        margin:15,
        dots:true,
        pagination: true,
        dotsContainer:'#about-dots',
        dotsEach: true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
        }
    });

    $('.dot').click(function () {
        about_owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    // GALLERY

    $(function(){
      $('.home-gallery-photo-item').click(function(event) {
        var i_path = $(this).children('.photo').attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');

        $('#overlay, #magnify').fadeIn('fast');
      });

      $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();

        $('#overlay, #magnify').fadeOut('fast', function() {
          $('#close-popup, #magnify, #overlay').remove();
        });
      });
    });


    // RACING-CARD

    var racing_owl = $(".racing-card-slider");

    racing_owl.owlCarousel({
        items:1,
        nav:false,
        margin:15,
        dots:true,
        pagination: true,
        dotsContainer:'#racing-card-dots',
        dotsEach: true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
        }
    });

    $('.dot').click(function () {
        racing_owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    $('.date-item ul li a').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data');
        var content = $(".racing-item-content[data='" + id + "']");
        content.addClass('active');
    });

    $('.racing-item-content-head .close').click(function(e) {
        e.preventDefault();
        $(".racing-item-content").removeClass('active');
    });

    $('.racing-item-content .img-block').click(function(event) {
        var path = $(this).children('.img-bg').attr('src');
        $('.img-scale-block img').attr('src', path);
    });

    // ABOUT-HISTORY

    var about_owl = $(".about-history-slider");

    about_owl.owlCarousel({
        items:1,
        nav:false,
        margin:15,
        dots:true,
        pagination: true,
        dotsContainer:'#about-history-dots',
        dotsEach: true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
        }
    });

    $('.about-history .slider-nav-link a').click(function(e) {
        e.preventDefault();
        about_owl.trigger('next.owl.carousel');
    });

    $('.dot').click(function () {
        racing_owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });



    $('.about-history-menu li a').click(function(e) {
        e.preventDefault();
        $('.about-history-menu li').removeClass('active');
        $(this).parent('li').addClass('active');
        var data = $(this).attr('data');
        var content = $(".about-history-tab[data='" + data + "']");
        $('.about-history-tab').removeClass('active');
        content.addClass('active');
    });

    // ABOUT-CLUBS

    $('.about-clubs-menu li a').click(function(e) {
        e.preventDefault();
        $(this).parent().parent().find('li').removeClass('active');
        $(this).parent().addClass('active');
        var data = $(this).attr('data');
        var content = $(".about-clubs-tab[data='" + data + "']");
        $('.about-clubs-tab').removeClass('active');
        content.addClass('active');
    });

    $('.about-clus-tab-link').click(function(e) {
        e.preventDefault();
        $('.clubs-modal').addClass('active');
    });

    $('.clubs-modal .close-btn').click(function(e) {
        e.preventDefault();
        $('.clubs-modal').removeClass('active');
    });

    var clubs_owl = $(".about-clubs-slider");

    clubs_owl.owlCarousel({
        items:1,
        nav:false,
        margin:15,
        dots:true,
        pagination: true,
        dotsContainer:'#about-clubs-dots',
        dotsEach: true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
        }
    });

    $('.dot').click(function () {
        clubs_owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });


    // FACILITIES

    var fb_owl = $(".fac-fb-slider");

    fb_owl.owlCarousel({
        items:1,
        nav:false,
        margin:15,
        dots:true,
        pagination: true,
        dotsContainer:'#fb-dots',
        dotsEach: true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
        }
    });

    $('.dot').click(function () {
        fb_owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });


    $('#fac-fb-link').click(function(e) {
        e.preventDefault();
        $('#fac-fb-modal').addClass('active');
        $('.slider-nav').css({
            'z-index':'auto'
        });
    });

    $('#fac-fb-modal .close-btn').click(function(e) {
        e.preventDefault();
        $('#fac-fb-modal').removeClass('active');
        $('.slider-nav').css({
            'z-index':'100'
        });
    });

    var banquet_owl = $(".fac-banquet-slider");

    banquet_owl.owlCarousel({
        items:1,
        nav:false,
        margin:15,
        dots:true,
        pagination: true,
        dotsContainer:'#banquet-dots',
        dotsEach: true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
        }
    });

    $('.dot').click(function () {
        banquet_owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    $('#fac-banquet-link').click(function(e) {
        e.preventDefault();
        $('#fac-banquet-modal').addClass('active');
        $('.slider-nav').css({
            'z-index':'auto'
        });
    });

    $('#fac-banquet-modal .close-btn').click(function(e) {
        e.preventDefault();
        $('#fac-banquet-modal').removeClass('active');
        $('.slider-nav').css({
            'z-index':'100'
        });
    });

    var conc_owl = $(".fac-conc-slider");

    conc_owl.owlCarousel({
        items:1,
        nav:false,
        margin:15,
        dots:true,
        pagination: true,
        dotsContainer:'#conc-dots',
        dotsEach: true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
        }
    });

    $('.dot').click(function () {
        conc_owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    $('#fac-conc-link').click(function(e) {
        e.preventDefault();
        $('#fac-conc-modal').addClass('active');
        $('.slider-nav').css({
            'z-index':'auto'
        });
    });

    $('#fac-conc-modal .close-btn').click(function(e) {
        e.preventDefault();
        $('#fac-conc-modal').removeClass('active');
        $('.slider-nav').css({
            'z-index':'100'
        });
    });

    $(function(){
      $('.gallery .img-block').click(function(event) {
        var i_path = $(this).children('.bg').attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');

        $('#overlay, #magnify').fadeIn('fast');
      });

      $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();

        $('#overlay, #magnify').fadeOut('fast', function() {
          $('#close-popup, #magnify, #overlay').remove();
        });
      });
    });

    $('.home-gallery-photo-item:nth-child(n+9)').hide();
    $('.home-gallery-photo-more').click(function(e) {
        e.preventDefault();
        var el = $(this).children('.text');
        if(el.children('span').html() == 'View Less') {
            $('.home-gallery-photo-item:nth-child(n+9)').slideToggle();
            el.children('img').attr('src', 'img/home/gallery-more.png')
            el.children('span').html('View More');
        }
        else {
            $('.home-gallery-photo-item:nth-child(n+9)').slideToggle();
            el.children('img').attr('src', 'img/gallery-less.png')
            el.children('span').html('View Less');
        }

    });

    // ADAPTIVE

    if(window.matchMedia('(max-width: 992px)').matches){

        $('.home-announcements-item p').hide();
        $('.home-announcements-item .mobile-show').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).parent().find('p').slideToggle();
        });


        $('.home-news-item-text p').hide();
        $('.home-news-item-text .mobile-img').hide();
        $('.home-news-item-text .post-btn').hide();
        $('.home-news-item-text .mobile-show').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).parent().find('p').slideToggle();
            $(this).parent().find('.mobile-img').slideToggle();
            $(this).parent().find('.post-btn').slideToggle();
        });

        $('.about-faq-item p').hide();
        $('.about-faq-item  .mobile-show').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).parent().find('p').slideToggle();
        });

    }

    $('.main-menu ul li, .main-menu .dropdown').click(function(e) {
        e.preventDefault();
        $('.main-menu ul').toggleClass('active');
        $('.main-menu .dropdown').toggleClass('active');
        $('.main-menu-overlay').toggleClass('active');
    });

    $('.about-history-menu ul li, .about-history-menu .dropdown').click(function(e) {
        e.preventDefault();
        $('.about-history-menu ul').toggleClass('active');
        $('.about-history-menu .dropdown').toggleClass('active');
        $('.main-menu-overlay').toggleClass('active');
    });


    $('.about-clubs-menu ul li, .about-clubs-menu .dropdown').click(function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).parent('ul').parent('.about-clubs-menu').find('.dropdown').toggleClass('active');
        $(this).parent('ul').parent('.about-clubs-menu').toggleClass('active');
        $('.main-menu-overlay').toggleClass('active');
    });


    $('.mobile-menu-link').click(function(e) {
        e.preventDefault();
        $('.mobile-nav-bg').toggleClass('active');
        $('.mobile-nav').toggleClass('active');
        $('.mobile-nav-close').show();
    });

    $('.mobile-nav-close').click(function(e) {
        e.preventDefault();
        $('.mobile-nav-bg').toggleClass('active');
        $('.mobile-nav').toggleClass('active');
        $('.mobile-nav-close').hide();
    });

    $('.mobile-nav-bg').click(function(e) {
        var div = $(".mobile-nav");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.mobile-nav-bg').removeClass('active');
            $('.mobile-nav').removeClass('active');
            $('.mobile-nav-close').hide();

        }
    });




});
