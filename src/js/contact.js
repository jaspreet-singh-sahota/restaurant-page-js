const contact = (() => {
  const scriptTag = document.createElement('script')
  scriptTag.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?v=3.exp')
  const googleDiv = document.createElement('div')
  googleDiv.setAttribute('id', 'draggable-google-map')
  

  return [scriptTag , googleDiv]
})();

export default contact;