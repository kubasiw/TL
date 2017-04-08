jQuery(document).ready(function(){    
    
    jQuery(function ($) {
        function init_map1() {
            var myLocation = new google.maps.LatLng(51.818301, 19.420385);
            var mapOptions = {
                center: myLocation,
                zoom: 18
            };
            var marker = new google.maps.Marker({
                position: myLocation,
                title: "Property Location"
            });
            var map = new google.maps.Map(document.getElementById("map1"),
                mapOptions);
            marker.setMap(map);
        }
        init_map1();
    });
    
    function lookForSection(){
        
        var menu1 = jQuery('.menu1');
        var menu1 = jQuery('.menu2');
        var menu3 = jQuery('.menu3');
        
        menu1.on('click', function(){          // while clicking on a circle
            var id = jQuery(this).attr('href');  // id will get href from circA
            var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as button href and get offset
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},500);

        });
        
        menu3.on('click', function(){          // while clicking on a circle
            var id = jQuery(this).attr('href');  // id will get href from circA
            var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as button href and get offset
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},500);

        });
    };
    lookForSection();
    
    
    
    
});