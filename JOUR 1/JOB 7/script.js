function jourTravaille(date) {
    // Récupération du jour, du mois et de l'année de la date passée en paramètre
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
    var annee = date.getFullYear();

    // Liste des jours fériés en 2024
    var joursFeries = [
        "01-01", // Nouvel An
        "04-04", // Lundi de Pâques
        "05-01", // Fête du Travail
        "05-08", // Victoire 1945
        "05-30", // Ascension
        "06-10", // Lundi de Pentecôte
        "07-14", // Fête Nationale
        "08-15", // Assomption
        "11-01", // Toussaint
        "11-11", // Armistice 1918
        "12-25"  // Noël
    ];

    // Formatage du jour et du mois pour correspondre au format utilisé dans la liste des jours fériés
    var jourMois = (jour < 10 ? "0" : "") + jour + "-" + (mois < 10 ? "0" : "") + mois;

    // Vérification si la date est un jour férié
    if (joursFeries.includes(jourMois)) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié.");
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, le " + jour + "/" + mois + "/" + annee + " est un week-end.");
    } else {
        console.log("Oui, le " + jour + "/" + mois + "/" + annee + " est un jour travaillé.");
    }
}

// Exemple d'utilisation de la fonction
var dateTest = new Date(2024, 3, 15); // 15 Avril 2024
jourTravaille(dateTest);
