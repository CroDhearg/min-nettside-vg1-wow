// Henter elementer fra HTML-dokumentet ved hjelp av ID-er  
const imgStein = document.getElementById("stein");
const imgSaks = document.getElementById("saks");
const imgPapir = document.getElementById("papir");
const tekstboks = document.getElementById("tekstboks");
const box = document.getElementById("box");
const restartButton = document.getElementById("restartButton"); // Restart-knapp

// Sjekker om nødvendige elementer er tilgjengelige  
if (!imgStein || !imgSaks || !imgPapir || !tekstboks || !box || !restartButton) {
    console.error("En eller flere nødvendige elementer mangler i HTML-dokumentet.");
    throw new Error("Feil: Manglende elementer. Sørg for at HTML-en er riktig.");
}

// Variabler for å holde styr på antall klikk og antall liv  
let antallKlikk = 0; 
let liv = 3;

// Legger til event listeners på hver knapp/bilde  
imgStein.addEventListener("click", () => startSpill("stein"));
imgSaks.addEventListener("click", () => startSpill("saks"));
imgPapir.addEventListener("click", () => startSpill("papir"));
restartButton.addEventListener("click", restartSpill);

// Hovedfunksjon for spillet  
function startSpill(valg) {
    // Sjekker om brukeren har flere liv igjen  
    if (liv <= 0) {
        box.innerHTML = "Du er allerede ute av liv!";
        return;
    }

    antallKlikk++;

    // Motstanderens valg genereres tilfeldig (0 = stein, 1 = saks, 2 = papir)
    const motstanderValg = Math.floor(Math.random() * 3);
    const motstander = ["stein", "saks", "papir"][motstanderValg];

    let resultat = getResultat(valg, motstander);

    // Oppdaterer tekstboksen  
    tekstboks.innerHTML = `Motstander valgte ${motstander}. ${resultat}`;

    // Sjekker om brukeren har gått tom for liv  
    if (liv === 0) {
        box.innerHTML = "Du er ute av liv";
    }
}

// Funksjon for å avgjøre resultatet av spillet  
function getResultat(spiller, motstander) {
    let resultat = "";
    if (spiller === motstander) {
        resultat = "Uavgjort!";
    } else if (
        (spiller === "stein" && motstander === "saks") ||
        (spiller === "saks" && motstander === "papir") ||
        (spiller === "papir" && motstander === "stein")
    ) {
        resultat = "Du vant!";
    } else {
        resultat = "Motstander vant!";
        liv--;
    }
    return resultat;
}

// Funksjon for å tilbakestille spillet  
function restartSpill() {
    liv = 3; // Resetter liv  
    antallKlikk = 0; // Resetter antall klikk  
    tekstboks.innerHTML = ""; // Tømmer tekstboksen  
    box.innerHTML = "velg stein, saks eller papir for å starte spillet!"
}