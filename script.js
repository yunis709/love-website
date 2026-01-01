const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// تشغيل الموسيقى عند أول تفاعل
document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.play();
}, { once: true });  } else {
    music.pause();
    btn.textContent = '🎵';
  }
  playing = !playing;
};
