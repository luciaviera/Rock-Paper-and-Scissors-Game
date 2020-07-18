const game = ()=> {

    let playerScore = 0;
    let computerScore = 0;

    //Start the game
    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click", ()=> {
            introScreen.classList.add("fadeOut");
            match .classList.add("fadeIn");
        });
    };
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");


        //Computer Options
        const computerOptions = ["rock", "paper", "scisors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                //Computer Play
                const computerNumber = Math.floor(Math.random() *3);
                const computerPlay = computerOptions[computerNumber];
                console.log(computerPlay);
            });
        });

    };

    // Call all the inner functions
    startGame();
    playMatch();

};

// Start all the game functions
game();

