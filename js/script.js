/*--=============== RESPONSIVE MENU ===============--*/

let nav = document.getElementById('navMenu');
const menuIcon = document.getElementById('mobile-menu');

function toogleMenu() {
  nav.classList.toggle('openMobile');
  menuIcon.classList.toggle('active');
}

function closeMenu() {
  nav.classList.remove('openMobile');
  menuIcon.classList.remove('active');
}

/*--=============== STICKY NAVBAR ===============--*/
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('#navbar');
  let scrollTop = document.querySelector('.ScrollTop');

  scrollTop.classList.toggle('active', this.window.scrollY > 500);
  navbar.classList.toggle('stick', window.scrollY > 0);
});

/*--=============== FORM ===============--*/

var form = document.getElementById('my-form');

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('status');
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      status.classList.add('success');
      status.innerHTML =
        'Sua mensagem foi enviada com sucesso! Entrarei em contato em breve.';
      form.reset();
    })
    .catch((error) => {
      status.classList.add('error');
      status.innerHTML = 'Ocorreu um erro durante o envio da mensagem :(';
    });
}
form.addEventListener('submit', handleSubmit);

/*--=============== LINK ACTIVE ON SCROLL ===============--*/

const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

/*--=============== GET CURRENT YEAR ===============--*/

const YearDisplay = document.getElementById('CurrentYear');

const currentYear = new Date();

YearDisplay.innerText = currentYear.getFullYear();

/*--=============== CHANGE NAVBAR IMG ON SCREEN SIZE ===============--*/

const Logo = '../assets/img/logo.png';
const whiteLogo = '../assets/img/logoWhite.png';
const navbar = document.getElementById('navbar');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', function () {
  if (document.querySelector('.navbar.stick')) {
    logo.firstChild.src = Logo;
  } else {
    logo.firstChild.src = whiteLogo;
  }
});

/*--=============== FIXING NAVIGATION COVERING CONTENT ON SCROLL ===============--*/

const navgationHeight = Math.floor(
  document.querySelector('#navbar').offsetHeight,
);

document.documentElement.style.setProperty(
  '--scroll-padding',
  navgationHeight + 'px',
);
