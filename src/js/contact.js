const contact = (() => {
  const scriptTag = document.createElement('script')
  scriptTag.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?v=3.exp')


  const googleDiv = document.createElement('div')



    // <div id='draggable-google-map' style='height:70%;width:70%;'></div>


  return scriptTag
})();

export default contact;