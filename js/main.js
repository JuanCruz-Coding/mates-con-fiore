// --- Menú hamburguesa ---
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});


// --- Formulario → WhatsApp ---
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valido = true;

  const nombre  = document.getElementById('nombre');
  const email   = document.getElementById('email');
  const nivel   = document.getElementById('nivel');
  const mensaje = document.getElementById('mensaje');

  ['errorNombre', 'errorEmail', 'errorNivel', 'errorMensaje'].forEach(id => {
    document.getElementById(id).textContent = '';
  });
  document.getElementById('formSuccess').textContent = '';

  if (nombre.value.trim().length < 2) {
    document.getElementById('errorNombre').textContent = 'Ingresá tu nombre (mínimo 2 caracteres).';
    valido = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    document.getElementById('errorEmail').textContent = 'Ingresá un email válido.';
    valido = false;
  }

  if (!nivel.value) {
    document.getElementById('errorNivel').textContent = 'Seleccioná tu nivel.';
    valido = false;
  }

  if (mensaje.value.trim().length < 10) {
    document.getElementById('errorMensaje').textContent = 'El mensaje debe tener al menos 10 caracteres.';
    valido = false;
  }

  if (valido) {
    const telefono = '5493412140785';
    const texto = `Hola Fiore! Te escribo desde matesconfiore.com.ar 👋
*Nombre:* ${nombre.value.trim()}
*Email:* ${email.value.trim()}
*Nivel:* ${nivel.value}
*Mensaje:* ${mensaje.value.trim()}`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');

    document.getElementById('formSuccess').textContent = '¡Redirigiendo a WhatsApp...';
    form.reset();
  }
});