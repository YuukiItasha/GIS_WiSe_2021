// Karussell
const track = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.art-gallery .arrow:nth-of-type(1)');
const rightArrow = document.querySelector('.art-gallery .arrow:nth-of-type(2)');
const items = Array.from(track.children);

let currentIndex = 1; // Start erstes Bild
const itemsToShow = 4; // Anzahl der sichtbaren Bilder

const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);
firstClone.classList.add('clone');
lastClone.classList.add('clone');

track.appendChild(firstClone); 
track.prepend(lastClone); 

function setTrackWidth() {
    const itemWidth = items[0].offsetWidth;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
    track.style.width = `${(itemWidth + gap) * track.children.length}px`;
}

function updateCarousel() {
    const itemWidth = items[0].offsetWidth + parseFloat(window.getComputedStyle(track).gap || 0);
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function checkClones() {
    const itemsCount = items.length;

    if (track.children[currentIndex].classList.contains('clone')) {
        if (currentIndex === 0) {
            currentIndex = itemsCount;
        } else if (currentIndex === track.children.length - 1) {
            currentIndex = 1;
        }

        track.style.transition = 'none';
        updateCarousel();
        setTimeout(() => track.style.transition = 'transform 0.5s ease-in-out', 50);
    }
}

let startX = 0;
let endX = 0;

// Touchstart-Event: Startposition speichern
track.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

// Touchend-Event: Endposition speichern und Swipe-Distanz berechnen
track.addEventListener('touchend', (event) => {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
});

// Swipe-Logik
function handleSwipe() {
    const swipeDistance = endX - startX;

    if (swipeDistance > 50) {
        // Swipe nach rechts (vorheriges Bild)
        currentIndex--;
        updateCarousel();
        track.addEventListener('transitionend', checkClones);
    } else if (swipeDistance < -50) {
        // Swipe nach links (nächstes Bild)
        currentIndex++;
        updateCarousel();
        track.addEventListener('transitionend', checkClones);
    }
}


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

window.addEventListener('load', () => {
    setTrackWidth();
    updateCarousel();
});

window.addEventListener('resize', () => {
    setTrackWidth();
    updateCarousel();
});

// Kontaktformular
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('popupMessage').style.display = 'flex';
    this.reset();
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popupMessage').style.display = 'none';
});

// AGB, Datenschutz und Impressum Popups
['openAgb', 'openDatenschutz', 'openImpressum'].forEach(id => {
    document.getElementById(id).addEventListener('click', function (e) {
        e.preventDefault();
        const popupId = this.getAttribute('id').replace('open', 'popup');
        document.getElementById(popupId).style.display = 'flex';
    });
});

// Social-Media popups
document.getElementById('openFacebook').addEventListener('click', function (e) {
    e.preventDefault(); 
    document.getElementById('popupFacebook').style.display = 'flex';
});

document.getElementById('openInstagram').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('popupInstagram').style.display = 'flex';
});

document.getElementById('openTiktok').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('popupTiktok').style.display = 'flex';
});

// Newsletter-Formular

document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    document.getElementById('popupNewsletter').style.display = 'flex';

    this.reset();
});

// Schließen von Pop ups 

document.querySelectorAll('.popup-close').forEach(button => {
    button.addEventListener('click', function () {
        const popupId = this.getAttribute('data-close');
        document.getElementById(popupId).style.display = 'none';
    });
});

// Burger Menu

const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list');

burgerMenu.addEventListener('click', () => {
  navList.classList.toggle('show');
});
