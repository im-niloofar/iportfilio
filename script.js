const toggleBtn = document.getElementById("theme");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    }

});

if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
}
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });

});
console.log("script loaded");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

const cards = document.querySelectorAll(".project-card");

console.log("cards found:", cards.length);

cards.forEach(card => {

  card.addEventListener("click", () => {

    const img = card.querySelector("img");

    console.log("card clicked");

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;

  });

});

closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};
window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }

});