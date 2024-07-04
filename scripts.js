document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-container");

  carousels.forEach((carouselContainer) => {
    const carousel = carouselContainer.querySelector(".carousel");
    const prevButton = carouselContainer.querySelector(".carousel-prev");
    const nextButton = carouselContainer.querySelector(".carousel-next");
    const slides = carousel.querySelectorAll("img");
    let currentIndex = 0;

    const updateCarousel = () => {
      const width = carouselContainer.clientWidth;
      carousel.style.transform = `translateX(${-width * currentIndex}px)`;
    };

    prevButton.addEventListener("click", () => {
      currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      updateCarousel();
    });

    nextButton.addEventListener("click", () => {
      currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
    updateCarousel();
  });
});
