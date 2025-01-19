// Quiz-spørsmål (på norsk)
const questions = [
    { question: "Hvor mye av marint avfall er plast?", options: ["60%", "80%", "90%", "70%"], correct: 2 },
    { question: "Hvor lang tid tar det for plast å brytes ned i havet?", options: ["10 år", "100 år", "450 år", "Aldri"], correct: 2 },
    { question: "Hvilken art påvirkes mest av å spise avfall?", options: ["Haier", "Skilpadder", "Hvaler", "Delfiner"], correct: 1 },
    { question: "Hva er Stillehavets søppeløy?", options: ["En søppelfylling", "En stor flytende øy av søppel", "Et naturfenomen", "Et oppryddingsprosjekt"], correct: 1 },
    { question: "Hva er et mikroplast?", options: ["Små glassbiter", "Små plastbiter mindre enn 5mm", "Plastflasker", "Plastposer"], correct: 1 },
    { question: "Hva er hovedkilden til plastforurensning i havet?", options: ["Skip", "Fiskeredskaper", "Avfall fra land", "Turisme"], correct: 2 },
    { question: "Hvor mange tonn plast havner i havet hvert år?", options: ["1 million", "5 millioner", "8 millioner", "10 millioner"], correct: 2 },
    { question: "Hva betyr 'ghost fishing'?", options: ["Fisk som forsvinner", "Forlatte fiskeredskaper som fanger fisk", "Fiske i nattemørket", "Fiske uten fangst"], correct: 1 },
    { question: "Hvor mange sjøfuglarter påvirkes av plast?", options: ["10%", "30%", "70%", "90%"], correct: 3 },
    { question: "Hva skjer med plast i havet over tid?", options: ["Brytes helt ned", "Blir mikroplast", "Forsvinner", "Blir gjenvunnet"], correct: 1 },
    { question: "Hva er en viktig løsning for å redusere plastforurensning?", options: ["Flere søppelfyllinger", "Økt resirkulering", "Kaste plast i havet", "Fjerne plastposer"], correct: 1 },
    { question: "Hvor mange skilpaddearter spiser plast?", options: ["2 arter", "4 arter", "6 arter", "Alle arter"], correct: 3 },
    { question: "Hva kan skje med fisken når de spiser plast?", options: ["Ingen effekt", "De vokser raskere", "De får helseproblemer", "De blir giftige for mennesker"], correct: 3 },
    { question: "Hva er mikroplast laget av?", options: ["Planter", "Plast som har blitt brutt ned", "Stein", "Fiskebein"], correct: 1 },
    { question: "Hvor mange havområder er sterkt påvirket av plastforurensning?", options: ["1", "3", "5", "Alle havområder"], correct: 3 },
    { question: "Hva er den viktigste årsaken til marin forsøpling?", options: ["Naturlig erosjon", "Menneskelig aktivitet", "Stormer", "Havstrømmer"], correct: 1 },
    { question: "Hva skjer når marine dyr blir fanget i plast?", options: ["De blir frie igjen", "De blir matet", "De kan dø", "De flytter til andre hav"], correct: 2 },
    { question: "Hvor mange tonn plast produseres hvert år globalt?", options: ["150 millioner tonn", "200 millioner tonn", "300 millioner tonn", "500 millioner tonn"], correct: 2 },
    { question: "Hva er et biologisk nedbrytbart materiale?", options: ["Plast", "Glass", "Metall", "Materiale som kan brytes ned naturlig"], correct: 3 },
    { question: "Hva kan du gjøre for å redusere marin forsøpling?", options: ["Bruke mindre plast", "Kaste søppel på gaten", "Ikke resirkulere", "Bruke mer engangsprodukter"], correct: 0 },
  ];
  
  // DOM-elementer
  const quizForm = document.getElementById("quiz-form");
  const questionsContainer = document.getElementById("questions");
  const resultsCanvas = document.getElementById("results-chart");
  const submitButton = document.getElementById("submit-quiz");
  
  // Legg til spørsmålene i quizen
  questions.forEach((q, index) => {
    const questionHTML = `
      <div class="question">
        <p>${index + 1}. ${q.question}</p>
        ${q.options
          .map(
            (option, i) =>
              `<label><input type="radio" name="question${index}" value="${i}"> ${option}</label>`
          )
          .join("")}
      </div>
    `;
    questionsContainer.innerHTML += questionHTML;
  });
  
  // Innsending og visning av resultater
  submitButton.addEventListener("click", () => {
    const userAnswers = [];
    let correctAnswers = 0;
  
    questions.forEach((q, index) => {
      const answer = document.querySelector(`input[name="question${index}"]:checked`);
      if (answer && parseInt(answer.value) === q.correct) {
        correctAnswers++;
      }
      userAnswers.push(answer ? parseInt(answer.value) : null);
    });
  
    const ctx = resultsCanvas.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Riktige svar", "Feil svar"],
        datasets: [
          {
            label: "Quizresultater",
            data: [correctAnswers, questions.length - correctAnswers],
            backgroundColor: ["#4CAF50", "#FF5733"],
          },
        ],
      },
    });
  
    submitButton.disabled = true;
    document.querySelectorAll("input").forEach(input => (input.disabled = true));
  });
  