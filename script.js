// Confirm script is connected
console.log("✅ script.js connected successfully!");

// ================= Smooth Scroll for Anchor Links =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId && targetId.length > 1) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// ================= Back-to-Top Button =================
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.querySelector(".back-to-top");
  if (!backToTop) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });
});

// ================= Page Transitions =================
window.addEventListener("load", () => document.body.classList.add("loaded"));


// ================= Lightbox for Presentations =================
const presentationLinks = document.querySelectorAll('.presentation-item a');
const lightbox = document.getElementById('lightbox');
const lightboxFrame = document.getElementById('lightbox-frame');
const lightboxClose = document.querySelector('.lightbox-close');

presentationLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const pdfUrl = this.getAttribute('href');
    lightboxFrame.src = pdfUrl;
    lightbox.style.display = 'flex';
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxFrame.src = '';
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    lightboxFrame.src = '';
  }
});

// Optional: Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape" && lightbox.style.display === 'flex') {
    lightbox.style.display = 'none';
    lightboxFrame.src = '';
  }
});

// ================= Silly Goose =================

// Goose Easter egg
const goose = document.querySelector('.goose');
const gooseMessage = document.getElementById('goose-message');

// Load honk sound
const honk = new Audio('sounds/honk.mp3');

if (goose) {
  goose.addEventListener('click', () => {
    // Play honk sound
    honk.currentTime = 0;
    honk.play();

    // Wiggle animation
    goose.style.animation = 'wiggle 0.6s ease-in-out';
    goose.addEventListener('animationend', () => {
      goose.style.animation = '';
    }, { once: true });

    // Show secret message
    if (gooseMessage) {
      gooseMessage.style.display = 'block';
      setTimeout(() => {
        gooseMessage.style.display = 'none';
      }, 4000); // hide after 4 seconds
    }
  });
}
