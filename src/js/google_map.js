/* eslint-disable no-undef */
const googleMap = () => {
  function initMap() {
    const myOptions = {
      zoom: 14,
      center: new google.maps.LatLng(28.7041, 77.1025),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    const map = new google.maps.Map(document.getElementById('draggable-google-map'), myOptions);
    const marker = new google.maps.Marker({
      map,
      position: new google.maps.LatLng(28.7041, 77.1025),
    });
    const infowindow = new google.maps.InfoWindow({
      content: '<strong>Fly Dining</strong><br>Delhi<br>',
    });
    google.maps.event.addListener(marker, 'click', () => {
      infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
  }

  setTimeout(() => {
    initMap();
  }, 200);
};

export default googleMap;