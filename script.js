const carousel = document.querySelector(".projects-carousel");

function slideProjects(direction) {
  const cardWidth = carousel.querySelector(".projects-card").offsetWidth;
  const gap = parseInt(getComputedStyle(carousel).gap, 10) || 0;
  const scrollAmount = 2 * (cardWidth + gap); // Scroll 2 cards at a time
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}
