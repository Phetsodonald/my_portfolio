const toggle = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click", () => {
  sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
});
