/* Responsive Menu */

let nav = document.getElementById('navMenu');

nav.style.right = "-200px";

function openMenu() {
    nav.style.right = "0px";
}

function closeMenu() {
    nav.style.right = "-200px";
}

window.addEventListener('scroll', function () {
    var navbar = document.querySelector("#navbar");
    let scrollTop = document.querySelector('.ScrollTop')

    scrollTop.classList.toggle('active', this.window.scrollY > 500)
    navbar.classList.toggle('stick', window.scrollY > 0);


});

/* Form */

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    status.classList.add('success')
    status.innerHTML = "Enviado com sucesso!";
    form.reset()
  }).catch(error => {
    status.classList.add('error')
    status.innerHTML = "Ocorreu um erro durante o envio."
  });
}
form.addEventListener("submit", handleSubmit)


/* Link Active on scroll */

const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);
