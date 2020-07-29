const googleMap = () => {
  function init_map() {
    var myOptions = {
      zoom: 14,
      center: new google.maps.LatLng(28.7041, 77.1025),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let map = new google.maps.Map(document.getElementById('draggable-google-map'), myOptions);
    let marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(28.7041, 77.1025)
    });
    let infowindow = new google.maps.InfoWindow({
      content: '<strong>Fly Dining</strong><br>Delhi<br>'
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
  }

  setTimeout(() => {
    init_map();
  }, 500);
}

export {googleMap}