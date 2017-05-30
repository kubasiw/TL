jQuery(document).ready(function(){    
    
    
    // function for google maps
    jQuery(function ($) {
        function my_map() {
            var myLocation = new google.maps.LatLng(51.818301, 19.420385);
            var mapOptions = {
                center: myLocation,
                zoom: 17
            };
            
            var map = new google.maps.Map(document.getElementById("map1"),
                mapOptions);
            
            var marker = new google.maps.Marker({
              position: myLocation,
              map: map
            });
            marker.setMap(map);
        }
        my_map();
    });
    
    function lookForSection(){
        
        var menu1 = jQuery('.menu1');
        var menu2 = jQuery('.menu2');
        var menu3 = jQuery('.menu3');
        
        
        menu1.on('click', function(){          // while clicking on <a>
            var id = jQuery(this).attr('href');  // id will get href
            var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as <a> href and get offset
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},700);

        });
        
        menu2.on('click', function(){          // while clicking on <a>
            var id = jQuery(this).attr('href');  // id will get href
            var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as <a> href and get offset
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},700);

        });
        
        menu3.on('click', function(){          // while clicking on <a>
            var id = jQuery(this).attr('href');  // id will get href
            var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as <a> href and get offset
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},700);

        });
    };
    lookForSection();
    
    function blink() {
        jQuery('.flash').hide();

        setInterval(function(){
            jQuery('.flash').fadeIn(800).fadeOut(800);
        },0);
        
    };
    blink();
    
    function priceOpen() {
        
        var priceButton1 = jQuery('.priceButton1');
        var hairPrices = jQuery('.sectionPricesHair');
        var hairPricesX = jQuery('.sectionPricesHair i');
        
        var priceButton2 = jQuery('.priceButton2');
        var cosmePrices = jQuery('.sectionPricesCosme');
        var cosmePricesX = jQuery('.sectionPricesCosme i');
        
        
        priceButton1.on('click', function() {
            
            if (hairPrices.hasClass('open') === true) {
                hairPrices.slideUp(500);
                hairPrices.removeClass('open');
                priceButton1.removeClass('on');
            } else {
                hairPrices.slideDown(500);
                hairPrices.addClass('open');
                priceButton1.addClass('on');
            };
        });
        
        priceButton2.on('click', function() {
            
            if (cosmePrices.hasClass('open') === true) {
                cosmePrices.slideUp(500);
                cosmePrices.removeClass('open');
                priceButton2.removeClass('on');
            } else {
                cosmePrices.slideDown(500);
                cosmePrices.addClass('open');
                priceButton2.addClass('on');
            };
        });
        
        hairPricesX.on('click', function() {
            hairPrices.slideUp(500);
            hairPrices.removeClass('open');
            priceButton1.removeClass('on');
        });
        
        cosmePricesX.on('click', function() {
            cosmePrices.slideUp(500);
            cosmePrices.removeClass('open');
            priceButton2.removeClass('on');
        });
        
        function goToPrice() {
            if (hairPrices.hasClass('open') === false) {
                priceButton1.on('click', function(){          // while clicking on

                    var id = jQuery(this).attr('href');  // id will get href
                    var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as <a> href and get offset

                    jQuery('html, body').animate({scrollTop: elemOffset.top},700);

                });
            };
                
            priceButton2.on('click', function(){          // while clicking on
                
                var id = jQuery(this).attr('href');  // id will get href
                var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as <a> href and get offset

                jQuery('html, body').animate({scrollTop: elemOffset.top},700);
                
            });
        };
        goToPrice();
    };
    priceOpen();
    
    
    function fixSecTd() {
        jQuery('tbody tr td:last-child').addClass('text-right');  
    };
    fixSecTd();
    
    
});