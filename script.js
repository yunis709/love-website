document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const music = document.getElementById("bgMusic");

  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  nextBtn.onclick = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  prevBtn.onclick = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  document.body.addEventListener("click", () => {
    music.play();
  }, { once: true });

});
