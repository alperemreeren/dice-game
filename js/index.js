// Dice 1
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`)

// Dice 2
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`)

// Decide Winner
if (randomNumber1 > randomNumber2) {
    document.querySelector(".title").textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector(".title").textContent = "Player 2 Wins!";
} else if (randomNumber1 == randomNumber2) {
    document.querySelector(".title").textContent = "Draw!";
}