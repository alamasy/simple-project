const natoSpelling = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const charEl = document.getElementById("char");
const timeEl = document.getElementById("time");

let timePrev = new Date();
console.log(timePrev);

addEventListener("keydown", (event) => {
    const randomIndex = getRandomArbitrary(1, 26);

    charEl.innerText = natoSpelling[randomIndex - 1];
    console.log("hai");
});
