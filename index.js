const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// WhatsApp Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Compose WhatsApp message
  const whatsappMessage = `Hello, my name is ${name} (${email}). %0A%0A${message}`;

  // Your WhatsApp number in international format
  const whatsappURL = `https://wa.me/256726814113?text=${whatsappMessage}`;

  // Open WhatsApp directly in a new tab
  window.open(whatsappURL, "_blank");

  // Reset the form after sending
  contactForm.reset();
});
