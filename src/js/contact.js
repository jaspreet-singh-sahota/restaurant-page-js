const contact = (() => {
  const contactDiv = document.createElement('div')
  const coverDiv = document.createElement('div')
  coverDiv.setAttribute('class', 'cover')
  const backgroundImg = document.createElement('img')
  backgroundImg.src = 'https://www.flydining.com/wp-content/uploads/2020/01/gallery-slide-compressed.jpg'
  backgroundImg.style.width = '100%'
  const containerContactDiv = document.createElement('div')
  containerContactDiv.setAttribute('class', 'container-contact')
  const rowDiv = document.createElement('div')
  rowDiv.setAttribute('class', 'row-contact')
  const columnDiv = document.createElement('div')
  columnDiv.setAttribute('class', 'column')
  const form = document.createElement('form')
  const nameLabel = document.createElement('label')
  nameLabel.for = "fname"
  nameLabel.textContent = 'First Name'
  const lastNameLabel = document.createElement('label')
  lastNameLabel.for = 'lname'
  lastNameLabel.textContent = 'Last Name'
  const subjectLabel = document.createElement('label')
  subjectLabel.for = 'subject'
  subjectLabel.textContent = 'Subject'
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.id = 'fname'
  nameInput.placeholder = 'Your name..'
  const lastNameInput = document.createElement('input')
  lastNameInput.type = 'text'
  lastNameInput.id = 'lname'
  lastNameInput.placeholder = 'Your last name..'
  const subjectInput = document.createElement('textarea')
  subjectInput.id = 'subject'
  subjectInput.placeholder = 'Write something..'
  subjectInput.style.height = '170px'
  const submitInput = document.createElement('input')
  submitInput.type = 'submit'
  submitInput.value = 'submit'

  nameLabel.appendChild(nameInput)
  lastNameLabel.appendChild(lastNameInput)
  subjectLabel.appendChild(subjectInput)
  form.appendChild(nameLabel)
  form.appendChild(lastNameLabel)
  form.appendChild(subjectLabel)
  form.appendChild(submitInput)
  columnDiv.appendChild(form)
  rowDiv.appendChild(columnDiv)
  containerContactDiv.appendChild(rowDiv)
  coverDiv.appendChild(backgroundImg)
  contactDiv.appendChild(coverDiv)
  contactDiv.appendChild(containerContactDiv)

  const scriptTag = document.createElement('script')
  scriptTag.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?v=3.exp')
  const googleDiv = document.createElement('div')
  googleDiv.setAttribute('id', 'draggable-google-map')
  

  return [scriptTag, googleDiv, contactDiv]
})();

export default contact;