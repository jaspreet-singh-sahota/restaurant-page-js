import "./styles/style.css"
import background from './js/background';
import navbar from './js/navbar';
// import home from './js/home';
// import menu from './js/menu';
import contact from './js/contact'

const body = document.querySelector('body')
console.log(body)

const content = document.getElementById('content');
content.appendChild(background);
content.appendChild(navbar);
// content.appendChild(home);
// content.appendChild(menu);
body.insertBefore(contact, body.childNodes[2]);
