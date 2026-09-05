const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-track img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function updateCarousel() {
    const imageWidth = images[0].clientWidth;

    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    updateCarousel();
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }

    updateCarousel();
});

window.addEventListener("resize", updateCarousel);
