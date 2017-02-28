jQuery(document).ready(function(){

    jQuery('.carousel').carousel({
            interval: 4000 //changes the speed
    });
    
    
    
    jQuery(function ($) {
        function init_map1() {
            var myLocation = new google.maps.LatLng(51.818301, 19.420385);
            var mapOptions = {
                center: myLocation,
                zoom: 17
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
    
    
    
    
});