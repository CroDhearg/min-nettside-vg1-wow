function kalkulator(tall1, tall2, operasjon) {
    if (operasjon === "+") {
        return tall1 + tall2;
    } else if (operasjon === "-") {
        return tall1 - tall2;
    } else if (operasjon === "*") {
        return tall1 * tall2;
    } else if (operasjon === "/") {
        if (tall2 === 0) {
            return "Feil: Kan ikke dele på null.";
        }
        return tall1 / tall2;
    } else {
        return "Ugyldig operasjon.";
    }
}

// Eksempelbruk
const resultat = kalkulator(10, 5, "*"); // Multipliserer 10 med 5
console.log(resultat); // Skriver ut: 50
