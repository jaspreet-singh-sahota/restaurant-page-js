import "./styles/style.css"
import background from './js/background';
import navbar from './js/navbar';
import home from './js/home';
import menu from './js/menu';
import contact from './js/contact'
import { googleMap} from './js/google_map'

const content = document.getElementById('content');
content.appendChild(background);
content.appendChild(navbar);
const links = document.querySelectorAll('.nav-links')
content.appendChild(home);

const clear = () => {
  let contentChildrens = content.children
  let contentArr = [...contentChildrens];
  document.getElementById("recent-tab").removeAttribute('id')
  contentArr.forEach(element => element.remove())
  content.appendChild(background);
  content.appendChild(navbar);
}

const tabSwitching = (e) => {
  const recentTab = e.target.textContent

  if (recentTab === 'Home') {
    clear()
    content.appendChild(home);
    document.querySelector('.nav-links').setAttribute('id', 'recent-tab')
  } 
  if (recentTab === 'Menu') {
    clear()
    content.appendChild(menu); 
    document.querySelectorAll('.nav-links')[1].setAttribute('id', 'recent-tab')
  } 
  if (recentTab === 'Contact') {
    clear()
    document.querySelectorAll('.nav-links')[2].setAttribute('id', 'recent-tab')
    content.appendChild(contact[1]);
    content.appendChild(contact[0]);
    content.appendChild(contact[2]);
    googleMap()
  }
}

links.forEach(link => link.addEventListener('click', tabSwitching))