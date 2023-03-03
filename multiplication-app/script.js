// Generate random number
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// Render question
const question = document.getElementById("question");
question.innerText = `Berapa hasil dari ${num1} x ${num2}`;

// Catch the answer
const ans = document.getElementById("form");
const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

const correctAns = num1 * num2;
let score = JSON.parse(localStorage.getItem("nilai"));
scoreEl.innerText = `Score: ${score}`;

ans.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInput = +inputEl.value;

    if (userInput === correctAns) {
        score += 100;
        updateLocalStorage();
        scoreEl.innerText = `Score: ${score}`;
    }
});
function updateLocalStorage() {
    localStorage.setItem("nilai", JSON.stringify(score));
}
