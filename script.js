<<<<<<< HEAD
=======
<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const userChoices = document.querySelectorAll('.player-choices .choice-btn');
    const userScoreEl = document.getElementById('your-score');
    const compScoreEl = document.getElementById('comp-score');
    const loseImg = document.getElementById('lose');
    const winImg = document.getElementById('win');
    const drawImg = document.getElementById('draw');
    const popupCard = document.getElementById('result-modal');
    const showPopupBtn = document.getElementById('game-exit-btn');
    const closeHappyBtn = document.getElementById('win-modal');
    const closeSadBtn = document.getElementById('lose-modal');

    let userScore = 0;
    let compScore = 0;
    
    function InputUserChoice(userChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const compChoice = choices[Math.floor(Math.random() * choices.length)];
       
        document.querySelectorAll('.computer-choices .computer-choice').forEach(img => {
            img.style.transform = 'scale(1)';
        });
        
        
        const compSelectedImg = document.getElementById(`comp-${compChoice}`);
        compSelectedImg.style.transform = 'scale(1.2)';
        
        setTimeout(() => {
            compSelectedImg.style.transform = 'scale(1)';
        }, 500);

        if (userChoice === compChoice) {
            displayResult("tie");
        } else if (
            (userChoice === 'rock' && compChoice === 'scissors') ||
            (userChoice === 'paper' && compChoice === 'rock') ||
            (userChoice === 'scissors' && compChoice === 'paper')
        ) {
            userScore++;
            userScoreEl.textContent = userScore;
            displayResult("win");
        } else {
            compScore++;
            compScoreEl.textContent = compScore;
            displayResult("lose");
        }
    };
  
    function displayResult(result) {
        winImg.style.display = result === "win" ? 'block' : 'none';
        loseImg.style.display = result === "lose" ? 'block' : 'none';
        drawImg.style.display = result === "tie" ? 'block' : 'none';

        setTimeout(() => {
            winImg.style.display = 'none';
            loseImg.style.display = 'none';
            drawImg.style.display = 'none';
        }, 500);
    }

    function resetGame() {
        userScore = 0;
        compScore = 0;
        userScoreEl.textContent = userScore;
        compScoreEl.textContent = compScore;
        popupCard.style.display = 'none';
        document.getElementById('winning-score').textContent = '';
        document.getElementById('losing-score').textContent = ''; 
        
        // Reset all computer choices
        document.querySelectorAll('.computer-choices .computer-choice').forEach(img => {
            img.style.transform = 'scale(1)';
        });
    }

    userChoices.forEach(img => {
        img.addEventListener('click', () => {
            const choice = img.id;
            img.style.transform = 'scale(0.8)';

            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 150); 
            InputUserChoice(choice);
        });
    });

    showPopupBtn.addEventListener('click', () => {
        popupCard.style.display = 'block';

        if (userScore > compScore) {
            closeHappyBtn.style.display = 'block';
            closeSadBtn.style.display = 'none';
            document.getElementById('winning-score').textContent = ` ${userScore} : ${compScore}`;
        } else {
            closeHappyBtn.style.display = 'none';
            closeSadBtn.style.display = 'block';
            document.getElementById('losing-score').textContent = ` ${userScore} : ${compScore}`;
        } 
    });
    
    closeHappyBtn.addEventListener('click', resetGame);
    closeSadBtn.addEventListener('click', resetGame);
});

document.addEventListener('click', (event) => {
    if (!popupCard.contains(event.target)) {
        resetGame();
    }
});
=======

>>>>>>> 70f040bd6f8cd3aa1fcee5df631a4a218d96374f
document.addEventListener('DOMContentLoaded', () => {
    const userChoices = document.querySelectorAll('.player-choices .choice-btn');
    const userScoreEl = document.getElementById('your-score');
    const compScoreEl = document.getElementById('comp-score');
    const loseImg = document.getElementById('lose');
    const winImg = document.getElementById('win');
    const drawImg = document.getElementById('draw');
    const popupCard = document.getElementById('result-modal');
    const showPopupBtn = document.getElementById('game-exit-btn');
    const closeHappyBtn = document.getElementById('win-modal');
    const closeSadBtn = document.getElementById('lose-modal');

    let userScore = 0;
    let compScore = 0;
    
    function InputUserChoice(userChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const compChoice = choices[Math.floor(Math.random() * choices.length)];
       
        document.querySelectorAll('.computer-choices .computer-choice').forEach(img => {
            img.style.transform = 'scale(1)';
        });
        
        
        const compSelectedImg = document.getElementById(`comp-${compChoice}`);
        compSelectedImg.style.transform = 'scale(1.2)';
        
        setTimeout(() => {
            compSelectedImg.style.transform = 'scale(1)';
        }, 500);

        if (userChoice === compChoice) {
            displayResult("tie");
        } else if (
            (userChoice === 'rock' && compChoice === 'scissors') ||
            (userChoice === 'paper' && compChoice === 'rock') ||
            (userChoice === 'scissors' && compChoice === 'paper')
        ) {
            userScore++;
            userScoreEl.textContent = userScore;
            displayResult("win");
        } else {
            compScore++;
            compScoreEl.textContent = compScore;
            displayResult("lose");
        }
    };
  
    function displayResult(result) {
        winImg.style.display = result === "win" ? 'block' : 'none';
        loseImg.style.display = result === "lose" ? 'block' : 'none';
        drawImg.style.display = result === "tie" ? 'block' : 'none';

        setTimeout(() => {
            winImg.style.display = 'none';
            loseImg.style.display = 'none';
            drawImg.style.display = 'none';
        }, 500);
    }

    function resetGame() {
        userScore = 0;
        compScore = 0;
        userScoreEl.textContent = userScore;
        compScoreEl.textContent = compScore;
        popupCard.style.display = 'none';
        document.getElementById('winning-score').textContent = '';
        document.getElementById('losing-score').textContent = ''; 
        
        // Reset all computer choices
        document.querySelectorAll('.computer-choices .computer-choice').forEach(img => {
            img.style.transform = 'scale(1)';
        });
    }

    userChoices.forEach(img => {
        img.addEventListener('click', () => {
            const choice = img.id;
            img.style.transform = 'scale(0.8)';

            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 150); 
            InputUserChoice(choice);
        });
    });

    showPopupBtn.addEventListener('click', () => {
        popupCard.style.display = 'block';

        if (userScore > compScore) {
            closeHappyBtn.style.display = 'block';
            closeSadBtn.style.display = 'none';
            document.getElementById('winning-score').textContent = ` ${userScore} : ${compScore}`;
        } else {
            closeHappyBtn.style.display = 'none';
            closeSadBtn.style.display = 'block';
            document.getElementById('losing-score').textContent = ` ${userScore} : ${compScore}`;
        } 
    });
    
    closeHappyBtn.addEventListener('click', resetGame);
    closeSadBtn.addEventListener('click', resetGame);
});

document.addEventListener('click', (event) => {
<<<<<<< HEAD
    if (!popupCard.contains(event.target)) {
        resetGame();
    }
});
=======
  if (!popupCard.contains(event.target)) {
      resetGame();
  }
});
>>>>>>> edccfb905789883a0171c606d97bd098b7939d03
>>>>>>> 70f040bd6f8cd3aa1fcee5df631a4a218d96374f
