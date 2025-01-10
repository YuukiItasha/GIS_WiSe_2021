const track = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.art-gallery .arrow:nth-of-type(1)');
const rightArrow = document.querySelector('.art-gallery .arrow:nth-of-type(2)');
const items = Array.from(track.children); // Alle Bilder im Track

let currentIndex = 1; // Start beim ersten echten Bild
const itemsToShow = 4; // Anzahl der sichtbaren Bilder

// Klone das erste und letzte Bild
const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

firstClone.classList.add('clone');
lastClone.classList.add('clone');

// Füge die Klone hinzu
track.appendChild(firstClone); // Klone am Ende
track.prepend(lastClone); // Klone am Anfang

// Dynamische Breite des Tracks
function setTrackWidth() {
    const itemWidth = items[0].offsetWidth;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;

    // Breite aller echten und geklonten Bilder
    track.style.width = `${(itemWidth + gap) * track.children.length}px`;
}

// Bewegung des Karussells
function updateCarousel() {
    const itemWidth = items[0].offsetWidth + parseFloat(window.getComputedStyle(track).gap || 0);
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Springen zu echtem Anfang/Ende (nach der Animation)
function checkClones() {
    const itemsCount = items.length;

    if (track.children[currentIndex].classList.contains('clone')) {
        if (currentIndex === 0) {
            currentIndex = itemsCount; // Springe zum echten letzten Bild
        } else if (currentIndex === track.children.length - 1) {
            currentIndex = 1; // Springe zum echten ersten Bild
        }

        // Sofortiges Springen ohne Animation
        track.style.transition = 'none';
        updateCarousel();
        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease-in-out';
        });
    }
}

// Event-Listener für die Pfeile
leftArrow.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
    track.addEventListener('transitionend', checkClones);
});

rightArrow.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
    track.addEventListener('transitionend', checkClones);
});

// Initialisierung
window.addEventListener('load', () => {
    setTrackWidth();
    updateCarousel();
});
