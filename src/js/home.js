/* < header >
  <nav>
    <a href="#" class="fly-dining-logo" id="logo">
      <img src="https://www.flydining.com/wp-content/uploads/2020/02/flydininglogo-compressor.png"
        alt="Fly Dining, Dinner in the Sky restaurant Franchise." class="header-logo">
        </a>
      <ul class="nav-list">
        <li class="nav-links active"><a href="#">Home</a></li>
        <li class="nav-links"><a href="#">Menu</a></li>
        <li class="nav-links"><a href="#">Contact</a></li>
      </ul>
      </nav>
</header> 
    <div class="info">
      <p class="restaurant-info">MOST AMAZING DINING RIDE</p>
      <button>Book Now</button>
    </div> */
const home = (() => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');

  const logoLink = document.createElement('a');
  logoLink.setAttribute('class', 'fly-dining-logo');
  logoLink.setAttribute('href', '#');
  logoLink.setAttribute('id', 'logo');
  
  const logoImage = document.createElement('img');
  logoImage.setAttribute('src', 'https://www.flydining.com/wp-content/uploads/2020/02/flydininglogo-compressor.png')
  logoImage.setAttribute('alt', 'Fly Dining, Dinner in the Sky restaurant Franchise.')
  logoImage.setAttribute('class', 'header-logo')
  
  const navList = document.createElement('ul');
  navList.setAttribute('class', 'nav-list');
  
  const home = document.createElement('li');
  const homeLink = document.createElement('a');
  home.setAttribute('class', 'nav-links');
  homeLink.setAttribute('href', '#');
  homeLink.textContent = "Home";
  
  const menu = document.createElement('li');
  const menuLink = document.createElement('a');
  menu.setAttribute('class', 'nav-links');
  menuLink.setAttribute('href', '#');
  menuLink.textContent = 'Menu'

  const contact = document.createElement('li');
  const contactLink = document.createElement('a');
  contact.setAttribute('class', 'nav-links');
  contactLink.setAttribute('href', '#');
  contactLink.textContent = 'Contact'
  
  const divInfo = document.createElement('div');
  const paragraph = document.createElement('p');
  divInfo.setAttribute('class', 'info');
  paragraph.setAttribute('class', 'restaurant-info');
  paragraph.textContent = 'MOST AMAZING DINING RIDE'
  
  const button = document.createElement('button');
  button.textContent = 'Book Now'

  divInfo.appendChild(paragraph);
  divInfo.appendChild(button);

  home.appendChild(homeLink);
  menu.appendChild(menuLink);
  contact.appendChild(contactLink);
  navList.appendChild(home);
  navList.appendChild(menu);
  navList.appendChild(contact);

  logoLink.appendChild(logoImage);
  nav.appendChild(logoLink);
  nav.appendChild(navList);
  header.appendChild(nav);
  header.appendChild(divInfo);

  return header
})();

export default home;