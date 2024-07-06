let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll reveal

ScrollReveal({
  reset: true,
  distance: "260px",
  duration: 1600,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form, #Map iframe, .services-box, .about img",
  { origin: "bottom" }
);

ScrollReveal().reveal(".home-content h1, .about-content", { origin: "left" });

ScrollReveal().reveal(".home-content p, .about-img img, textarea", {
  origin: "right",
});

// TEXTES MULTIPLES WITH TYPE JS

const typed = new Typed(".multiple-text", {
  strings: [
    "Le transport des produits",
    "Le suivi jusqu'à destination",
    "La vente des ********",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
