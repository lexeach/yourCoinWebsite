(function($) {
    "use strict";

    // Cache
    var body = $('body');
    
    var partnersCarousel = $('#partners');
   
    var testimonialsCarousel = $('#testimonials');
    
    var isotopeContainer = $('.isotope');
    
    var toTop = $('#to-top');
    var navigation = $('.navigation');
    var superfishMenu = $('ul.sf-menu');

    var rtl = false;
    if( $('html').attr('dir') == 'rtl' ){
        rtl = true;
    }



    // Slide in/out with fade animation function
    jQuery.fn.slideFadeToggle = function (speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
    };
    jQuery.fn.slideFadeIn = function (speed, easing, callback) {
        return this.animate({opacity: 'show', height: 'show'}, speed, easing, callback);
    };
    jQuery.fn.slideFadeOut = function (speed, easing, callback) {
        return this.animate({opacity: 'hide', height: 'hide'}, speed, easing, callback);
    };

    // Animation on Scroll
    function initAnimation() {
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile == false) {
            $('*[data-animation]').addClass('animated');
            $('.animated').waypoint(function (down) {
                var elem = $(this);
                var animation = elem.data('animation');
                if (!elem.hasClass('visible')) {
                    var animationDelay = elem.data('animation-delay');
                    if (animationDelay) {
                        setTimeout(function () {
                            elem.addClass(animation + ' visible');
                        }, animationDelay);
                    } else {
                        elem.addClass(animation + ' visible');
                    }
                }
            }, {
                offset: $.waypoints('viewportHeight')
                
            });
        }
    }

    

    function layoutrtl(){
        if( $('html').attr('dir') == 'rtl' ){
            $('[data-vc-full-width="true"]').each( function(i,v){
                $(this).css('right' , $(this).css('left') ).css( 'left' , 'auto');
                
            });
        }
    }

    function updater() {

        if ($().sticky) {
            $('.header.fixed').sticky('update');
        }

        // refresh waypoints
        if ($().datetimepicker) {
            $('.datepicker').datetimepicker();
        }

    }

    function main_slide(){
            // Main slider
            $('.ova-main-slider').each(function(){

                var autoplay = $(this).data('auto_slider');
                var loop = $(this).data('loop');
                var duration = $(this).data('duration');
                var navigation = $(this).data('navigation');
                var dots = $(this).data('dots');

                

                $(this).owlCarousel({
                    autoplay: autoplay,
                    autoplayHoverPause: true,
                    loop: loop,
                    margin: 0,
                    dots: dots,
                    nav: navigation,
                    autoplayTimeout: duration,
                    rtl: rtl,
                    navText: [
                        "<i class='fa fa-angle-left'></i>",
                        "<i class='fa fa-angle-right'></i>"
                    ],
                    responsiveRefreshRate: 100,
                    responsive: {
                        0: {items: 1},
                        479: {items: 1},
                        768: {items: 1},
                        991: {items: 1},
                        1024: {items: 1}
                    }
                });

            });
    }

    function testimonialsCarouselAlt(){
            
        $('.testimonials-alt').each(function(){

            var autoplay = $(this).data('autoplay');
            var loop = $(this).data('loop');
            var duration = $(this).data('duration');
            var dots = $(this).data('dots');
            var number_item = $(this).data('number_item');

            $(this).owlCarousel({
                autoplay: autoplay,
                autoplayHoverPause: true,
                loop: loop,
                margin: 30,
                dots: dots,
                nav: false,
                autoplayTimeout: duration,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsiveRefreshRate: 100,
                rtl:rtl,
                responsive: {
                    0:    {items: 1},
                    479:  {items: 1},
                    768:  {items: 1},
                    991:  {items: 2},
                    1024: {items: 2},
                    1280: {items: number_item}
                }
            });

        });
    }

    function partnersCarouselAlt(){
        $('.partners-alt').each(function(){
            var count = $(this).data('count');
            $(this).owlCarousel({
                autoplay: false,
                loop: true,
                margin: 10,
                dots: false,
                nav: false,
                rtl:rtl,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0:    {items: 1},
                    479:  {items: 2},
                    768:  {items: 2},
                    991:  {items: 3},
                    1024: {items: 3},
                    1280: {items: count}
                }
            });
        });
    }

    function ovapartnersCarousel(){
        // Partners carousel
        if (partnersCarousel.length) {
            partnersCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: false,
                nav: false,
                rtl:rtl,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0:    {items: 1},
                    479:  {items: 2},
                    768:  {items: 3},
                    991:  {items: 4},
                    1024: {items: 5},
                    1280: {items: 6}
                }
            });
        }    
    }
    
    function ovatestimonialsCarousel(){
        // Testimonials carousel
        if (testimonialsCarousel.length) {
            testimonialsCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: true,
                nav: false,
                rtl:rtl,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0:    {items: 1},
                    479:  {items: 1},
                    768:  {items: 1},
                    991:  {items: 2},
                    1024: {items: 2},
                    1280: {items: 3}
                }
            });
        }    
    }
    


    jQuery(document).ready(function () {
        
        // Prevent empty links
        // ---------------------------------------------------------------------------------------
        $('a[href="#"]').on('click', function (event) {
            event.preventDefault();
        });

        /* Tool tip */
        $('[data-toggle="tooltip"]').tooltip();

        
        // Sticky header/menu
        // ---------------------------------------------------------------------------------------
        if ($().sticky) {
            $('.header.fixed').sticky({topSpacing: 0});
        }
        
        // SuperFish menu
        // ---------------------------------------------------------------------------------------
        if ($().superfish) {
            superfishMenu.superfish();
        }
        $('ul.sf-menu a').on('click', function () {
            body.scrollspy('refresh');
        });
        
        // Fixed menu toggle
        $('.menu-toggle').on('click', function () {
            if (navigation.hasClass('opened')) {
                navigation.removeClass('opened').addClass('closed');
            } else {
                navigation.removeClass('closed').addClass('opened');
            }
        });
        $('.menu-toggle-close').on('click', function () {
            if (navigation.hasClass('opened')) {
                navigation.removeClass('opened').addClass('closed');
            } else {
                navigation.removeClass('closed').addClass('opened');
            }
        });

        //
        if ($().swiper) {
            var swiper = new Swiper('.navigation', {
                scrollbar: '.swiper-scrollbar',
                direction: 'vertical',
                slidesPerView: 'auto',
                mousewheelControl: true,
                freeMode: true
            });
            if ($('.content-area.scroll').length) {
                var swiper2 = new Swiper('.content-area.scroll', {
                    scrollbar: '.swiper-scrollbar',
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    mousewheelControl: true,
                    freeMode: true
                });
            }
        }

        //
        if ($('.content-area.scroll').length) {
            $('.open-close-area').on('click', function () {
                if ($('.wrapper').hasClass('opened')) {
                    $('.wrapper').removeClass('opened').addClass('closed');
                } else {
                    $('.wrapper').removeClass('closed').addClass('opened');
                }
            });
        }

        // Smooth scrolling
        // ----------------------------------------------------------------------------------------
        $('.sf-menu a, .scroll-to').on('click', function () {

            $('.sf-menu a').removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 43
            }, {
                duration: 1200,
                easing: 'easeInOutExpo'
            });
            return false;
        });

        // BootstrapSelect
        // ---------------------------------------------------------------------------------------
        if ($().selectpicker) {
            $('.selectpicker').selectpicker();
        }

        // prettyPhoto
        // ---------------------------------------------------------------------------------------
        if ($().prettyPhoto) {
            $("a[data-gal^='prettyPhoto']").prettyPhoto({
                theme: 'dark_square'
            });
        }

        // Magic popup
        $('a.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        // Scroll totop button
        // ---------------------------------------------------------------------------------------
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                toTop.css({bottom: '15px'});
            } else {
                toTop.css({bottom: '-100px'});
            }
        });
        toTop.on('click', function () {
            $('html, body').animate({scrollTop: '0px'}, 800);
            return false;
        });

        // Sliders
        // ---------------------------------------------------------------------------------------
         setTimeout(function() {
            main_slide();
        },500);

        testimonialsCarouselAlt();
        partnersCarouselAlt();
        ovapartnersCarousel();
        ovatestimonialsCarousel();
        
        

        

        if ($().owlCarousel) {

            var owl = $('.owl-carousel');
            owl.on('changed.owl.carousel', function (e) {
                // update prettyPhoto
                if ($().prettyPhoto) {
                    $("a[data-gal^='prettyPhoto']").prettyPhoto({
                        theme: 'dark_square'
                    });
                }
            });

            // on tab click
            $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
                updater();
            });
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                updater();
            });
        }

        // Sliders
        // ---------------------------------------------------------------------------------------

        // countdown
        // ---------------------------------------------------------------------------------------
        if ($().countdown) {
            var austDay = new Date();
            austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
            $('#dealCountdown1').countdown({until: austDay});
            $('#dealCountdown2').countdown({until: austDay});
            $('#dealCountdown3').countdown({until: austDay});
        }

        // Google map
        // ---------------------------------------------------------------------------------------
        if (typeof google === 'object' && typeof google.maps === 'object') {

            $('.google-map').each(function(){

                var idmap = $(this).data('idmap');
                var zoom =  $(this).data('zoom');
                var icon = $(this).data('icon');
                var title = $(this).data('title').split("|");
                var location = $(this).data('location').split("|");

                var location_obj = [];
                var title_obj = [];
                
                for(var i=0; i< location.length; i++){
                    location_obj[i] = location[i].replace(" ","");
                }

                for(var k=0; k< title.length; k++){
                    title_obj[k] = "<div class='map-info-window'>"+title[k]+'</div>';
                }
                


                function initialize() {
                    var map;
                    var bounds = new google.maps.LatLngBounds();
                    var mapOptions = {
                        mapTypeId: 'roadmap',
                        scrollwheel: false 
                    };
                                    
                    // Display a map on the page
                    map = new google.maps.Map(document.getElementById(idmap), mapOptions);
                    map.setTilt(45);
                   
                    // Display multiple markers on a map
                    var infoWindow = new google.maps.InfoWindow(), marker, i;
                    
                    // Loop through our array of markers & place each one on the map
                    for(var d=0; d< location_obj.length; d++){
                        var localtion_lg = location_obj[d].split(",");
                        var position = new google.maps.LatLng(localtion_lg[0],localtion_lg[1]);
                        bounds.extend(position);
                        marker = new google.maps.Marker({
                            position: position,
                            map: map,
                            icon: icon
                        });
                        
                        // Allow each marker to have an info window    
                        google.maps.event.addListener(marker, 'click', (function(marker, d) {
                            return function() {
                                infoWindow.setContent(title_obj[d]);
                                infoWindow.open(map, marker);
                            }
                        })(marker, d));

                        // Automatically center the map fitting all markers on the screen
                        map.fitBounds(bounds);
                    }

                    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
                    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
                        this.setZoom(zoom);
                        google.maps.event.removeListener(boundsListener);
                    });
                    
                }

                google.maps.event.addDomListener(window, "load", initialize);

               
            });


           
        }

        // Shop categories widget slide in/out
        // ---------------------------------------------------------------------------------------
        $('.car-categories .arrow').on('click', function (event) {

            $(this).parent().parent().find('ul.children').removeClass('active');
            $(this).parent().parent().find('.fa-angle-up').addClass('fa-angle-down').removeClass('fa-angle-up');
            if ($(this).parent().find('ul.children').is(":visible")) {
                
            }
            else {
                $(this).find('.fa-angle-down').addClass('fa-angle-up').removeClass('fa-angle-down');
                $(this).parent().find('ul.children').addClass('active');
            }
            $(this).parent().parent().find('ul.children').each(function () {
                if (!$(this).hasClass('active')) {
                    $(this).slideFadeOut();
                }
                else {
                    $(this).slideFadeIn();
                }
            });
        }
        );
        $('.car-categories ul.children').each(function () {
            if (!$(this).hasClass('active')) {
                $(this).hide();
            }
        });

        // Ripple effect on click for buttons
        // ---------------------------------------------------------------------------------------
        // $(".ripple-effect").on('click', function (e) {
        //     var rippler = $(this);

        //     // create .ink element if it doesn't exist
        //     if (rippler.find(".ink").length == 0) {
        //         rippler.append("<span class='ink'></span>");
        //     }

        //     var ink = rippler.find(".ink");

        //     // prevent quick double clicks
        //     ink.removeClass("animate");

        //     // set .ink diametr
        //     if (!ink.height() && !ink.width())
        //     {
        //         var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
        //         ink.css({height: d, width: d});
        //     }

        //     // get click coordinates
        //     var x = e.pageX - rippler.offset().left - ink.width() / 2;
        //     var y = e.pageY - rippler.offset().top - ink.height() / 2;

        //     // set .ink position and add class .animate
        //     ink.css({
        //         top: y + 'px',
        //         left: x + 'px'
        //     }).addClass("animate");
        // });


        updater();





    });

    jQuery(window).load(function () {
        
       /* Fix layout RTL */
        layoutrtl();     

        /* Preloader */
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut(200);

        

        if (location.hash != '') {
            var hash = '#' + window.location.hash.substr(1);
            if (hash.length) {
                jQuery('html,body').delay(0).animate({
                    scrollTop: jQuery(hash).offset().top - 44 + 'px'
                }, {
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
            }
        }

        initAnimation();

        updater();


    });



    (function($,sr){

      // debouncing function from John Hann
      // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
      var debounce = function (func, threshold, execAsap) {
          var timeout;

          return function debounced () {
              var obj = this, args = arguments;
              function delayed () {
                  if (!execAsap)
                      func.apply(obj, args);
                  timeout = null; 
              };

              if (timeout)
                  clearTimeout(timeout);
              else if (execAsap)
                  func.apply(obj, args);

              timeout = setTimeout(delayed, threshold || 100); 
          };
      }
        // smartresize 
        jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

    })(jQuery,'smartresize');
   

    jQuery(window).smartresize(function(){

        /* Fix layout RTL */
        layoutrtl();

        
        updater();
         $('.ova-main-slider').trigger('refresh');
         $('.testimonials-alt').trigger('refresh');
         $('.partners-alt').trigger('refresh');
         partnersCarousel.trigger('refresh');
         testimonialsCarousel.trigger('refresh');

    });

    jQuery(window).scroll(function () {

        if ($().sticky) {
            $('.header.fixed').sticky('update');
        }

    });


    



   

})(jQuery);