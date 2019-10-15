    $(document).ready(function() {


        /*載入動畫設定*/
        var percent=0
        var timer1=setInterval(function(){
            percent+=1
            if(percent>100){
                clearInterval(timer1)
                $(".pageloading").addClass("complete")
            }
        },30);
        /*載入動畫設定_end*/


        $(".canClick").click(function() {
            $(this).find(".mask-info").toggleClass("appear")
        });

        //大區塊切換
        $(".fixedmenu01").click(function(){
            // alert("sss");
            $("#Mavic").css('display','block');
            $("#Mavic").addClass('animated fadeIn');
            $("#phantom").css('display','none');


            $(".fixedmenu01").find("img").attr("src","Images/lens/-g-icon_mavicpro_actived.svg");
            $(".fixedmenu02").find("img").attr("src","Images/lens/-g-icon_phatom_disactived.svg");
            $(".productBg01").css('background-image','url("Images/lens/lenspro-banner-mavic-1920.jpg")')



            $('html, body').animate({
              scrollTop: $("#Mavic .productBg03").offset().top
            }, 1000);
        });

        $(".fixedmenu02").click(function(){
            $("#phantom").css('display','block');
            $("#phantom").addClass('animated fadeIn');
            $("#Mavic").css('display','none');
            $(".productBg01").css('background-image','url("Images/lens/Lenspro-Phantom-style/Phantom banner/lenspro-banner-phantom-1920.png")')

            $(".fixedmenu02").find("img").attr("src","Images/lens/-g-icon_phatom_actived.svg");
            $(".fixedmenu01").find("img").attr("src","Images/lens/-g-icon_mavicpro_disactived.svg");

            $('html, body').animate({
              scrollTop: $("#phantom .productBg03").offset().top
            }, 1000);
        });
        
   
        //Phantom lens click

        $('#phantom .lens_btn01').click(function(){
            $('#phantom .lens_btn01').addClass('lens_btn_acttive');
            $('#phantom .lens_btn02, #phantom .lens_btn03, #phantom .lens_btn04, #phantom .lens_btn05').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#phantom .lens_mavic_repeat_01").offset().top
            }, 1000);

        });

        $('#phantom .lens_btn02').click(function(){
            $('#phantom .lens_btn02').addClass('lens_btn_acttive');
            $('#phantom .lens_btn01, #phantom .lens_btn03, #phantom .lens_btn04, #phantom .lens_btn05').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#phantom .lens_mavic_repeat_02").offset().top
            }, 1000);

        });


        $('#phantom .lens_btn03').click(function(){
            $('.lens_btn03').addClass('lens_btn_acttive');
            $('.lens_btn01, .lens_btn02, .lens_btn04, .lens_btn05').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#phantom .lens_mavic_repeat_03").offset().top
            }, 1000);

        });


        $('#phantom .lens_btn04').click(function(){
            $('.lens_btn04').addClass('lens_btn_acttive');
            $('.lens_btn01, .lens_btn02, .lens_btn03, .lens_btn05').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#phantom .lens_mavic_repeat_04").offset().top
            }, 1000);

        });

        $('#phantom .lens_btn05').click(function(){
            $('.lens_btn05').addClass('lens_btn_acttive');
            $('.lens_btn01, .lens_btn02, .lens_btn04, .lens_btn03').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#phantom .lens_mavic_repeat_05").offset().top
            }, 1000);

        });
     
        //Phantom lens pack click

        $('#phantom .len_pak01').click(function(){
            $('.len_pak01').addClass('lens_btn_acttive');
            $('.len_pak02, .len_pak03').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#phantom .lens_mavic_combination01").offset().top
            }, 1000);

        });

        $('#phantom .len_pak02').click(function(){
            $('.len_pak02').addClass('lens_btn_acttive');
            $('.len_pak01, .len_pak03').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#phantom .lens_mavic_combination02").offset().top
            }, 1000);

        });

        $('#phantom .len_pak03').click(function(){
            $('.len_pak03').addClass('lens_btn_acttive');
            $('.len_pak01, .len_pak02').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#phantom .lens_mavic_combination03").offset().top
            }, 1000);

        });



        
        //Mavic lens click

        $('#Mavic .lens_btn01').click(function(){
            $('.lens_btn01').addClass('lens_btn_acttive');
            $('.lens_btn02, .lens_btn03, .lens_btn04, .lens_btn05').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#Mavic .lens_mavic_repeat_01").offset().top
            }, 1000);

        });

        $('#Mavic .lens_btn02').click(function(){
            $('.lens_btn02').addClass('lens_btn_acttive');
            $('.lens_btn01, .lens_btn03, .lens_btn04, .lens_btn05').removeClass('lens_btn_acttive');
            
            $('html, body').animate({
              scrollTop: $("#Mavic .lens_mavic_repeat_02").offset().top
            }, 1000);

        });


        $('#Mavic .lens_btn03').click(function(){
            $('.lens_btn03').addClass('lens_btn_acttive');
            $('.lens_btn01, .lens_btn02, .lens_btn04, .lens_btn05').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#Mavic .lens_mavic_repeat_03").offset().top
            }, 1000);

        });


        $('#Mavic .lens_btn04').click(function(){
            $('.lens_btn04').addClass('lens_btn_acttive');
            $('.lens_btn01, .lens_btn02, .lens_btn03, .lens_btn04').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#Mavic .lens_mavic_repeat_04").offset().top
            }, 1000);

        });

        $('#Mavic .lens_btn05').click(function(){
            $('.lens_btn05').addClass('lens_btn_acttive');
            $('.lens_btn01, .lens_btn02, .lens_btn04, .lens_btn05').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#Mavic .lens_mavic_repeat_05").offset().top
            }, 1000);

        });

        //Mavic lens pack click

        $('#Mavic .len_pak01').click(function(){
            $('.len_pak01').addClass('lens_btn_acttive');
            $('.len_pak02, .len_pak03').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#Mavic .lens_mavic_combination01").offset().top
            }, 1000);

        });

        $('#Mavic .len_pak02').click(function(){
            $('.len_pak02').addClass('lens_btn_acttive');
            $('.len_pak01, .len_pak03').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#Mavic .lens_mavic_combination02").offset().top
            }, 1000);

        });

        $('#Mavic .len_pak03').click(function(){
            $('.len_pak03').addClass('lens_btn_acttive');
            $('.len_pak01, .len_pak02').removeClass('lens_btn_acttive');

            $('html, body').animate({
              scrollTop: $("#Mavic .lens_mavic_combination03").offset().top
            }, 1000);

        });
     
        $(window).scroll(function() {

            var now_Top = $(window).scrollTop(),
                now_bottom = now_Top + $(window).height(),
                banner = $('.productBg01').height(),
                banner_btm = $('.productBg01').offset().top + banner,
                footer_top = $('.footer').offset().top,
                window_width = $(window).width();

            if ( now_Top >=  $('.productBg01').offset().top +$('.productBg01').outerHeight() - $('.bookmark').height() ) {
                $('.bookmark').addClass('fixed');
            } else {
                $('.bookmark').removeClass('fixed');
            };



            /* Check the location of each desired element */
            $('.ani').each(function(i) {

                var bottom_of_object = $(this).offset().top
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */
                if (bottom_of_window > bottom_of_object) {

                    $(this).animate({ 'opacity': '1' }, 1500);

                }

            });

        });
            //skroll
            var isFirefox = typeof InstallTrigger !== 'undefined';
            var isIE = /*@cc_on!@*/ false || !!document.documentMode;
            var isChrome = !!window.chrome;
            var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
            var prefix;

            if (isFirefox) {
                prefix = '-moz-';
            } else if (isIE) {

            } else if (isChrome || isSafari) {
                prefix = '-webkit-';
            }

    
            
            if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
                skrollr.init({
                    forceHeight: false
                });
            }

    });
