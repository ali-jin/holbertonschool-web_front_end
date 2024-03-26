/**
 * A function that change the appearance of the wep page, with button.
 * @param {number} size 
 * @param {string} weight 
 * @param {string} transform 
 * @param {string} background 
 * @param {string} color 
 * @returns {Function}
 */
function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    const buttonSpooky = document.createElement("button");
    buttonSpooky.textContent = "Spooky";
    buttonSpooky.onclick = spooky;
    document.body.appendChild(buttonSpooky);

    const buttonDark = document.createElement("button");
    buttonDark.textContent = "Dark mode";
    buttonDark.onclick = darkMode;
    document.body.appendChild(buttonDark);

    const buttonScream = document.createElement("button");
    buttonScream.textContent = "Scream mode";
    buttonScream.onclick = screamMode;
    document.body.appendChild(buttonScream);
}

main();