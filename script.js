// ===============================
// OPEN LETTER
// ===============================

const openBtn = document.getElementById("openBtn");

if (openBtn) {
  openBtn.addEventListener("click", () => {
    document.querySelector(".intro").scrollIntoView({
      behavior: "smooth"
    });
  });
}


// ===============================
// TYPING EFFECT
// ===============================

const typingText = document.querySelector(".hero h1 span");

const text = "Najwa Ramadhani Caniago";
let index = 0;

if (typingText) {
  typingText.textContent = "";

  function typeEffect() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;

      setTimeout(typeEffect, 180);
    }
  }

  setTimeout(typeEffect, 800);
}


// ===============================
// SCROLL REVEAL
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===============================
// UNLIMITED CONFETTI
// ===============================

function createConfetti(amount = 8) {

  for (let i = 0; i < amount; i++) {

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    const colors = [
      "#6f2737",
      "#8a4655",
      "#a66b76",
      "#c08b92",
      "#d8b2b4"
    ];

    // Warna random
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // Posisi horizontal random
    confetti.style.left =
      Math.random() * 100 + "vw";

    // Ukuran random
    confetti.style.width =
      Math.random() * 5 + 4 + "px";

    confetti.style.height =
      Math.random() * 9 + 6 + "px";

    // Kecepatan random
    confetti.style.animationDuration =
      Math.random() * 4 + 5 + "s";

    // Delay random
    confetti.style.animationDelay =
      Math.random() * 1.5 + "s";

    // Gerakan horizontal
    confetti.style.setProperty(
      "--x",
      (Math.random() - 0.5) * 250 + "px"
    );

    // Rotasi
    confetti.style.setProperty(
      "--rotate",
      Math.random() * 720 + "deg"
    );

    document.body.appendChild(confetti);

    // Hapus setelah selesai
    setTimeout(() => {
      confetti.remove();
    }, 8000);
  }
}


// Confetti muncul terus-menerus
setInterval(() => {
  createConfetti(6);
}, 350);


// ===============================
// MAKE A WISH
// ===============================

const wishBtn = document.getElementById("wishBtn");

if (wishBtn) {

  wishBtn.addEventListener("click", () => {

    // Confetti lebih banyak saat tombol diklik
    createConfetti(80);


    // ===============================
    // FLOATING HEARTS
    // ===============================

    for (let i = 0; i < 25; i++) {

      const heart = document.createElement("div");

      heart.classList.add("floating-heart");

      heart.innerHTML = "♥";

      heart.style.left =
        Math.random() * 100 + "vw";

      heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

      heart.style.animationDuration =
        Math.random() * 3 + 3 + "s";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }

  });
}