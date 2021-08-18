import './style.css'

document.querySelector('.app').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const myLink = document.getElementById('link');
const myApp = document.querySelector('.app');

myLink.addEventListener('click', (event) => {
  event.preventDefault();
  if (myApp.innerHTML == '') {
    myApp.innerHTML = `
    <h1>B. Academy</h1>
    <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
  `
  }
  else {
    myApp.innerHTML = ''
  }
  console.log('clicou');
})
