const game = ()=> {

    let pScore = 0;
    let cScore = 0;

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
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        });


        //Computer Options
        const computerOptions = ["ROCK", "PAPER", "SCISSORS"];

        options.forEach(option => {

            option.addEventListener("click", function() {
                //Computer Play
                const computerPlay = Math.floor(Math.random() *3);
                const computerSelection = computerOptions[computerPlay];

                setTimeout(()=>{
                    //Call compare hands
                    compareHands(this.classList.value, computerSelection);

                    //Upadate pictures
                    computerHand.src =`./pictures/${computerSelection}.png`;
                    playerHand.src =`./pictures/${this.classList.value}.png`;
                }, 1300)

                //Animation
                playerHand.style.animation = "shakePlayer 1.5s ease";
                computerHand.style.animation = "shakeComputer 1.5s ease";
            });
        });

    };

    //Upadte score
    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent =cScore;
    }

    const compareHands = (playerSelection, computerSelection) =>{
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
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for paper
        if (playerSelection === "PAPER"){
            if(computerSelection === "SCISSORS"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for scissors
        if (playerSelection === "SCISSORS"){
            if(computerSelection === "ROCK"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
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

