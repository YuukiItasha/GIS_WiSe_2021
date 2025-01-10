const track = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.art-gallery .arrow:nth-of-type(1)');
const rightArrow = document.querySelector('.art-gallery .arrow:nth-of-type(2)');
const items = Array.from(track.children); 

let currentIndex = 1; // Start erstes Bild
const itemsToShow = 4; // Anzahl der sichtbaren Bilder

// zum durchlaufen 
const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

firstClone.classList.add('clone');
lastClone.classList.add('clone');

// weitere Klone hinzugefügt
track.appendChild(firstClone); // Ende
track.prepend(lastClone); // Anfang

// Breite des Karussells
function setTrackWidth() {
    const itemWidth = items[0].offsetWidth;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;

    // Breite der Bilder
    track.style.width = `${(itemWidth + gap) * track.children.length}px`;
}

// Bewegung 
function updateCarousel() {
    const itemWidth = items[0].offsetWidth + parseFloat(window.getComputedStyle(track).gap || 0);

    // Berechnung der Position basierend auf sichtbaren Elementen
    const translateX = -currentIndex * itemWidth;
    track.style.transform = `translateX(${translateX}px)`;
}

// am Ende vom Karusell den Klon holen
function checkClones() {
    const itemsCount = items.length;

    // Springen zu echtem Anfang/Ende, falls ein Klon erreicht wird
    if (track.children[currentIndex].classList.contains('clone')) {
        if (currentIndex === 0) {
            currentIndex = itemsCount; // zum letzten Bild
        } else if (currentIndex === track.children.length - 1) {
            currentIndex = 1; // zum ersten Bild
        }

        // Springen ohne Animation
        track.style.transition = 'none';
        updateCarousel();

        // Animation wieder aktivieren
        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease-in-out'; //dass es smooth ist
        }, 50); // Leichte Verzögerung, um den Sprung zu vermeiden
    }
}


// Pfeile
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

function getItemsToShow() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1200) return 4; // Desktop: 4 Bilder
    if (screenWidth > 768) return 3;  // Tablet: 3 Bilder
    return 2;                         // Mobile: 2 Bilder
}

// Bewegung des Karussells mit dynamischer Berechnung
function updateCarousel() {
    const itemWidth = items[0].offsetWidth + parseFloat(window.getComputedStyle(track).gap || 0);
    const totalWidth = (itemWidth + parseFloat(window.getComputedStyle(track).gap || 0)) * getItemsToShow();

    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    track.style.width = `${totalWidth}px`;
}

// Fensteränderungen für responsive
window.addEventListener('resize', () => {
    setTrackWidth();
    updateCarousel();
});

