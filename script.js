let x = "x";
let o = "o";

let box = document.querySelectorAll(".box");
let rst = document.querySelector("#rst");
let turn0 = true; // true = 'o' turn, false = 'x' turn

// Grab the new modern UI elements from your HTML
let winScreen = document.querySelector("#win-screen");
let winnerText = document.querySelector("#winner-text");

console.log(box);

// Input operation
box.forEach((bt) => {
    bt.addEventListener('click', () => {
        if (turn0) {
            turn0 = false;
            bt.innerText = "o";
        } else {
            bt.innerText = "x";
            turn0 = true;
        }
        bt.disabled = true;
        
        checkWinner(); // Execute the win checking function
        console.log("btn clicked");
    });
});

// Possible win patterns
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// Winning logic matching your fixed pattern loops
const checkWinner = () => {
    for (let p of winPatterns) {
        let p1 = box[p[0]].innerText;
        let p2 = box[p[1]].innerText;
        let p3 = box[p[2]].innerText;

        // Check that none of them are empty and they all equal each other
        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                console.log("win");
                
                // Set the big victory text to show who won ('x' or 'o')
                winnerText.innerText = p1;
                
                // Add your custom class to trigger the smooth CSS glass overlay pop up
                winScreen.classList.add("show");
                return; // Stop looking for more winners
            }
        }
    }
};

// Reset system operation
erase = () => {
    box.forEach((bt) => {
        bt.innerText = "";
        bt.disabled = false;
    });
    
    // Hide the glass overlay away when resetting
    winScreen.classList.remove("show");
    turn0 = true; // Reset starting turn back to original sequence
    console.log("Game cleared!");
};

rst.addEventListener('click', erase);

// Also make it so clicking on the win screen overlay closes it and resets the game
winScreen.addEventListener('click', erase);