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

    navbar.classList.toggle('stick', window.scrollY > 0);


});

/* Formulario */

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
