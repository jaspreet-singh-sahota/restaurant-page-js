import "./styles/style.css"
import background from './js/background';
import navbar from './js/navbar';
// import home from './js/home';
// import menu from './js/menu';
import contact from './js/contact'
import { googleMap} from './js/google_map'

const content = document.getElementById('content');
content.appendChild(background);
content.appendChild(navbar);

// content.appendChild(home);
// content.appendChild(menu);
content.appendChild(contact[0]);
content.appendChild(contact[1]);
content.appendChild(contact[2]);
googleMap()
