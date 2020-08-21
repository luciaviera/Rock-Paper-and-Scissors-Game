const game = ()=> {

    let pScore;
    let cScore;

    //Start the game
    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click", ()=> {

            const playerScore = document.querySelector(".player-score p");
            const computerScore = document.querySelector(".computer-score p");
            const playerHand = document.querySelector(".player-hand");
            const computerHand = document.querySelector(".computer-hand");

            var winner = document.getElementById("winner");
            var winnerReason = document.getElementById("winnerReason");

            winner.innerText = "Choose an option";
            winnerReason.innerText = ""; 

            playerScore.textContent = 0;
            computerScore.textContent = 0;
            computerHand.src = "./pictures/ROCK.png";
            playerHand.src = "./pictures/ROCK.png"; 

            pScore = 0;
            cScore = 0;

            introScreen.classList.remove("fadeIn");
            introScreen.classList.add("fadeOut");

            match.classList.remove("fadeOut");
            match.classList.add("fadeIn");
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
                
                computerHand.src = "./pictures/ROCK.png";
                playerHand.src = "./pictures/ROCK.png"; 

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

        if(pScore == 5 || cScore == 5)
        {
            const introScreen = document.querySelector(".intro");
            const match = document.querySelector(".match");

            introScreen.classList.remove("fadeOut");
            introScreen.classList.add("fadeIn");

            match.classList.remove("fadeIn");
            match.classList.add("fadeOut");



            var title = document.getElementById("title");
            var button = document.getElementById("button1");

            title.innerText = pScore == 5 ? "Player wins!" : "Computer wins!";
            button.innerText = "LET'S PLAY AGAIN"; 
        }
    }

    const compareHands = (playerSelection, computerSelection) =>{
        //Update text
        const winner = document.querySelector(".winner");
        const winnerReason = document.querySelector(".winner-reason");

        //Checking for a tie
        if(playerSelection === computerSelection){
            winner.textContent = "It is a tie";
            winnerReason.textContent= "";
            return;
        }
        //Check for rock
        if (playerSelection === "ROCK"){
            if(computerSelection === "SCISSORS"){
                winner.textContent = "Player Wins";
                winnerReason.textContent= "Rock beats scissors";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                winnerReason.textContent= "Paper beats rock";
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for paper
        if (playerSelection === "PAPER"){
            if(computerSelection === "SCISSORS"){
                winner.textContent = "Computer Wins";
                winnerReason.textContent= "Scissors beats paper";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                winnerReason.textContent= "Paper beats rock";
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for scissors
        if (playerSelection === "SCISSORS"){
            if(computerSelection === "ROCK"){
                winner.textContent = "Computer Wins";
                winnerReason.textContent= "Rock beats Scissors";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                winnerReason.textContent= "Scissors beats paper";
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

