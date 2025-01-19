
document.cookie = "username=spyware; expires=Thu, 01 Jan 2026 00:00:00 GMT"
// Data storage
const data = [];

// Form and table elements
const form = document.getElementById('data-form');
const tableBody = document.querySelector('#data-table tbody');
const chartCanvas = document.getElementById('chart');

// Chart instance
let chart;

// Add data to the table and chart
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const day = document.getElementById('day').value;
    const weight = parseFloat(document.getElementById('weight').value);

    // Add to data array
    data.push({ day, weight });

    // Update table
    const row = document.createElement('tr');
    row.innerHTML = `<td>${day}</td><td>${weight} kg</td>`;
    tableBody.appendChild(row);

    // Update chart
    updateChart();
});

// Update chart
function updateChart() {
    const labels = data.map(entry => entry.day);
    const values = data.map(entry => entry.weight);

    if (chart) chart.destroy(); // Destroy previous chart

    chart = new Chart(chartCanvas, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Avfall (kg)',
                data: values,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Quiz data
const quizQuestions = [
    { item: 'Plastflaske', correct: 'Plast' },
    { item: 'Avis', correct: 'Papir' },
    { item: 'Matrester', correct: 'Restavfall' }
];

let currentQuestionIndex = 0;

// Quiz elements
const questionElement = document.getElementById('question');
const feedbackElement = document.getElementById('quiz-feedback');
const quizButtons = document.querySelectorAll('.quiz-btn');

// Load quiz question
function loadQuizQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    questionElement.textContent = `Hvor skal du sortere ${question.item}?`;
    feedbackElement.textContent = '';
}

// Check answer
quizButtons.forEach(button => {
    button.addEventListener('click', () => {
        const userAnswer = button.getAttribute('data-answer');
        const correctAnswer = quizQuestions[currentQuestionIndex].correct;

        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = 'Riktig!';
            feedbackElement.style.color = 'green';
        } else {
            feedbackElement.textContent = 'Feil. Prøv igjen!';
            feedbackElement.style.color = 'red';
        }

        // Move to next question after delay
        setTimeout(() => {
            currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
            loadQuizQuestion();
        }, 1000);
    });
});

// Initialize quiz
loadQuizQuestion();

document.addEventListener("DOMContentLoaded", function() {
    // Fetch the IP address from the API
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            // Display the IP address on the screen
            document.getElementById("ip-address").textContent = data.ip;
        })
        .catch(error => {
            console.error("Error fetching IP address:", error);
        });
});