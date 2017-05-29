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
        var priceButton1 = jQuery('.price:nth-of-type(1)');
        console.log(priceButton1);
    }
    priceOpen();
    
    
    
    
});