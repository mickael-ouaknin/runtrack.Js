function estNombrePremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre <= 3) return true;

    if (nombre % 2 === 0 || nombre % 3 === 0) return false;

    var i = 5;
    while (i * i <= nombre) {
        if (nombre % i === 0 || nombre % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

// Exemple d'utilisation de la fonction
var premier1 = 17;
var premier2 = 23;
var somme = sommeNombresPremiers(premier1, premier2);
if (somme !== false) {
    console.log("La somme des nombres premiers " + premier1 + " et " + premier2 + " est : " + somme);
} else {
    console.log("Au moins l'un des nombres n'est pas premier.");
}
