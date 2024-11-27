// Henter elementer fra HTML-dokumentet ved hjelp av ID-er
const img_stein = document.getElementById("stein");
const img_saks = document.getElementById("saks");
const img_papir = document.getElementById("papir");
const tekstboks = document.getElementById("tekstboks");
const box = document.getElementById("box");
const restartButton = document.getElementById("restartButton"); // Restart-knapp

// Sjekker om nødvendige elementer er tilgjengelige
if (!img_stein || !img_saks || !img_papir || !tekstboks || !box || !restartButton) {
    console.error("En eller flere nødvendige elementer mangler i HTML-dokumentet.");
    throw new Error("Feil: Manglende elementer. Sørg for at HTML-en er riktig.");
}

// Variabler for å holde styr på antall klikk og antall liv
let antallKlikk = 0; 
let liv = 3;

// Legger til event listeners på hver knapp/bilde
img_stein.addEventListener("click", () => spill("stein"));
img_saks.addEventListener("click", () => spill("saks"));
img_papir.addEventListener("click", () => spill("papir"));

// Legger til event listener på restart-knappen
restartButton.addEventListener("click", restartSpill);

// Hovedfunksjon for spillet
function spill(valg) {
    // Sjekker om brukeren har flere liv igjen
    if (liv <= 0) {
        box.innerHTML = "Du er allerede ute av liv!";
        return;
    }

    antallKlikk++;

    // Motstanderens valg genereres tilfeldig (0 = stein, 1 = saks, 2 = papir)
    const motstanderValg = Math.floor(Math.random() * 3);
    const motstander = ["stein", "saks", "papir"][motstanderValg];

    let resultat = "";

    // Logikk for å avgjøre hvem som vinner
    if (valg === motstander) {
        resultat = "Uavgjort!";
    } else if (
        (valg === "stein" && motstander === "saks") ||
        (valg === "saks" && motstander === "papir") ||
        (valg === "papir" && motstander === "stein")
    ) {
        resultat = "Du vant!";
    } else {
        resultat = "Motstander vant!";
        liv--;
    }

    // Oppdaterer tekstboksen
    tekstboks.innerHTML = `Motstander valgte ${motstander}. ${resultat}`;

    // Sjekker om brukeren har gått tom for liv
    if (liv === 0) {
        box.innerHTML = "Du er ute av liv";
    }
}

// Funksjon for å tilbakestille spillet
function restartSpill() {
    liv = 3; // Resetter liv
    antallKlikk = 0; // Resetter antall klikk
    tekstboks.innerHTML = ""; // Tømmer tekstboksen
    box.innerHTML = "Velg stein, saks eller papir for å starte spillet!"; // Resetter meldingen
}
