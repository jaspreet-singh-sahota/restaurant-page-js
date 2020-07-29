const googleMap = (() => {
  function init_map() { 
    var myOptions = { 
      zoom: 14, 
      center: new google.maps.LatLng(19.075314480255834, 72.88153973865361), 
      mapTypeId: google.maps.MapTypeId.ROADMAP 
    }; 
    map = new google.maps.Map(document.getElementById('draggable-google-map'), myOptions); 
    marker = new google.maps.Marker({ map: map, 
      position: new google.maps.LatLng(19.075314480255834, 72.88153973865361) 
    }); 
    infowindow = new google.maps.InfoWindow({ 
      content: '<strong>My Location</strong><br>mumbai<br>' 
    }); 
    google.maps.event.addListener(marker, 'click', function () { 
      infowindow.open(map, marker); 
    }); 
    infowindow.open(map, marker); 
  } 
  google.maps.event.addDomListener(window, 'load', init_map)
})()

