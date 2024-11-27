// Henter elementer fra HTML-dokumentet ved hjelp av ID-er
const img_stein = document.getElementById("stein"); // Bilde for "stein"
const img_saks = document.getElementById("saks");  // Bilde for "saks"
const img_papir = document.getElementById("papir"); // Bilde for "papir"
const tekstboks = document.getElementById("tekstboks"); // Tekstboks for resultat
const box = document.getElementById("box"); // Boks for meldinger

// Sjekker om nødvendige elementer er tilgjengelige
if (!img_stein || !img_saks || !img_papir || !tekstboks || !box) {
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

// Hovedfunksjon for spillet
function spill(valg) {
    // Sjekker om brukeren har flere liv igjen
    if (liv <= 0) {
        box.innerHTML = "Du er allerede ute av liv!"; // Viser melding hvis liv er 0
        return; // Stopper funksjonen
    }

    antallKlikk++; // Øker antall klikk hver gang spill-funksjonen kalles

    // Motstanderens valg genereres tilfeldig (0 = stein, 1 = saks, 2 = papir)
    const motstanderValg = Math.floor(Math.random() * 3);
    const motstander = ["stein", "saks", "papir"][motstanderValg]; // Finner motstanderens valg basert på tallet

    let resultat = ""; // Variabel for å lagre resultatet av runden

    // Logikk for å avgjøre hvem som vinner
    if (valg === motstander) {
        resultat = "Uavgjort!"; // Hvis begge velger det samme, blir det uavgjort
    } else if (
        // Brukeren vinner med de følgende kombinasjonene
        (valg === "stein" && motstander === "saks") ||
        (valg === "saks" && motstander === "papir") ||
        (valg === "papir" && motstander === "stein")
    ) {
        resultat = "Du vant!"; // Brukeren vinner
    } else {
        resultat = "Motstander vant!"; // Motstanderen vinner
        liv--; // Reduserer antall liv når brukeren taper
    }

    // Oppdaterer tekstboksen for å vise motstanderens valg og resultat
    tekstboks.innerHTML = `Motstander valgte ${motstander}. ${resultat}`;

    // Sjekker om brukeren har gått tom for liv
    if (liv === 0) {
        box.innerHTML = "Du er ute av liv"; // Viser melding når alle liv er brukt opp
    }
}
     