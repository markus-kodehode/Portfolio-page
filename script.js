const carousel = document.querySelector(".projects-carousel");
const dotsContainer = document.getElementById("carousel-dots");
const cards = carousel.querySelectorAll(".projects-card");

// Calculate the number of visible slides and total groups
const visibleSlides = Math.floor(carousel.offsetWidth / cards[0].offsetWidth);
const totalGroups = Math.ceil(cards.length / visibleSlides);

// Generate dots
for (let i = 0; i < totalGroups; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.setAttribute("data-index", i);
  dot.onclick = () => goToSlideGroup(i);
  dotsContainer.appendChild(dot);
}

// Highlight the first dot
let currentGroup = 0;
updateDots();

// Slide projects function
function slideProjects(direction) {
  const cardWidth = carousel.querySelector(".projects-card").offsetWidth;
  const gap = parseInt(getComputedStyle(carousel).gap, 10) || 0;
  const scrollAmount = visibleSlides * (cardWidth + gap);
  currentGroup = Math.min(
    Math.max(0, currentGroup + direction),
    totalGroups - 1
  );
  carousel.scrollTo({
    left: currentGroup * scrollAmount,
    behavior: "smooth",
  });
  updateDots();
}

// Go to specific slide group
function goToSlideGroup(group) {
  currentGroup = group;
  const cardWidth = carousel.querySelector(".projects-card").offsetWidth;
  const gap = parseInt(getComputedStyle(carousel).gap, 10) || 0;
  const scrollAmount = visibleSlides * (cardWidth + gap);
  carousel.scrollTo({
    left: currentGroup * scrollAmount,
    behavior: "smooth",
  });
  updateDots();
}

// Update dot indicators
function updateDots() {
  document.querySelectorAll(".carousel-dots .dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentGroup);
  });
}
