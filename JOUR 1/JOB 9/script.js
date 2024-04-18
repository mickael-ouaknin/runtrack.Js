function tri(numbers, order) {
    if (order === "asc") {
        return numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        return numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        console.log("Le paramètre 'order' doit être 'asc' ou 'desc'.");
        return numbers; // Retourne le tableau inchangé si l'ordre spécifié n'est pas valide
    }
}

// Exemple d'utilisation de la fonction
var numbers = [5, 2, 8, 1, 9, 3];
var orderedNumbersAsc = tri(numbers.slice(), "asc");
var orderedNumbersDesc = tri(numbers.slice(), "desc");

console.log("Tableau original :", numbers);
console.log("Tableau trié par ordre ascendant :", orderedNumbersAsc);
console.log("Tableau trié par ordre décroissant :", orderedNumbersDesc);
