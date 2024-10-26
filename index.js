// Définir la date limite pour le compte à rebours (ici le 31 octobre à 23h59)
const countdownDate = new Date("Nov 02, 2024 23:59:59").getTime();

// Mettre à jour le compteur toutes les secondes
const countdownFunction = setInterval(function() {
    // Récupérer la date et l'heure actuelle
    const now = new Date().getTime();
    
    // Calculer la différence entre la date actuelle et la date de fin
    const distance = countdownDate - now;

    // Calculer les jours, heures, minutes et secondes restants
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Afficher le résultat dans l'élément avec l'id "countdown"
    document.getElementById("countdown").innerHTML =
        `<span>${days}J</span> : <span>${hours}H</span> : <span>${minutes}M</span> : <span>${seconds}S</span>`;

    // Si le compte à rebours est terminé, afficher un message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "La promotion est terminée !";
    }
}, 1000);