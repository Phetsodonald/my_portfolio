const toggle = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const contactForm = document.querySelector("#contact");

toggle.addEventListener("click", () => {
  sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
});


contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputs = contactForm.querySelectorAll("input, textarea");
  inputs.forEach(input => input.value = "");
});
