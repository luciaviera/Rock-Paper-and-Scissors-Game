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
        const computerOptions = ["ROCK", "PAPER", "SCISSORS"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                //Computer Play
                const computerPlay = Math.floor(Math.random() *3);
                const computerSelection = computerOptions[computerPlay];

                //Call compare hands
                compareHands(computerSelection, this.classList.value);

                //Upadate pictures
                computerHand.src =`./pictures/${computerSelection}.png`;
                playerHand.src =`./pictures/${this.classList}.png`;
            });
        });

    };

    const compareHands = (computerSelection, playerSelection) =>{
        //Update text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if(playerSelection === computerSelection){
            winner.textContent = "It is a tie";
            return;
        }
        //Check for rock
        if (playerSelection === "ROCK"){
            if(computerSelection === "SCISSORS"){
                winner.textContent = "Player Wins";
                return;
            }else{
                winner.textContent = "Computer Wins";
                return;
            }
        }
        //Check for paper
        if (playerSelection === "PAPER"){
            if(computerSelection === "SCISSORS"){
                winner.textContent = "Computer Wins";
                return;
            }else{
                winner.textContent = "Player Wins";
                return;
            }
        }
        //Check for scissors
        if (playerSelection === "SCISSORS"){
            if(computerSelection === "ROCK"){
                winner.textContent = "Computer Wins";
                return;
            }else{
                winner.textContent = "Player Wins";
                return;
            }
        }
        

    }

    // Call all the inner functions
    startGame();
    playMatch();

};

// Start all the game functions
game();

