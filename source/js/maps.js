

	//google.maps.event.addDomListener(window, 'load', initMap);

	function initMap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        disableDefaultUI: true,
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.787433, 37.495374),
        // How you would like to style the map. 
        styles: [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"all","elementType":"geometry","stylers":[{"saturation":"100"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#86a77a"},{"visibility":"on"}]}]
      };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
    	position: new google.maps.LatLng(55.797631, 37.558982),
        zoom:8,
    	map: map,
    	title: 'Я!',
        icon: {
            url: "/assets/img/map_marker.svg",
            scaledSize: new google.maps.Size(30, 42)
        }
    });


  }

