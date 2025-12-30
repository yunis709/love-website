const sections = document.querySelectorAll('.section');
const dotsContainer = document.getElementById('nav-dots');
let current = 0;

sections.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.onclick = () => goTo(i);
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goTo(index) {
  sections[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = index;
  sections[current].classList.add('active');
  dots[current].classList.add('active');
}

function nextSection() {
  if (current < sections.length - 1) {
    goTo(current + 1);
  }
}

const music = document.getElementById('bg-music');
const btn = document.getElementById('music-btn');
let playing = false;

btn.onclick = () => {
  if (!playing) {
    music.play();
    btn.textContent = '⏸';
  } else {
    music.pause();
    btn.textContent = '🎵';
  }
  playing = !playing;
};
