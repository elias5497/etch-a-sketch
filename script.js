let parent = document.querySelector(".grid");
let button = document.querySelector("button");
button.addEventListener('click', repeat);

repeat();

function repeat() {
    parent.innerHTML = "";

    let num = parseInt(prompt("Enter number of cells per row (between 1 and 100)"), 10);
    if (!num || num < 1) num = 1;
    if (num > 100) num = 100;

    for (let i = 0; i < num * num; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        parent.appendChild(cell);
    }
    document.querySelectorAll(".cell").forEach(cell => {
        cell.style.flex = `0 0 calc(100% / ${num})`;
    });
}

parent.addEventListener('mouseover', (event) => {
    const cell = event.target;
    if (!cell.classList || !cell.classList.contains('cell')) return;
    cell.style.backgroundColor = 'yellow';
});

parent.addEventListener('click', (event) => {
    const cell = event.target;
    if (!cell.classList || !cell.classList.contains('cell')) return;
    cell.style.backgroundColor = 'lightgray';
});

