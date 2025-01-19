// Data for all questions
const questionsData = [
    {
      question: "Vet du hva 'marint avfall' betyr?",
      labels: ["Ja", "Halveis"],
      values: [4, 1],
      colors: ["rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)"]
    },
    {
      question: "Hvor bor du i forhold til kysten?",
      labels: ["Nær kysten (0-10 km)"],
      values: [5],
      colors: ["rgba(75, 192, 192, 0.6)"]
    },
    {
      question: "Hvor ofte er du i nærheten av havet?",
      labels: ["Daglig", "Ukentlig"],
      values: [4, 1],
      colors: ["rgba(255, 99, 132, 0.6)", "rgba(153, 102, 255, 0.6)"]
    },
    {
      question: "Hvor alvorlig mener du problemet med marint avfall er?",
      labels: ["Ikke alvorlig", "Moderat alvorlig", "Svært alvorlig", "Litt alvorlig"],
      values: [5, 3, 1, 1],
      colors: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)"
      ]
    },
    {
      question: "Hvor ofte plukker du opp søppel?",
      labels: ["Aldri", "Av og til"],
      values: [4, 1],
      colors: ["rgba(153, 102, 255, 0.6)", "rgba(255, 159, 64, 0.6)"]
    },
    {
      question: "Er du villig til å endre atferd?",
      labels: ["Nei", "Ja"],
      values: [4, 1],
      colors: ["rgba(75, 192, 192, 0.6)", "rgba(255, 205, 86, 0.6)"]
    }
];

// Generate pie charts dynamically
const chartContainer = document.getElementById("chartContainer");

questionsData.forEach((data, index) => {
    // Create a chart container
    const chartItem = document.createElement("div");
    chartItem.classList.add("chart-item");

    // Add title
    const title = document.createElement("h3");
    title.textContent = data.question;
    chartItem.appendChild(title);

    // Add canvas for the chart
    const canvas = document.createElement("canvas");
    canvas.id = `chart${index}`;
    chartItem.appendChild(canvas);

    // Append to main container
    chartContainer.appendChild(chartItem);

    // Generate chart
    new Chart(canvas, {
      type: "pie",
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            backgroundColor: data.colors,
            borderColor: data.colors.map(color => color.replace("0.6", "1")),
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          }
        }
      }
    });
});
