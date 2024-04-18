function afficherJoursSemaines() {
    // Création du tableau de strings contenant les jours de la semaine
    var joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    
    // Boucle for pour afficher chaque jour de la semaine
    for (var i = 0; i < joursSemaines.length; i++) {
        console.log(joursSemaines[i]);
    }
}

// Appel de la fonction pour l'exécuter
afficherJoursSemaines();
