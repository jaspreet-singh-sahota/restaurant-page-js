import "./styles/style.css"
import background from './js/background';
import navbar from './js/navbar';
// import home from './js/home';
import menu from './js/menu';

const content = document.getElementById('content');
content.appendChild(background);
content.appendChild(navbar);
// content.appendChild(home);
content.appendChild(menu);
