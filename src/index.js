"use strict";
function verifierChaine(chaine) {
    return /^[A-Za-z\s]*$/.test(chaine);
}
function majusculeAlternee(chaine) {
    if (!verifierChaine(chaine)) {
        return new Error("La chaîne contient des caractères non valides.");
    }
    let resultat = "";
    let compteurLettres = 0;
    for (const caractere of chaine) {
        if (caractere.match(/[A-Za-z]/)) {
            resultat +=
                compteurLettres % 2 === 0
                    ? caractere.toUpperCase()
                    : caractere.toLowerCase();
            compteurLettres++;
        }
        else {
            resultat += caractere;
        }
    }
    return resultat;
}
// Exemples d'utilisation
const exemple1 = majusculeAlternee("Hello world !");
if (exemple1 instanceof Error) {
    console.error(exemple1.message);
}
else {
    console.log(exemple1); // HeLlO wOrLd !
}
const exemple2 = majusculeAlternee("42");
if (exemple2 instanceof Error) {
    console.error(exemple2.message); // La chaîne contient des caractères non valides.
}
else {
    console.log(exemple2);
}
