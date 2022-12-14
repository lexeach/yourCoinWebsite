(function($) {
    "use strict";
    var themebox = {};
    var pageNumber = 1;

    themebox.init = function() {
        this.load_products();
        this.loadmore_click();
        this.navigation();
    };

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
                // offset: 'bottom-in-view',
                // offset: '95%'
            });
        }
    }

    themebox.load_products = function(){

        var self = this;

        if($('.themebox_latest_product').length > 0){
            $.each($('.themebox_latest_product'), function(i, item) {

                var text_detail = $(item).data('text_detail');
                var text_live_demo = $(item).data('text_live_demo');
                var text_sold = $(item).data('text_sold');
                var load_more = $(item).data('load_more');
                var animation = $(item).data('animation');
                var animation_delay = $(item).data('animation_delay');
                var paged = $(item).attr('data-paged');
                var count = $(item).data('count');
                var loaded_all_products = $(item).data('loaded_all_products');

                var cat = $(item).find('ul.filtrable li.current a').attr('data-cat');    
                
                // Display loading
                $('.loading__circle').css('display','block');

                var obj = {
                    count: count,
                    text_detail: text_detail,
                    text_live_demo: text_live_demo,
                    text_sold: text_sold,
                    load_more: load_more,
                    animation: animation,
                    animation_delay: animation_delay,
                    paged: paged,
                    loaded_all_products: loaded_all_products,
                    cat:cat
                }

                self.getproduct(obj, function(reponse) {
                    
                    if (reponse.length > 0 && reponse.trim() != '') {
                        $(item).find('.portfolio').append(reponse);
                        var id = $(item).attr('id');
                        $('.'+id).find('.loading__text span').removeClass('active').html(load_more);
                        $('.'+id).find('.loading__text i').css('display','inline-block');
                        $('.loading__circle').css('display','none');

                    } else {
                         var id = $(item).attr('id');
                         $('.'+id).find('.loading__text span').addClass('active').html(loaded_all_products);
                         $('.'+id).find('.loading__text i').css('display','none');
                         $('.loading__circle').css('display','none');
                    }
                    initAnimation();

                }, false);

            });
        }
    }

    themebox.loadmore_click = function(){
        var self = this;
        if( $('.themebox_loadmore_product').length > 0 ){
            $.each( $('.themebox_loadmore_product'), function(i, item){

                $(item).off('click').on('click', function(){
                    var id = '#'+$(item).data('id');
                    $(id).attr('data-paged', parseInt( $(id).attr('data-paged') )+1);
                    $('.loading__circle').css('display','block');
                    self.load_products();
                });
                
            });
        }
    }

    themebox.navigation = function(){
        var self = this;
        if( $('.themebox_latest_product ul.filtrable li').length > 0 ){
            $.each( $('.themebox_latest_product ul.filtrable li'), function(i, item){

                $(item).off('click').on('click', function(){
                    $('.themebox_latest_product ul.filtrable li').removeClass('current');
                    $(item).addClass('current');
                    $('.themebox_latest_product').attr('data-paged', 1);
                    $('.themebox_latest_product .portfolio').html('');
                    $('.loading__circle').css('display','block');
                    self.load_products();
                });
                
            });
        }
    }


    themebox.getproduct = function(obj, calback, isloading) {
        if (typeof(calback) == 'undefined') calback = function() {};
        $.post(ajax_object.ajaxurl, {
            action: 'themebox_loadmore_product',
            data: obj,
            beforeSend: function() {
                
            }
        }, function(reponse) {
            if (!reponse.error) {
                calback(reponse);
            } else {
               alert('error');
                return false;
            }
        });
    };


   

    // init
    $(function() {
        themebox.init();
    });

})(jQuery);