const display = document.querySelector('.hexCode');
const picker = document.querySelector('.picker');
const change = document.querySelector('button');

function randomColor() {
    const value = Math.floor(Math.random() * 16777216);
    return '#' + value.toString(16).padStart(6, '0');
}

change.addEventListener("click", function () {
    const color = randomColor();
    document.body.style.backgroundColor = color;
    display.textContent = color;
    picker.value = color;
});

picker.addEventListener("input", function (event) {
    const color = event.target.value;
    document.body.style.backgroundColor = color;
    display.textContent = color;
});