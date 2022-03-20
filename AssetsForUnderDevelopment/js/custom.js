
(function ($) {
    "use strict";
    var mainApp = {

        main_fun:function() {
            
            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                      { src: 'AssetsForUnderDevelopment/img/1.jpg', fade: 1000, delay: 9000 }, //CHANGE THESE IMAGES WITH YOUR ORIGINAL IMAGES
                      { src: 'AssetsForUnderDevelopment/img/2.jpg', fade: 1000, delay: 9000 }, //THESE IMAGES ARE FOR DEMO PURPOSE ONLY YOU, CAN NOT USE THEM WITHOUT AUTHORS PERMISSION
                       { src: 'AssetsForUnderDevelopment/img/3.jpg', fade: 1000, delay: 9000 }, //SEE DOCUMENTATION FOR ORIGINAL URLs/LINKs OF IMAGES
                     
                    ]
                })('overlay', {
                    /** SLIDESHOW OVERLAY IMAGE **/
                    src: 'AssetsForUnderDevelopment/plugins/vegas/overlays/15.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
                });

            });

            $(function () {
                var $header = $("#headLine");
                var header = ['WORKING...','UNDER DEVELOPMENT...', 'COMMING SOON...', 'UniHK App...']; // CHANGE TEXT HERE TO YOUR TEXT , YOU CAN USE MANY WORDS SEPRATED BY , 

                var position = -1;

                !function loop() {
                    position = (position + 1) % header.length;
                    $header
                        .html(header[position])
                        .fadeIn(1000)
                        .delay(1000)
                        .fadeOut(1000, loop);
                }();
            });

        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



