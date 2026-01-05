// Dark mode toggle with persistence
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", current);
  localStorage.setItem("theme", current);
});

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href")?.substring(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    navLinks.classList.remove("show");
  });
});
