const navbar = (() => {
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
  home.setAttribute('id', 'recent-tab');
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

  return header
})();

export default navbar;