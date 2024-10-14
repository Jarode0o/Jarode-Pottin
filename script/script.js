// Texte animé (typewriter)
const textArray = [
    "HTML, CSS, JS", 
    "Création de design", 
    "Photoshop, Première Pro",
    "MySQL, jQuery", 
    "Utilisation de l'Intelligence Artificiel"
];
let index = 0;
let charIndex = 0;
let currentText = '';
let deleting = false;

const typeWriterEffect = () => {
    const textDisplay = document.getElementById('code-text');

    if (!deleting && charIndex <= textArray[index].length) {
        currentText = textArray[index].substring(0, charIndex);
        charIndex++;
        textDisplay.innerHTML = currentText;
    } else if (deleting && charIndex > 0) {
        currentText = textArray[index].substring(0, charIndex);
        charIndex--;
        textDisplay.innerHTML = currentText;
    }

    if (charIndex === textArray[index].length) {
        deleting = true;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        index++;
        if (index === textArray.length) {
            index = 0;
        }
    }

    setTimeout(typeWriterEffect, deleting ? 100 : 200);
}

// Exécuter l'animation de texte à la fin du chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    typeWriterEffect();
    
    // Slide descendant lors du clic sur le bouton call to action (le cercle orange)
    const scrollButton = document.querySelector('.scroll-down'); // Sélectionne le bouton cercle orange
    scrollButton.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector('#skills'); // Section "Compétences"
        
        // Smooth scroll vers la section compétences
        window.scrollTo({
            top: target.offsetTop, // Position de la section
            behavior: 'smooth' // Effet fluide
        });
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Merci pour votre message !');
        contactForm.reset();
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    document.getElementById('scroll-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

