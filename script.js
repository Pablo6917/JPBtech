// ===========================================================
// JPBTech — script.js
// Reemplazá WHATSAPP_NUMBER y EMAIL_ADDRESS por los tuyos.
// ===========================================================

const WHATSAPP_NUMBER = "56900000000"; // formato: código país + número, sin + ni espacios
const EMAIL_ADDRESS = "contacto@jpbtech.cl";

// Año en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Formulario de contacto: según el botón presionado, abre WhatsApp o el cliente de correo
const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const action = event.submitter?.dataset.action;
  const nombre = form.nombre.value.trim();
  const mensaje = form.mensaje.value.trim();

  if (!nombre || !mensaje) return;

  if (action === "whatsapp") {
    const texto = `Hola, soy ${nombre}. ${mensaje}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener");
  }

  if (action === "email") {
    const asunto = `Consulta de servicio técnico — ${nombre}`;
    const cuerpo = `Hola, soy ${nombre}.\n\n${mensaje}`;
    const url = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = url;
  }
});
