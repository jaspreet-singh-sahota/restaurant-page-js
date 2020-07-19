const home = (() => {
  const header = document.createElement('header');

  const divInfo = document.createElement('div');
  const paragraph = document.createElement('p');
  divInfo.setAttribute('class', 'info');
  paragraph.setAttribute('class', 'restaurant-info');
  paragraph.textContent = 'MOST AMAZING DINING RIDE'

  const button = document.createElement('button');
  button.textContent = 'Book Now'

  divInfo.appendChild(paragraph);
  divInfo.appendChild(button);
  header.appendChild(divInfo);

  return header
})();

export default home;