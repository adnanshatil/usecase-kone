let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const counter = document.getElementById('slide-counter');
const persistentKoneLogo = document.getElementById('persistent-kone');

function updateSlides() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    counter.innerText = `${currentSlide + 1} / ${slides.length}`;
    
    // Hide persistent logo on the first slide to prevent duplicate branding[cite: 1]
    if (currentSlide === 0) {
        persistentKoneLogo.style.opacity = '0';
        persistentKoneLogo.style.pointerEvents = 'none';
    } else {
        persistentKoneLogo.style.opacity = '1';
    }
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide >= slides.length) currentSlide = slides.length - 1;
    updateSlides();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') changeSlide(1);
    if (e.key === 'ArrowLeft') changeSlide(-1);
});

// Initialize
updateSlides();
