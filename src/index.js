import "./style.css"
console.log('testing')


function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Jaspreet singh';
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());