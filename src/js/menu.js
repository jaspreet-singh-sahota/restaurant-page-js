const menu = (() => {
  const card = (src) => {
    const divRow = document.createElement('div');
    const divAvatarContainer = document.createElement('div');
    const image = document.createElement('img');
    const divDetailsContainer = document.createElement('div');
    const orderButton = document.createElement('p');
    divRow.setAttribute('class', 'row');
    divAvatarContainer.setAttribute('class', 'avatar-container');
    image.setAttribute('class', 'img');
    image.setAttribute('src', src);
    divDetailsContainer.setAttribute('class', 'details-container');
    divDetailsContainer.innerHTML = '<h3>Lorem Ipsum <span class="price">19$</span></h3>'
    orderButton.setAttribute('class', 'button');
    orderButton.textContent = 'Order'

    divDetailsContainer.appendChild(orderButton);
    divAvatarContainer.appendChild(image);
    divRow.appendChild(divAvatarContainer);
    divRow.appendChild(divDetailsContainer)
    return divRow
  };

  const flexContainer = (first, second, third) => {
    const divMySlider = document.createElement('div');
    const divFlexContainer = document.createElement('div');
    divMySlider.setAttribute('class', 'mySlides');
    divFlexContainer.setAttribute('class', 'flex-container');

    const card1 = card(first)
    const card2 = card(second)
    const card3 = card(third);

    divFlexContainer.appendChild(card1);
    divFlexContainer.appendChild(card2)
    divFlexContainer.appendChild(card3)
    divMySlider.appendChild(divFlexContainer)

    return divMySlider
  };

  const link1 = 'https://i.guim.co.uk/img/media/39e421c6dd29c213b6015bb2f38123a6d2dbd0ca/0_0_4724_4724/master/4724.jpg?width=620&quality=85&auto=format&fit=max&s=f9ed7456342414268f32072f276854b2'
  const link2 = 'https://be35832fa5168a30acd6-5c7e0f2623ae37b4a933167fe83d71b5.ssl.cf3.rackcdn.com/4152/miguel_barclay_mushroom_risotto__square.jpg'
  const link3 = 'https://i.pinimg.com/originals/17/af/b7/17afb750d5a20efd1ba6b056f63ecf0c.jpg'
  const link4 = 'https://ichef.bbci.co.uk/images/ic/1280xn/p079jhrl.jpg'
  const link5 = 'https://i.guim.co.uk/img/media/82a2181601e540a4f3a8f19607f13ff54b0c4762/0_0_4724_4724/master/4724.jpg?width=620&quality=85&auto=format&fit=max&s=80b30025f2d9967fd93d080b14acc5cd'
  const link6 = 'https://i.guim.co.uk/img/media/06aa3a3a28128f3abc37e4488607b73b744bd611/0_0_4724_4724/master/4724.jpg?width=1225&quality=85&auto=format&fit=max&s=a1eacfa0cc1ca9a2133d037556ab4912'
  const link7 = 'https://i.pinimg.com/originals/dd/d2/61/ddd2611e5c59653af11854204397d08d.jpg'
  const link8 = 'https://i.pinimg.com/736x/92/f5/1e/92f51e8f0a5a826320175da4835d05cc.jpg'
  const link9 = 'https://www.drinkstuff.com/productimg/154483_large.jpg'
  const leftButton = document.createElement('button')
  const rightButton = document.createElement('button')

  let slideIndex = 1;

  const showDivs = (n) => {
    let i;
    let mySlider = document.getElementsByClassName("mySlides");
    if (n > mySlider.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = mySlider.length
    }
    for (i = 0; i < mySlider.length; i++) {
      mySlider[i].style.display = "none";
    }
    mySlider[slideIndex - 1].style.display = "block";
  }

  setTimeout(() => {
    showDivs(slideIndex);
    const plusDivs = (n) => {
      showDivs(slideIndex += n);
    }
    leftButton.onclick = () => plusDivs(-1);
    rightButton.onclick = () => plusDivs(1);
  }, 1000)

  leftButton.setAttribute('class', 'slider-display-left');
  leftButton.innerHTML = '&#10094;'
  rightButton.setAttribute('class', 'slider-display-right');
  rightButton.innerHTML = '&#10095;'

  const slider1 = flexContainer(link1, link2, link3);
  const slider2 = flexContainer(link4, link5, link6);
  const slider3 = flexContainer(link7, link8, link9);
  const backgroundBlur = document.createElement('div')
  backgroundBlur.setAttribute('class', 'background-blur')
  backgroundBlur.style.display = 'block'
  const header = document.createElement('header')
  header.setAttribute('class', 'header-menu')
  header.textContent = 'Enjoy a taste of heaven'

  const sliderWrapper = document.createElement('div')
  sliderWrapper.appendChild(slider3);
  sliderWrapper.appendChild(slider2);
  sliderWrapper.appendChild(slider1);
  sliderWrapper.appendChild(leftButton);
  sliderWrapper.appendChild(rightButton);
  sliderWrapper.appendChild(backgroundBlur)
  sliderWrapper.appendChild(header)

  return sliderWrapper
})();

export default menu;